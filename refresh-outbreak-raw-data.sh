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
OPENCLI_PROFILE_CONNECTED="0"

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

  local tmp_file
  tmp_file="$(mktemp "${TMPDIR:-/tmp}/tavily.XXXXXX")"

  local http_code
  http_code="$(curl -sS -w "%{http_code}" -o "$tmp_file" https://api.tavily.com/search \
    -H 'Content-Type: application/json' \
    -d "$payload" || true)"

  if [[ "$http_code" == "200" ]]; then
    if jq '.' "$tmp_file" > "$output_file" 2>/dev/null; then
      rm -f "$tmp_file"
      return 0
    fi
  fi

  local excerpt
  excerpt="$(head -c 1200 "$tmp_file" || true)"
  jq -n \
    --arg error "tavily request failed" \
    --arg status "$http_code" \
    --arg query "$query" \
    --arg excerpt "$excerpt" \
    '{error:$error, status:$status, query:$query, excerpt:$excerpt}' > "$output_file"

  rm -f "$tmp_file"
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

  local profile_args=()
  local profile_cmd=""
  if [[ "$OPENCLI_PROFILE_CONNECTED" == "1" ]]; then
    profile_args=(--profile "$OPENCLI_PROFILE")
    profile_cmd="--profile $OPENCLI_PROFILE"
  fi

  if [[ "${#profile_args[@]}" -gt 0 ]]; then
    if opencli "${profile_args[@]}" "$@" -f json > "$tmp_file" 2>/dev/null; then
      jq '.' "$tmp_file" > "$output_file"
    else
      jq -n \
        --arg error "opencli command failed" \
        --arg cmd "opencli ${profile_cmd} $* -f json" \
        --arg profileConnected "$OPENCLI_PROFILE_CONNECTED" \
        '{error: $error, cmd: $cmd, profileConnected: ($profileConnected == "1")}' > "$output_file"
    fi
  elif opencli "$@" -f json > "$tmp_file" 2>/dev/null; then
    jq '.' "$tmp_file" > "$output_file"
  else
    jq -n \
      --arg error "opencli command failed" \
      --arg cmd "opencli ${profile_cmd} $* -f json" \
      --arg profileConnected "$OPENCLI_PROFILE_CONNECTED" \
      '{error: $error, cmd: $cmd, profileConnected: ($profileConnected == "1")}' > "$output_file"
  fi

  rm -f "$tmp_file"
}

run_twitter_with_web_fallback() {
  local output_file="$1"
  local query="$2"

  run_opencli_or_stub "$output_file" twitter search "$query" --product live --limit 20

  if jq -e '.error?' "$output_file" >/dev/null 2>&1; then
    if [[ "$SKIP_OPENCLI" == "1" ]] || ! command -v opencli >/dev/null 2>&1; then
      return 0
    fi

    local markdown
    markdown="$(opencli web read --url "https://x.com/search?q=${query// /%20}&src=typed_query&f=live" --stdout true --wait 3 -f md 2>/dev/null || true)"
    local excerpt
    excerpt="$(printf '%s' "$markdown" | head -c 4000)"
    jq -n \
      --arg error "twitter adapter search failed; captured web fallback snapshot" \
      --arg query "$query" \
      --arg excerpt "$excerpt" \
      '{error:$error, query:$query, fallback:"opencli web read", excerpt:$excerpt}' > "$output_file"
  fi
}

detect_opencli_profile() {
  if ! command -v opencli >/dev/null 2>&1; then
    OPENCLI_PROFILE_CONNECTED="0"
    return 0
  fi

  if opencli profile list 2>/dev/null | rg -q "$OPENCLI_PROFILE"; then
    OPENCLI_PROFILE_CONNECTED="1"
  else
    OPENCLI_PROFILE_CONNECTED="0"
  fi
}

prune_history() {
  local keep="$RAW_HISTORY_KEEP"
  if ! [[ "$keep" =~ ^[0-9]+$ ]] || [[ "$keep" -lt 1 ]]; then
    keep=120
  fi

  local snapshots=()
  while IFS= read -r line; do
    snapshots+=("$line")
  done < <(find "$HISTORY_ROOT" -mindepth 1 -maxdepth 1 -type d | sort -r)
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

echo "[1/6] Fetching WHO / outbreak overview from Tavily..."
fetch_tavily "WHO hantavirus MV Hondius latest confirmed cases deaths" 12 "$TMP_DIR/tavily-who-overview.json"

detect_opencli_profile
if [[ "$OPENCLI_PROFILE_CONNECTED" == "1" ]]; then
  echo "[opencli] Connected profile detected: $OPENCLI_PROFILE"
else
  echo "[opencli] Profile $OPENCLI_PROFILE not connected. Falling back to profile-less opencli commands."
fi

echo "[2/6] Fetching country-level updates from Tavily..."
fetch_tavily "hantavirus confirmed cases by nationality MV Hondius latest" 12 "$TMP_DIR/tavily-country-breakdown.json"

echo "[3/6] Fetching AP latest event from Tavily..."
fetch_tavily "AP hantavirus cruise ship latest May 2026 confirmed" 10 "$TMP_DIR/tavily-ap-latest.json"

echo "[4/6] Fetching multi-language media snapshots..."
run_opencli_or_stub "$TMP_DIR/opencli-google-news-en.json" google news "hantavirus MV Hondius" --limit 30 --lang en --region US
run_opencli_or_stub "$TMP_DIR/opencli-google-news-zh.json" google news "汉坦病毒 邮轮" --limit 30 --lang zh --region CN
if [[ "$OPENCLI_PROFILE_CONNECTED" == "1" ]]; then
  run_opencli_or_stub "$TMP_DIR/opencli-reuters.json" reuters search "hantavirus cruise ship" --limit 20
else
  run_opencli_or_stub "$TMP_DIR/opencli-reuters.json" google news "site:reuters.com hantavirus cruise ship" --limit 20 --lang en --region US
fi
run_opencli_or_stub "$TMP_DIR/opencli-reddit-hondius.json" reddit search "MV Hondius hantavirus" --sort new --time month --limit 30
run_twitter_with_web_fallback "$TMP_DIR/opencli-twitter-hondius.json" "MV Hondius hantavirus observation"
run_twitter_with_web_fallback "$TMP_DIR/opencli-twitter-bnofeed-health.json" "from:BNOFeed (hantavirus OR Andes virus OR ebola OR Bundibugyo OR MV Hondius)"

echo "[5/6] Fetching external tracker benchmark snapshots..."
node "$ROOT_DIR/scripts/fetch-external-benchmarks.js" "$TMP_DIR/external-benchmarks.json"

jq -n \
  --arg generatedAt "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
  --arg opencliProfile "$OPENCLI_PROFILE" \
  --arg opencliProfileConnected "$OPENCLI_PROFILE_CONNECTED" \
  --arg skipOpencli "$SKIP_OPENCLI" \
  '{generatedAt:$generatedAt, opencliProfile:$opencliProfile, opencliProfileConnected: ($opencliProfileConnected == "1"), skipOpencli: ($skipOpencli == "1")}' \
  > "$TMP_DIR/fetch-meta.json"

new_hash="$(dir_hash "$TMP_DIR")"

if [[ -d "$LATEST_ROOT" ]]; then
  latest_hash="$(dir_hash "$LATEST_ROOT")"
else
  latest_hash=""
fi

if [[ "$new_hash" == "$latest_hash" && -n "$latest_hash" ]]; then
  echo "[6/6] No content change detected. Raw snapshot unchanged."
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

echo "[6/6] Raw snapshot updated."
echo "Latest: $snapshot_dir"
