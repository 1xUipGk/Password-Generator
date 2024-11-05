const CACHE_NAME = 'password-generator-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/404.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    // منع الوصول المباشر للملفات
    const blockedExtensions = /\.(js|css|json|txt|xml)$/;
    const allowedDomains = ['1xuipgk.github.io', 'flagcdn.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];
    
    if (event.request.url.match(blockedExtensions)) {
        const requestDomain = new URL(event.request.url).hostname;
        if (!allowedDomains.some(domain => requestDomain.includes(domain))) {
            event.respondWith(new Response('Access Denied', {
                status: 403,
                statusText: 'Forbidden'
            }));
            return;
        }
    }

    // تشفير الاستجابة
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).then(response => {
                    // تشفير محتوى JavaScript
                    if (event.request.url.endsWith('.js')) {
                        return response.text().then(text => {
                            const encrypted = btoa(text);
                            return new Response(encrypted, {
                                headers: { 'Content-Type': 'application/javascript' }
                            });
                        });
                    }
                    return response;
                });
            })
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