'use strict';

const DEFAULT_CACHE_MS = 60_000;
const DEFAULT_TIMEOUT_MS = 5_000;

const SERVICE_STATUS_PROVIDERS = [
  {
    id: 'openai',
    label: 'OpenAI',
    pageUrl: 'https://status.openai.com',
    summaryUrl: 'https://status.openai.com/api/v2/summary.json'
  },
  {
    id: 'claude',
    label: 'Claude',
    pageUrl: 'https://status.claude.com',
    summaryUrl: 'https://status.claude.com/api/v2/summary.json'
  }
];

const COMPONENT_OK = new Set(['operational']);
const INACTIVE_INCIDENT = new Set(['resolved', 'completed', 'postmortem']);
const INACTIVE_MAINTENANCE = new Set(['completed', 'canceled']);

function normalizeStatus(value) {
  return String(value || '').trim().toLowerCase();
}

function providerTone(indicator) {
  const value = normalizeStatus(indicator);
  if (value === 'none') return 'ok';
  if (value === 'minor') return 'degraded';
  if (value === 'major' || value === 'critical') return 'outage';
  return 'unknown';
}

function activeItems(items, inactiveStatuses) {
  return (Array.isArray(items) ? items : []).filter((item) => {
    const status = normalizeStatus(item?.status);
    return status && !inactiveStatuses.has(status);
  });
}

function componentIssues(components) {
  return (Array.isArray(components) ? components : [])
    .filter((component) => !COMPONENT_OK.has(normalizeStatus(component?.status)))
    .map((component) => ({
      name: String(component?.name || 'Unknown').trim() || 'Unknown',
      status: normalizeStatus(component?.status) || 'unknown'
    }));
}

function summarizeStatuspageProvider(provider, payload, options = {}) {
  const checkedAt = options.checkedAt || new Date().toISOString();
  if (options.error || !payload || typeof payload !== 'object') {
    return {
      id: provider.id,
      label: provider.label,
      pageUrl: provider.pageUrl,
      status: 'unknown',
      indicator: 'unknown',
      description: 'Unable to check status',
      checkedAt,
      updatedAt: '',
      componentIssues: [],
      incidentCount: 0,
      maintenanceCount: 0,
      error: options.error?.message || 'Unable to check status'
    };
  }

  const indicator = normalizeStatus(payload.status?.indicator) || 'unknown';
  const issues = componentIssues(payload.components);
  const incidents = activeItems(payload.incidents, INACTIVE_INCIDENT);
  const maintenances = activeItems(payload.scheduled_maintenances, INACTIVE_MAINTENANCE);
  return {
    id: provider.id,
    label: provider.label,
    pageUrl: provider.pageUrl,
    status: providerTone(indicator),
    indicator,
    description: String(payload.status?.description || '').trim() || 'Unknown',
    checkedAt,
    updatedAt: String(payload.page?.updated_at || payload.status?.updated_at || '').trim(),
    componentIssues: issues,
    incidentCount: incidents.length,
    maintenanceCount: maintenances.length
  };
}

async function fetchJsonWithTimeout(fetchImpl, url, timeoutMs) {
  const controller = typeof AbortController === 'function' ? new AbortController() : null;
  const timer = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;
  try {
    const response = await fetchImpl(url, controller ? { signal: controller.signal } : undefined);
    if (!response?.ok) throw new Error(`HTTP ${response?.status || 'error'}`);
    return await response.json();
  } finally {
    if (timer) clearTimeout(timer);
  }
}

function createServiceStatusClient(options = {}) {
  const providers = options.providers || SERVICE_STATUS_PROVIDERS;
  const fetchImpl = options.fetchImpl || globalThis.fetch;
  const cacheMs = Number(options.cacheMs || DEFAULT_CACHE_MS);
  const timeoutMs = Number(options.timeoutMs || DEFAULT_TIMEOUT_MS);
  const now = options.now || Date.now;
  let cache = null;
  let cacheUntil = 0;

  async function getServiceStatus({ force = false } = {}) {
    const currentTime = Number(now());
    if (!force && cache && currentTime < cacheUntil) return cache;
    const checkedAt = new Date(currentTime).toISOString();
    const results = await Promise.all(providers.map(async (provider) => {
      try {
        const payload = await fetchJsonWithTimeout(fetchImpl, provider.summaryUrl, timeoutMs);
        return summarizeStatuspageProvider(provider, payload, { checkedAt });
      } catch (error) {
        return summarizeStatuspageProvider(provider, null, { checkedAt, error });
      }
    }));
    cache = { checkedAt, providers: results };
    cacheUntil = currentTime + cacheMs;
    return cache;
  }

  return { getServiceStatus };
}

module.exports = {
  SERVICE_STATUS_PROVIDERS,
  createServiceStatusClient,
  summarizeStatuspageProvider
};
