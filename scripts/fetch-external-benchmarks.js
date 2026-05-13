#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ARCGIS_URL =
  'https://services1.arcgis.com/wb4Og4gH5mvzQAIV/arcgis/rest/services/' +
  'Tracking_Hantavirus_2026/FeatureServer/1/query' +
  '?where=1%3D1&outFields=*&f=geojson&returnGeometry=true' +
  '&orderByFields=CASE_%20ASC&resultRecordCount=500';

const HANTAFLOW_SIGNALS_URL = 'https://hantaflow.com/api/signals.json';
const HANTAFLOW_COUNTRIES_URL = 'https://hantaflow.com/api/countries.json';

const outputPath = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(__dirname, '..', 'raw-sources', 'latest', 'external-benchmarks.json');

function upper(v) {
  return String(v || 'UNKNOWN').trim().toUpperCase() || 'UNKNOWN';
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: {
      'user-agent': 'hantavirus-tracker-benchmark-fetch/1.0'
    }
  });

  if (!res.ok) {
    throw new Error(`${url} -> HTTP ${res.status}`);
  }

  return res.json();
}

function buildArcgisSummary(payload) {
  const features = Array.isArray(payload?.features) ? payload.features : [];
  const status = {};
  const locationSet = new Set();

  for (const feature of features) {
    const props = feature?.properties || {};
    const key = upper(props.STATUS);
    status[key] = (status[key] || 0) + 1;

    const location = String(props.LASTLOCATION || props.location_name || '').trim();
    if (location) locationSet.add(location);
  }

  return {
    source: ARCGIS_URL,
    totalPoints: features.length,
    uniqueLocations: locationSet.size,
    status
  };
}

function buildHantaflowSummary(signalsPayload, countriesPayload) {
  const countries = Array.isArray(countriesPayload?.countries) ? countriesPayload.countries : [];
  const countriesWithSignals30d = countries.filter((item) => (item?.signals30d || 0) > 0);
  const signals30dCountrySum = countries.reduce((sum, item) => sum + (item?.signals30d || 0), 0);

  const countryByCode = Object.fromEntries(
    countries.map((item) => [String(item?.iso2 || '').toUpperCase(), item])
  );

  const ar = countryByCode.AR || null;
  const za = countryByCode.ZA || null;

  return {
    sourceSignals: HANTAFLOW_SIGNALS_URL,
    sourceCountries: HANTAFLOW_COUNTRIES_URL,
    generatedAt: signalsPayload?.generatedAt || null,
    signalsTotal: Number(signalsPayload?.signalsTotal || 0),
    countriesActive: Number(signalsPayload?.countriesActive || 0),
    countriesIndexed: countries.length,
    countriesWithSignals30d: countriesWithSignals30d.length,
    signals30dCountrySum,
    spotCheck: {
      AR: ar
        ? {
            signals30d: ar.signals30d || 0,
            level: ar.level || null,
            lastSignalAt: ar.lastSignalAt || null
          }
        : null,
      ZA: za
        ? {
            signals30d: za.signals30d || 0,
            level: za.level || null,
            lastSignalAt: za.lastSignalAt || null
          }
        : null
    }
  };
}

async function main() {
  const result = {
    generatedAt: new Date().toISOString(),
    status: 'ok',
    arcgis: null,
    hantaflow: null,
    errors: []
  };

  const tasks = await Promise.allSettled([
    fetchJson(ARCGIS_URL),
    fetchJson(HANTAFLOW_SIGNALS_URL),
    fetchJson(HANTAFLOW_COUNTRIES_URL)
  ]);

  if (tasks[0].status === 'fulfilled') {
    result.arcgis = buildArcgisSummary(tasks[0].value);
  } else {
    result.status = 'partial';
    result.errors.push({ source: 'arcgis', error: String(tasks[0].reason?.message || tasks[0].reason) });
  }

  if (tasks[1].status === 'fulfilled' && tasks[2].status === 'fulfilled') {
    result.hantaflow = buildHantaflowSummary(tasks[1].value, tasks[2].value);
  } else {
    result.status = 'partial';
    if (tasks[1].status !== 'fulfilled') {
      result.errors.push({ source: 'hantaflow-signals', error: String(tasks[1].reason?.message || tasks[1].reason) });
    }
    if (tasks[2].status !== 'fulfilled') {
      result.errors.push({ source: 'hantaflow-countries', error: String(tasks[2].reason?.message || tasks[2].reason) });
    }
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`, 'utf8');

  const summary = {
    output: outputPath,
    status: result.status,
    arcgisPoints: result.arcgis?.totalPoints ?? null,
    arcgisStatus: result.arcgis?.status ?? null,
    hantaflowSignalsTotal: result.hantaflow?.signalsTotal ?? null,
    hantaflowCountriesActive: result.hantaflow?.countriesActive ?? null
  };

  console.log(JSON.stringify(summary, null, 2));
}

main().catch((err) => {
  console.error(`Failed to fetch external benchmarks: ${err.message}`);
  process.exit(1);
});
