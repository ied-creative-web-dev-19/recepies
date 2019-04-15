// This is the "Offline copy of pages" service worker

const CACHE = "recepies-offline";

const OFFLINE_PAGES = [
  'index.html',
  'login.html',
  'profile.html',
  'recepie.html',
  'search.html',
  'signup.html'
];

self.addEventListener("install", function (event) {
  console.log("[PWA Builder] Install Event processing");

  event.waitUntil(

    caches
    .open(CACHE)
    .then(cache => {
      console.log("[PWA Builder] Cached offline page during install");

      return cache.addAll( OFFLINE_PAGES );
    })

  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(function (response) {

        // If request was success, add or update it in the cache
        event.waitUntil(updateCache(event.request, response.clone()));

        return response;
      })
      .catch(function (error) {        
        return fromCache(event.request);
      })
  );
});

function fromCache(request) {
  // Check to see if you have it in the cache
  // Return response
  // If not in the cache, then return error page
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      if (!matching || matching.status === 404) {
        return Promise.reject("no-match");
      }

      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then(function (cache) {
    return cache.put(request, response);
  });
}
