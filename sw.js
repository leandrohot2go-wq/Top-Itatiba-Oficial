// Nome do cache (pode ser qualquer nome)
const cacheName = 'top-itatiba-v1';

// Arquivos que o App deve "guardar" para abrir rápido
const staticAssets = [
  './',
  './index.html',
  './top1.jpg',
  './banner.jpg'
];

// Instala o Service Worker e guarda os arquivos no cache
self.addEventListener('install', async event => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

// Responde às requisições (faz o App carregar mesmo com internet instável)
self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(networkFirst(req));
});

async function networkFirst(req) {
  const cache = await caches.open(cacheName);
  try {
    const res = await fetch(req);
    cache.put(req, res.clone());
    return res;
  } catch (error) {
    return await cache.match(req);
  }
}
