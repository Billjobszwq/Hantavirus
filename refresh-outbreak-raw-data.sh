#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   TAVILY_API_KEY=xxx ./refresh-outbreak-raw-data.sh
# Optional:
#   OPENCLI_PROFILE=57a5zus5
#   SKIP_OPENCLI=1 (useful in CI where opencli is unavailable)

if [[ -z "${TAVILY_API_KEY:-}" ]]; then
  echo "TAVILY_API_KEY is required. Example:"
  echo "  TAVILY_API_KEY=your_key ./refresh-outbreak-raw-data.sh"
  exit 1
fi

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
RAW_ROOT="$ROOT_DIR/raw-sources"
HISTORY_ROOT="$RAW_ROOT/history"
LATEST_ROOT="$RAW_ROOT/latest"
OPENCLI_PROFILE="${OPENCLI_PROFILE:-57a5zus5}"
SKIP_OPENCLI="${SKIP_OPENCLI:-0}"
RAW_HISTORY_KEEP="${RAW_HISTORY_KEEP:-120}"

mkdir -p "$HISTORY_ROOT" "$LATEST_ROOT"
TMP_DIR="$(mktemp -d "${TMPDIR:-/tmp}/outbreak-raw.XXXXXX")"
trap 'rm -rf "$TMP_DIR"' EXIT

fetch_tavily() {
  local query="$1"
  local max_results="$2"
  local output_file="$3"

  local payload
  payload="$(jq -n \
    --arg key "$TAVILY_API_KEY" \
    --arg q "$query" \
    --argjson n "$max_results" \
    '{api_key:$key, query:$q, search_depth:"advanced", include_answer:true, max_results:$n}')"

  curl -fsS https://api.tavily.com/search \
    -H 'Content-Type: application/json' \
    -d "$payload" \
    | jq '.' > "$output_file"
}

run_opencli_or_stub() {
  local output_file="$1"
  shift

  if [[ "$SKIP_OPENCLI" == "1" ]] || ! command -v opencli >/dev/null 2>&1; then
    jq -n \
      --arg skipped "true" \
      --arg reason "opencli unavailable or SKIP_OPENCLI=1" \
      --arg cmd "$*" \
      '{skipped: ($skipped == "true"), reason: $reason, cmd: $cmd}' > "$output_file"
    return 0
  fi

  local tmp_file
  tmp_file="$(mktemp "${TMPDIR:-/tmp}/opencli.XXXXXX")"

  if opencli --profile "$OPENCLI_PROFILE" "$@" -f json > "$tmp_file" 2>/dev/null; then
    jq '.' "$tmp_file" > "$output_file"
  else
    jq -n \
      --arg error "opencli command failed" \
      --arg cmd "opencli --profile $OPENCLI_PROFILE $* -f json" \
      '{error: $error, cmd: $cmd}' > "$output_file"
  fi

  rm -f "$tmp_file"
}

prune_history() {
  local keep="$RAW_HISTORY_KEEP"
  if ! [[ "$keep" =~ ^[0-9]+$ ]] || [[ "$keep" -lt 1 ]]; then
    keep=120
  fi

  mapfile -t snapshots < <(find "$HISTORY_ROOT" -mindepth 1 -maxdepth 1 -type d | sort -r)
  local total="${#snapshots[@]}"
  if [[ "$total" -le "$keep" ]]; then
    return 0
  fi

  for ((i=keep; i<total; i++)); do
    rm -rf "${snapshots[$i]}"
  done
}

