const CACHE_NAME = "logicalprimal-v4";
const APP_SHELL = [
  "./",
  "./index.html",
  "./app.js",
  "./assets/logicprimal-hero.webp",
  "./videos/posters/ugc-01.webp",
  "./videos/posters/ugc-02.webp",
  "./videos/posters/ugc-03.webp",
  "./videos/posters/ugc-04.webp",
  "./videos/posters/ugc-05.webp",
  "./videos/posters/ugc-06.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || request.method !== "GET") return;

  // Keep videos on the browser's HTTP cache and allow byte-range streaming.
  if (url.pathname.endsWith(".mp4")) return;

  const isNavigation = request.mode === "navigate";
  const isCacheableAsset = ["script", "style", "image", "font"].includes(request.destination)
    || url.pathname.endsWith("/index.html")
    || url.pathname.endsWith("/app.js");
  if (!isNavigation && !isCacheableAsset) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    const network = fetch(request).then((response) => {
      if (response.ok && response.type === "basic") cache.put(request, response.clone());
      return response;
    }).catch(() => cached);

    if (cached) {
      event.waitUntil(network.catch(() => {}));
      return cached;
    }
    return network;
  })());
});
