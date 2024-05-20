self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll([
        "../html/index.html",
        "../html/manifest.json",
        "./app.js",
        "./pwa.js",
        "./form.js",
        "../html/icon-192x192.png",
        "../html/icon-512x512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
