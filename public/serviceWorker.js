this.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll(['../*.*']);
      }),
    );
  });

  this.addEventListener('activate', function(event) {
    console.log('activated!');
  });

  this.addEventListener('fetch', function (event) {
    // it can be empty if you just want to get rid of that error
});