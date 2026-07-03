'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function loadSiteI18n() {
  const file = fs.readFileSync(path.join(__dirname, '../../site/scripts/i18n.js'), 'utf8');
  const context = { exports: {}, window: { localStorage: { getItem() { return ''; }, setItem() {} }, navigator: { language: 'en-US' }, location: { hash: '' }, history: { replaceState() {} } }, document: { documentElement: { lang: 'en' }, title: '', querySelectorAll() { return []; } } };
  vm.createContext(context);
  vm.runInContext(`${file}\nexports.supportedLanguages = supportedLanguages;\nexports.translations = translations;\nexports.normalizeLanguage = normalizeLanguage;`, context);
  return context.exports;
}

test('site i18n includes Korean with the same keys as English', () => {
  const { supportedLanguages, translations } = loadSiteI18n();
  assert.deepEqual([...supportedLanguages], ['en', 'zh-TW', 'zh-CN', 'ko']);
  const enKeys = Object.keys(translations.en).sort();
  assert.deepEqual(Object.keys(translations.ko).sort(), enKeys);
});

test('site i18n maps browser Korean locales to ko', () => {
  const { normalizeLanguage } = loadSiteI18n();
  assert.equal(normalizeLanguage('ko-KR'), 'ko');
  assert.equal(normalizeLanguage('ko'), 'ko');
});
