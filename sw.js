// Service worker · Cáscara Sports Liga MX
// Solo existe para que la app se pueda instalar. No cachea nada: siempre carga fresca de Vercel.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
