#!/usr/bin/env node
const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('outbreak-data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const d = sandbox.window.OUTBREAK_DATA;

const errors = [];

function assert(cond, message) {
  if (!cond) errors.push(message);
}

function isNonDecreasing(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

function isNonEmptyString(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

assert(d && d.summary && d.series, 'Missing core data blocks (summary/series).');

if (!d || !d.summary || !d.series) {
  console.error('FATAL: invalid data shape');
  process.exit(1);
}

const countries = d.countries || [];
const timeline = d.timeline || [];
const dates = d.series?.dates || [];
const g = d.series?.global || {};
const sources = d.sources || [];
const sourceIdSet = new Set(sources.map((s) => s.id));

assert(sourceIdSet.size === sources.length, 'Duplicate source IDs found in sources[].');

sources.forEach((source) => {
  assert(isNonEmptyString(source.id), 'Source item has empty id.');
  assert(isNonEmptyString(source.publisher), `Source ${source.id}: missing publisher.`);
  assert(isNonEmptyString(source.title), `Source ${source.id}: missing title.`);
  assert(isNonEmptyString(source.date), `Source ${source.id}: missing date.`);
  assert(isNonEmptyString(source.url), `Source ${source.id}: missing url.`);
});

const sumConfirmed = countries.reduce((s, c) => s + (c.confirmed || 0), 0);
const sumProbable = countries.reduce((s, c) => s + (c.probable || 0), 0);
const sumDeaths = countries.reduce((s, c) => s + (c.deaths || 0), 0);
const sumConfirmedDeaths = countries.reduce((s, c) => s + (c.confirmedDeaths || 0), 0);
const sumProbableDeaths = countries.reduce((s, c) => s + (c.probableDeaths || 0), 0);

assert(sumConfirmed === d.summary.confirmed, `Summary.confirmed mismatch: countries=${sumConfirmed}, summary=${d.summary.confirmed}`);
assert(sumProbable === d.summary.probable, `Summary.probable mismatch: countries=${sumProbable}, summary=${d.summary.probable}`);
assert(sumDeaths === d.summary.deaths, `Summary.deaths mismatch: countries=${sumDeaths}, summary=${d.summary.deaths}`);
assert(sumConfirmedDeaths === d.summary.confirmedDeaths, `Summary.confirmedDeaths mismatch: countries=${sumConfirmedDeaths}, summary=${d.summary.confirmedDeaths}`);
assert(sumProbableDeaths === d.summary.probableDeaths, `Summary.probableDeaths mismatch: countries=${sumProbableDeaths}, summary=${d.summary.probableDeaths}`);
assert(d.summary.totalReported === d.summary.confirmed + d.summary.probable, 'Summary.totalReported should equal confirmed + probable.');
assert(d.summary.deaths === d.summary.confirmedDeaths + d.summary.probableDeaths, 'Summary.deaths should equal confirmedDeaths + probableDeaths.');

assert(Array.isArray(g.confirmed) && g.confirmed.length === dates.length, 'Global confirmed series length mismatch.');
assert(Array.isArray(g.deaths) && g.deaths.length === dates.length, 'Global deaths series length mismatch.');
assert(Array.isArray(g.confirmedDeaths) && g.confirmedDeaths.length === dates.length, 'Global confirmedDeaths series length mismatch.');

assert(isNonDecreasing(g.confirmed), 'Global confirmed series must be non-decreasing.');
assert(isNonDecreasing(g.deaths), 'Global deaths series must be non-decreasing.');
assert(isNonDecreasing(g.confirmedDeaths), 'Global confirmedDeaths series must be non-decreasing.');

if (g.confirmed.length && g.confirmedDeaths.length) {
  for (let i = 0; i < g.confirmed.length; i += 1) {
    if ((g.confirmedDeaths[i] || 0) > (g.confirmed[i] || 0)) {
      errors.push(`Global confirmedDeaths[${i}] > confirmed[${i}]`);
    }
  }
}

countries.forEach((c) => {
  assert((c.confirmedDeaths || 0) <= (c.confirmed || 0), `Country ${c.code}: confirmedDeaths > confirmed`);
  assert((c.deaths || 0) >= (c.confirmedDeaths || 0), `Country ${c.code}: deaths < confirmedDeaths`);
  assert(c.continentCode, `Country ${c.code}: missing continentCode`);
  assert(c.flag, `Country ${c.code}: missing flag emoji`);
  assert(isNonEmptyString(c.notes?.zh), `Country ${c.code}: missing notes.zh`);
  assert(isNonEmptyString(c.notes?.en), `Country ${c.code}: missing notes.en`);

  const cs = d.series.byCountry?.[c.code];
  assert(cs, `Missing byCountry series for ${c.code}`);
  if (!cs) return;

  ['confirmed', 'probable', 'deaths', 'confirmedDeaths'].forEach((k) => {
    assert(Array.isArray(cs[k]) && cs[k].length === dates.length, `Country ${c.code}: series.${k} length mismatch`);
    if (Array.isArray(cs[k])) {
      assert(isNonDecreasing(cs[k]), `Country ${c.code}: series.${k} not non-decreasing`);
    }
  });

  const last = dates.length - 1;
  if (last >= 0) {
    assert((cs.confirmed[last] || 0) === (c.confirmed || 0), `Country ${c.code}: final confirmed != country.confirmed`);
    assert((cs.probable[last] || 0) === (c.probable || 0), `Country ${c.code}: final probable != country.probable`);
    assert((cs.deaths[last] || 0) === (c.deaths || 0), `Country ${c.code}: final deaths != country.deaths`);
    assert((cs.confirmedDeaths[last] || 0) === (c.confirmedDeaths || 0), `Country ${c.code}: final confirmedDeaths != country.confirmedDeaths`);
  }
});

timeline.forEach((item, idx) => {
  assert(isNonEmptyString(item.date), `Timeline[${idx}] missing date.`);
  assert(isNonEmptyString(item.countryZh), `Timeline[${idx}] missing countryZh.`);
  assert(isNonEmptyString(item.countryEn), `Timeline[${idx}] missing countryEn.`);
  assert(isNonEmptyString(item.description?.zh), `Timeline[${idx}] missing description.zh.`);
  assert(isNonEmptyString(item.description?.en), `Timeline[${idx}] missing description.en.`);

  const ids = Array.isArray(item.sourceIds) ? item.sourceIds : [];
  assert(ids.length > 0, `Timeline[${idx}] missing sourceIds.`);
  ids.forEach((id) => {
    assert(sourceIdSet.has(id), `Timeline[${idx}] references missing source id: ${id}`);
  });
});

(d.news || []).forEach((item, idx) => {
  assert(isNonEmptyString(item.date), `News[${idx}] missing date.`);
  assert(isNonEmptyString(item.title?.zh), `News[${idx}] missing title.zh.`);
  assert(isNonEmptyString(item.title?.en), `News[${idx}] missing title.en.`);
  assert(isNonEmptyString(item.summary?.zh), `News[${idx}] missing summary.zh.`);
  assert(isNonEmptyString(item.summary?.en), `News[${idx}] missing summary.en.`);
  assert(isNonEmptyString(item.sourceId), `News[${idx}] missing sourceId.`);
  if (isNonEmptyString(item.sourceId)) {
    assert(sourceIdSet.has(item.sourceId), `News[${idx}] references missing source id: ${item.sourceId}`);
  }
});

(d.watchlist || []).forEach((item, idx) => {
  assert(isNonEmptyString(item.date), `Watchlist[${idx}] missing date.`);
  assert(isNonEmptyString(item.title?.zh), `Watchlist[${idx}] missing title.zh.`);
  assert(isNonEmptyString(item.title?.en), `Watchlist[${idx}] missing title.en.`);
  assert(isNonEmptyString(item.note?.zh), `Watchlist[${idx}] missing note.zh.`);
  assert(isNonEmptyString(item.note?.en), `Watchlist[${idx}] missing note.en.`);
  const ids = Array.isArray(item.sourceIds) ? item.sourceIds : [];
  assert(ids.length > 0, `Watchlist[${idx}] missing sourceIds.`);
  ids.forEach((id) => {
    assert(sourceIdSet.has(id), `Watchlist[${idx}] references missing source id: ${id}`);
  });
});

const latestDate = timeline
  .map((x) => x.date)
  .sort((a, b) => new Date(b) - new Date(a))[0];
assert(latestDate, 'Timeline is empty.');

if (errors.length) {
  console.error('Data validation failed with the following issues:');
  errors.forEach((e, i) => console.error(`${i + 1}. ${e}`));
  process.exit(1);
}

console.log('Data validation passed.');
console.log(`Latest timeline date: ${latestDate}`);
console.log(`Countries tracked: ${countries.length}`);
