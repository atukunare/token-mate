'use strict';

const assert = require('node:assert/strict');
const test = require('node:test');

const {
  createServiceStatusClient,
  summarizeStatuspageProvider
} = require('../../src/electron/serviceStatus');

const provider = {
  id: 'example',
  label: 'Example',
  pageUrl: 'https://status.example.com',
  summaryUrl: 'https://status.example.com/api/v2/summary.json'
};

const summary = {
  page: { updated_at: '2026-06-06T02:30:00Z' },
  status: { indicator: 'minor', description: 'Partially Degraded Service' },
  components: [
    { name: 'API', status: 'degraded_performance' },
    { name: 'Dashboard', status: 'operational' }
  ],
  incidents: [
    { name: 'API latency', status: 'investigating' }
  ],
  scheduled_maintenances: [
    { name: 'Database maintenance', status: 'scheduled' },
    { name: 'Finished maintenance', status: 'completed' }
  ]
};

test('summarizeStatuspageProvider converts statuspage summary into compact provider state', () => {
  const result = summarizeStatuspageProvider(provider, summary, { checkedAt: '2026-06-06T02:31:00Z' });

  assert.deepEqual(result, {
    id: 'example',
    label: 'Example',
    pageUrl: 'https://status.example.com',
    status: 'degraded',
    indicator: 'minor',
    description: 'Partially Degraded Service',
    checkedAt: '2026-06-06T02:31:00Z',
    updatedAt: '2026-06-06T02:30:00Z',
    componentIssues: [{ name: 'API', status: 'degraded_performance' }],
    incidentCount: 1,
    maintenanceCount: 1
  });
});

test('summarizeStatuspageProvider reports unknown when a provider fetch fails', () => {
  const result = summarizeStatuspageProvider(provider, null, {
    checkedAt: '2026-06-06T02:31:00Z',
    error: new Error('network down')
  });

  assert.equal(result.status, 'unknown');
  assert.equal(result.error, 'network down');
  assert.equal(result.incidentCount, 0);
  assert.equal(result.maintenanceCount, 0);
});

test('service status client caches results until forced', async () => {
  let calls = 0;
  const client = createServiceStatusClient({
    providers: [provider],
    cacheMs: 60_000,
    now: () => Date.parse('2026-06-06T02:31:00Z'),
    fetchImpl: async (url) => {
      calls += 1;
      assert.equal(url, provider.summaryUrl);
      return { ok: true, json: async () => summary };
    }
  });

  const first = await client.getServiceStatus();
  const second = await client.getServiceStatus();
  const forced = await client.getServiceStatus({ force: true });

  assert.equal(calls, 2);
  assert.equal(first.providers[0].status, 'degraded');
  assert.equal(second, first);
  assert.notEqual(forced, first);
});
