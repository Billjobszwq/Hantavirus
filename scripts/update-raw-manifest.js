#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const rawRoot = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(__dirname, '..', 'raw-sources');

function sha256(bytes) {
  return crypto.createHash('sha256').update(bytes).digest('hex');
}

function isSnapshotDirName(name) {
  return /^\d{8}-\d{6}([\-_].+)?$/.test(name);
}

function listSnapshotDirs(root) {
  const dirs = [];

  if (!fs.existsSync(root)) return dirs;

  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name === 'latest' || entry.name === 'history') continue;
    if (!isSnapshotDirName(entry.name)) continue;
    dirs.push(path.join(root, entry.name));
  }

  const historyRoot = path.join(root, 'history');
  if (fs.existsSync(historyRoot)) {
    for (const entry of fs.readdirSync(historyRoot, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      dirs.push(path.join(historyRoot, entry.name));
    }
  }

  return dirs;
}

function snapshotMeta(absPath, root) {
  const relPath = path.relative(root, absPath).split(path.sep).join('/');
  const files = fs.readdirSync(absPath)
    .filter((name) => name.endsWith('.json'))
    .sort();

  const fileMetas = files.map((name) => {
    const filePath = path.join(absPath, name);
    const bytes = fs.readFileSync(filePath);
    return {
      name,
      size: bytes.length,
      sha256: sha256(bytes)
    };
  });

  const digestMaterial = fileMetas
    .map((f) => `${f.name}:${f.sha256}`)
    .join('\n');

  const stat = fs.statSync(absPath);

  return {
    id: relPath,
    path: relPath,
    fileCount: fileMetas.length,
    hash: sha256(Buffer.from(digestMaterial, 'utf8')),
    mtime: stat.mtime.toISOString(),
    files: fileMetas
  };
}

const snapshotDirs = listSnapshotDirs(rawRoot);
const snapshots = snapshotDirs
  .map((dir) => snapshotMeta(dir, rawRoot))
  .sort((a, b) => new Date(b.mtime) - new Date(a.mtime));

const latest = snapshots[0]
  ? {
      id: snapshots[0].id,
      path: snapshots[0].path,
      fileCount: snapshots[0].fileCount,
      hash: snapshots[0].hash,
      mtime: snapshots[0].mtime
    }
  : null;

const manifest = {
  generatedAt: new Date().toISOString(),
  latest,
  snapshots
};

const manifestPath = path.join(rawRoot, 'manifest.json');
fs.mkdirSync(rawRoot, { recursive: true });
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

if (latest) {
  console.log(`Raw manifest updated: ${manifestPath}`);
  console.log(`Latest snapshot: ${latest.id} (${latest.fileCount} files)`);
} else {
  console.log(`Raw manifest updated: ${manifestPath}`);
  console.log('No snapshot found yet.');
}
