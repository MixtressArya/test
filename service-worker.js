// service-worker.js
const CACHE_NAME = 'truth-or-bare-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/main.html',
  '/manifest.json',
  '/assets/heart_icon.png',
  '/js/prompts.js'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assetsToCache)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
