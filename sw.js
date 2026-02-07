const CACHE_NAME = 'iapos-v4';
const urlsToCache = [
  '/buscadores/',
  '/buscadores/index.html',
  '/buscadores/styles.css',
  '/buscadores/script.js',
  '/buscadores/data.js',
  '/buscadores/iapos.png',
  '/buscadores/iapos-192.png',
  '/buscadores/iapos-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.log('Cache error:', err))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Network-first: siempre intenta traer la versión nueva del servidor
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Guardar copia en cache para offline
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
