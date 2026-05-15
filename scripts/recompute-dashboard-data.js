#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const OUTBREAK_PATH = path.join(ROOT, 'outbreak-data.js');
const RAW_LATEST_DIR = path.join(ROOT, 'raw-sources', 'latest');
const FETCH_META_PATH = path.join(RAW_LATEST_DIR, 'fetch-meta.json');
const EXTERNAL_BENCHMARKS_PATH = path.join(RAW_LATEST_DIR, 'external-benchmarks.json');

const SERIES_METRICS = ['confirmed', 'probable', 'deaths', 'confirmedDeaths', 'observed'];

function loadOutbreakData() {
  const code = fs.readFileSync(OUTBREAK_PATH, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  const data = sandbox.window.OUTBREAK_DATA;

  if (!data || typeof data !== 'object') {
    throw new Error('Failed to read OUTBREAK_DATA from outbreak-data.js');
  }

  return data;
}

function readJsonIfExists(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.warn(`[recompute] Failed to parse ${filePath}: ${err.message}`);
    return null;
  }
}

function toNumber(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function pad2(v) {
  return String(v).padStart(2, '0');
}

function toShanghaiIso(input) {
  const d = input ? new Date(input) : new Date();
  if (Number.isNaN(d.getTime())) return null;

  const utcMs = d.getTime();
  const shMs = utcMs + 8 * 60 * 60 * 1000;
  const sh = new Date(shMs);

  const yyyy = sh.getUTCFullYear();
  const mm = pad2(sh.getUTCMonth() + 1);
  const dd = pad2(sh.getUTCDate());
  const hh = pad2(sh.getUTCHours());
  const mi = pad2(sh.getUTCMinutes());
  const ss = pad2(sh.getUTCSeconds());

  return `${yyyy}-${mm}-${dd}T${hh}:${mi}:${ss}+08:00`;
}

function ymdFromIso(isoText) {
  if (!isoText || typeof isoText !== 'string') return null;
  return isoText.slice(0, 10);
}

function normalizeYmd(value) {
  const text = String(value || '').trim();
  if (!text) return null;
  const hit = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (hit) return `${hit[1]}-${hit[2]}-${hit[3]}`;
  const d = new Date(text);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

function buildSortedDates(data) {
  const set = new Set();
  const fromSeries = Array.isArray(data?.series?.dates) ? data.series.dates : [];
  const fromTimeline = Array.isArray(data?.timeline) ? data.timeline.map((item) => item.date) : [];
  const fromMeta = [data?.meta?.lastUpdatedDate];

  [...fromSeries, ...fromTimeline, ...fromMeta].forEach((raw) => {
    const norm = normalizeYmd(raw);
    if (norm) set.add(norm);
  });

  return [...set].sort((a, b) => new Date(a) - new Date(b));
}

function computeDashboardDataDate(data) {
  const set = new Set();

  const timeline = Array.isArray(data?.timeline) ? data.timeline : [];
  timeline.forEach((item) => {
    const norm = normalizeYmd(item?.date);
    if (norm) set.add(norm);
  });

  const news = Array.isArray(data?.news) ? data.news : [];
  news.forEach((item) => {
    const norm = normalizeYmd(item?.date);
    if (norm) set.add(norm);
  });

  const countries = Array.isArray(data?.countries) ? data.countries : [];
  countries.forEach((item) => {
    const norm = normalizeYmd(item?.lastUpdate);
    if (norm) set.add(norm);
  });

  const dates = [...set].sort((a, b) => new Date(a) - new Date(b));
  return dates.length ? dates[dates.length - 1] : null;
}

function normalizeSeriesArray(arr, length, finalValue) {
  const output = Array.isArray(arr) ? arr.map(toNumber) : [];

  if (output.length === 0) {
    output.push(0);
  }

  if (output.length < length) {
    const fill = output[output.length - 1] || 0;
    while (output.length < length) output.push(fill);
  }

  if (output.length > length) {
    output.length = length;
  }

  for (let i = 1; i < output.length; i += 1) {
    if (output[i] < output[i - 1]) output[i] = output[i - 1];
  }

  if (length > 0) {
    const safeFinal = Math.max(0, toNumber(finalValue));
    if (output[length - 1] !== safeFinal) {
      output[length - 1] = safeFinal;
    }

    // Keep monotonic after final alignment.
    for (let i = length - 2; i >= 0; i -= 1) {
      if (output[i] > output[i + 1]) output[i] = output[i + 1];
    }
    for (let i = 1; i < output.length; i += 1) {
      if (output[i] < output[i - 1]) output[i] = output[i - 1];
    }
  }

  return output;
}

function sumCountries(countries, key) {
  return countries.reduce((sum, item) => sum + toNumber(item[key]), 0);
}

function patchExternalBenchmarks(data, externalBenchmarks, fallbackIso) {
  if (!externalBenchmarks || typeof externalBenchmarks !== 'object') return;

  if (!data.meta) data.meta = {};
  if (!data.meta.externalBenchmarks || typeof data.meta.externalBenchmarks !== 'object') {
    data.meta.externalBenchmarks = { checkedAt: null, items: [] };
  }

  const container = data.meta.externalBenchmarks;
  if (!Array.isArray(container.items)) container.items = [];

  const checkedAt = toShanghaiIso(externalBenchmarks.generatedAt || fallbackIso || new Date().toISOString());
  if (checkedAt) container.checkedAt = checkedAt;

  const byId = new Map(container.items.map((item) => [item.id, item]));

  const elisey = byId.get('elisey-arcgis');
  if (elisey && externalBenchmarks.arcgis) {
    const status = externalBenchmarks.arcgis.status || {};
    elisey.metrics = {
      totalPoints: toNumber(externalBenchmarks.arcgis.totalPoints),
      uniqueLocations: toNumber(externalBenchmarks.arcgis.uniqueLocations),
      confirmed: toNumber(status.CONFIRMED),
      deceased: toNumber(status.DECEASED),
      suspected: toNumber(status.SUSPECTED),
      monitoring: toNumber(status.MONITORING),
      unknown: toNumber(status.UNKNOWN)
    };
  }

  const hantaflow = byId.get('hantaflow-signals');
  if (hantaflow && externalBenchmarks.hantaflow) {
    const spot = externalBenchmarks.hantaflow.spotCheck || {};
    hantaflow.metrics = {
      signalsTotal: toNumber(externalBenchmarks.hantaflow.signalsTotal),
      countriesActive: toNumber(externalBenchmarks.hantaflow.countriesActive),
      countriesIndexed: toNumber(externalBenchmarks.hantaflow.countriesIndexed),
      countriesWithSignals30d: toNumber(externalBenchmarks.hantaflow.countriesWithSignals30d),
      signals30dCountrySum: toNumber(externalBenchmarks.hantaflow.signals30dCountrySum),
      argentinaSignals30d: toNumber(spot?.AR?.signals30d),
      southAfricaSignals30d: toNumber(spot?.ZA?.signals30d)
    };
  }
}

function recompute(data, fetchMeta, externalBenchmarks) {
  const countries = Array.isArray(data.countries) ? data.countries : [];

  const sourceIso = fetchMeta?.generatedAt || new Date().toISOString();
  const shIso = toShanghaiIso(sourceIso);
  if (!data.meta) data.meta = {};

  if (shIso) {
    data.meta.rawSyncAt = shIso;
  }

  patchExternalBenchmarks(data, externalBenchmarks, sourceIso);

  const dashboardDate = computeDashboardDataDate(data);
  if (dashboardDate) {
    data.meta.lastUpdatedDate = dashboardDate;
    // Keep lastUpdatedAt aligned with the case/news dashboard date to avoid
    // showing a fetch-only timestamp as if epidemiological values changed.
    data.meta.lastUpdatedAt = `${dashboardDate}T23:59:59+08:00`;
    data.meta.dashboardDataDate = dashboardDate;
  } else if (shIso) {
    data.meta.lastUpdatedAt = shIso;
    const d = ymdFromIso(shIso);
    if (d) {
      data.meta.lastUpdatedDate = d;
      data.meta.dashboardDataDate = d;
    }
  }

  const countryByCode = new Map(countries.map((c) => [c.code, c]));

  const observation = data.observation || {};
  const regionBreakdown = observation.regionBreakdown || {};
  const observationCountries = Array.isArray(observation.countries) ? observation.countries : [];

  observationCountries.forEach((entry) => {
    const rows = Array.isArray(regionBreakdown[entry.code]) ? regionBreakdown[entry.code] : [];
    const countedSum = rows
      .filter((row) => row && row.status === 'counted')
      .reduce((sum, row) => sum + toNumber(row.observed), 0);

    entry.observed = countedSum;

    const country = countryByCode.get(entry.code);
    if (country) {
      country.observed = countedSum;
    }
  });

  const confirmed = sumCountries(countries, 'confirmed');
  const probable = sumCountries(countries, 'probable');
  const deaths = sumCountries(countries, 'deaths');
  const confirmedDeaths = sumCountries(countries, 'confirmedDeaths');
  const probableDeaths = sumCountries(countries, 'probableDeaths');
  const observed = sumCountries(countries, 'observed');

  data.summary = {
    totalReported: confirmed + probable,
    confirmed,
    probable,
    deaths,
    confirmedDeaths,
    probableDeaths,
    observed
  };

  if (!data.series || typeof data.series !== 'object') return data;

  const dates = buildSortedDates(data);
  data.series.dates = dates;
  const byCountry = data.series.byCountry && typeof data.series.byCountry === 'object'
    ? data.series.byCountry
    : {};
  data.series.byCountry = byCountry;

  const global = Object.fromEntries(SERIES_METRICS.map((k) => [k, Array(dates.length).fill(0)]));

  countries.forEach((country) => {
    const code = country.code;
    if (!byCountry[code] || typeof byCountry[code] !== 'object') byCountry[code] = {};
    const record = byCountry[code];

    SERIES_METRICS.forEach((metric) => {
      const normalized = normalizeSeriesArray(record[metric], dates.length, country[metric]);
      record[metric] = normalized;
      for (let i = 0; i < dates.length; i += 1) {
        global[metric][i] += toNumber(normalized[i]);
      }
    });
  });

  data.series.global = global;

  return data;
}

function saveOutbreakData(data) {
  const content = `window.OUTBREAK_DATA = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(OUTBREAK_PATH, content, 'utf8');
}

function main() {
  const data = loadOutbreakData();
  const fetchMeta = readJsonIfExists(FETCH_META_PATH);
  const externalBenchmarks = readJsonIfExists(EXTERNAL_BENCHMARKS_PATH);

  const updated = recompute(data, fetchMeta, externalBenchmarks);
  saveOutbreakData(updated);

  const summary = {
    updatedAt: updated?.meta?.lastUpdatedAt || null,
    summary: updated?.summary || null,
    benchmarkCheckedAt: updated?.meta?.externalBenchmarks?.checkedAt || null
  };

  console.log(JSON.stringify(summary, null, 2));
}

main();
