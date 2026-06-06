'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const rootDir = path.join(__dirname, '..', '..');
const rendererDir = path.join(rootDir, 'src', 'electron', 'renderer');

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function readRendererFile(name) {
  return readFile(path.join(rendererDir, name));
}

function functionBody(source, name, nextName) {
  const start = source.indexOf(`function ${name}(`);
  assert.notEqual(start, -1, `${name} function should exist`);
  const end = source.indexOf(`function ${nextName}(`, start);
  assert.notEqual(end, -1, `${nextName} function should follow ${name}`);
  return source.slice(start, end);
}

test('renderer includes a dedicated service status panel and Status view option', () => {
  const html = readRendererFile('index.html');
  const app = readRendererFile('app.js');

  assert.match(html, /<section id="serviceStatusPanel" class="service-status-panel hidden"><\/section>/);
  assert.match(app, /\{ id: 'status', labelKey: 'views\.status' \}/);
  assert.match(app, /viewBreakdownValues = new Set\(\[\.\.\.baseBreakdownOrder, 'status', 'limits'\]\)/);
});

test('renderer fetches service status only through preload IPC', () => {
  const app = readRendererFile('app.js');
  const renderBody = functionBody(app, 'renderServiceStatus', 'refreshServiceStatus');
  const refreshBody = functionBody(app, 'refreshServiceStatus', 'maybeRefreshServiceStatus');

  assert.match(renderBody, /service-status-row/);
  assert.match(refreshBody, /window\.tokenMonitor\.getServiceStatus/);
  assert.doesNotMatch(app, /fetch\(['"]https:\/\/status\./);
});

test('preload and main expose service status IPC with status page allowlist', () => {
  const preload = readFile(path.join(rootDir, 'src', 'electron', 'preload.js'));
  const main = readFile(path.join(rootDir, 'src', 'electron', 'main.js'));

  assert.match(preload, /getServiceStatus: \(options\) => ipcRenderer\.invoke\('serviceStatus:get', options\)/);
  assert.match(main, /ipcMain\.handle\('serviceStatus:get'/);
  assert.match(main, /status\.openai\.com/);
  assert.match(main, /status\.claude\.com/);
});