dir_hash() {
  node - "$1" <<'NODE'
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const dir = process.argv[2];
const hash = crypto.createHash('sha256');
const files = fs.readdirSync(dir)
  .filter((f) => f.endsWith('.json') && f !== 'fetch-meta.json')
  .sort();

const VOLATILE_KEYS = new Set([
  'answer',
  'elapsed_ms',
  'fetched_at',
  'follow_up_questions',
  'generatedAt',
  'images',
  'request_id',
  'response_time',
  'score',
  'search_time',
  'timestamp'
]);

function normalize(value) {
  if (Array.isArray(value)) return value.map(normalize);
  if (value && typeof value === 'object') {
    const out = {};
    for (const key of Object.keys(value).sort()) {
      if (VOLATILE_KEYS.has(key)) continue;
      out[key] = normalize(value[key]);
    }
    return out;
  }
  return value;
}

function stableProjection(file, json) {
  if (file.startsWith('tavily-')) {
    const results = Array.isArray(json.results) ? json.results : [];
    const urls = [...new Set(results.map((item) => item?.url || '').filter(Boolean))].sort();
    return {
      query: json.query || '',
      urls
    };
  }

  if (file.startsWith('opencli-')) {
    const rows = Array.isArray(json)
      ? json
      : (Array.isArray(json.results) ? json.results : []);

    const urls = [...new Set(rows.map((item) => item?.url || item?.link || '').filter(Boolean))].sort();
    return urls.length ? urls : normalize(json);
  }

  return normalize(json);
}

for (const file of files) {
  const filePath = path.join(dir, file);
  hash.update(file);
  hash.update('\n');
  try {
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    hash.update(JSON.stringify(stableProjection(file, json)));
  } catch {
    hash.update(fs.readFileSync(filePath));
  }
  hash.update('\n');
}

process.stdout.write(hash.digest('hex'));
NODE
}

echo "[1/5] Fetching WHO / outbreak overview from Tavily..."
fetch_tavily "WHO hantavirus MV Hondius latest confirmed cases deaths" 12 "$TMP_DIR/tavily-who-overview.json"

echo "[2/5] Fetching country-level updates from Tavily..."
fetch_tavily "hantavirus confirmed cases by nationality MV Hondius latest" 12 "$TMP_DIR/tavily-country-breakdown.json"

echo "[3/5] Fetching AP latest event from Tavily..."
fetch_tavily "AP hantavirus cruise ship latest May 2026 confirmed" 10 "$TMP_DIR/tavily-ap-latest.json"

echo "[4/5] Fetching multi-language media snapshots..."
run_opencli_or_stub "$TMP_DIR/opencli-google-news-en.json" google news "hantavirus MV Hondius" --limit 30 --lang en --region US
run_opencli_or_stub "$TMP_DIR/opencli-google-news-zh.json" google news "汉坦病毒 邮轮" --limit 30 --lang zh --region CN
run_opencli_or_stub "$TMP_DIR/opencli-reuters.json" reuters search "hantavirus cruise ship" --limit 20

jq -n \
  --arg generatedAt "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  --arg opencliProfile "$OPENCLI_PROFILE" \
  --arg skipOpencli "$SKIP_OPENCLI" \
  '{generatedAt:$generatedAt, opencliProfile:$opencliProfile, skipOpencli: ($skipOpencli == "1")}' \
  > "$TMP_DIR/fetch-meta.json"

new_hash="$(dir_hash "$TMP_DIR")"

if [[ -d "$LATEST_ROOT" ]]; then
  latest_hash="$(dir_hash "$LATEST_ROOT")"
else
  latest_hash=""
fi

if [[ "$new_hash" == "$latest_hash" && -n "$latest_hash" ]]; then
  echo "[5/5] No content change detected. Raw snapshot unchanged."
  node "$ROOT_DIR/scripts/update-raw-manifest.js" "$RAW_ROOT"
  exit 0
fi

stamp="$(date +%Y%m%d-%H%M%S)"
snapshot_dir="$HISTORY_ROOT/${stamp}-${new_hash:0:12}"
mkdir -p "$snapshot_dir"
cp "$TMP_DIR"/*.json "$snapshot_dir/"

rm -rf "$LATEST_ROOT"
mkdir -p "$LATEST_ROOT"
cp "$TMP_DIR"/*.json "$LATEST_ROOT/"
prune_history

node "$ROOT_DIR/scripts/update-raw-manifest.js" "$RAW_ROOT"

echo "[5/5] Raw snapshot updated."
echo "Latest: $snapshot_dir"
