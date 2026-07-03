#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const png2icons = require('png2icons');

const ROOT = path.resolve(__dirname, '..');
const ICONS_DIR = path.join(ROOT, 'build', 'icons');
const MAC_SOURCE = path.join(ROOT, 'assets', 'icon.png');
const WIN_SOURCE = path.join(ROOT, 'assets', 'icon-win.png');

function writeIcon(sourcePath, name, format) {
  const input = fs.readFileSync(sourcePath);
  const buffer = format === 'icns'
    ? png2icons.createICNS(input, png2icons.BICUBIC, 0)
    : png2icons.createICO(input, png2icons.BICUBIC, 0, false);
  if (!buffer) {
    console.error(`Failed to build ${name} from ${sourcePath}`);
    process.exit(1);
  }
  fs.writeFileSync(path.join(ICONS_DIR, name), buffer);
}

fs.mkdirSync(ICONS_DIR, { recursive: true });
writeIcon(MAC_SOURCE, 'icon.icns', 'icns');

const winSource = fs.existsSync(WIN_SOURCE) ? WIN_SOURCE : MAC_SOURCE;
if (!fs.existsSync(WIN_SOURCE)) {
  console.warn('assets/icon-win.png not found — .ico will use the macOS source (less ideal on Windows)');
}
writeIcon(winSource, 'icon.ico', 'ico');
console.log(`Built icons in ${ICONS_DIR}`);
