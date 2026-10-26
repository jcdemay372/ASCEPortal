// A-Senior CE Portal: service worker
// Strategy: network-first for pages and data so CEs always see the current
// content when they have signal, with a cached copy served when they don't.

const CACHE = 'as-ce-portal-v2';

const PRECACHE = [
  '/', '/index.html',
  '/competencies.html', '/assignments.html', '/rubrics.html', '/assessment.html',
  '/schedule.html', '/ipmnarrative.html', '/cefacilitator.html', '/cohorts.html',
  '/ipm1.html', '/ipm2.html', '/ipm3.html',
  '/data.js', '/ussf-as.css',
  '/manifest.webmanifest',
  '/icons/icon-192.png', '/icons/icon-512.png', '/icons/apple-touch-icon.png', '/icons/crest-mark.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(PRECACHE).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req).then(hit => hit || caches.match('/index.html')))
  );
});
