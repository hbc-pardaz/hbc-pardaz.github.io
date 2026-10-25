/* برکه پرداز · سرویس‌ورکر — همیشه اول از شبکه می‌خواند؛ نسخهٔ قدیمی هرگز گیر نمی‌کند */
const V='bp-v7';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const k of await caches.keys())await caches.delete(k);await self.clients.claim()})())});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
 e.respondWith(fetch(r,{cache:'no-store'}).then(res=>{if(res.ok&&/\.(png|webmanifest)$/.test(r.url)){const c=res.clone();caches.open(V).then(x=>x.put(r,c))}return res}).catch(()=>caches.match(r).then(m=>m||new Response('آفلاین هستید و این فایل ذخیره نشده است.',{status:503,headers:{'content-type':'text/plain;charset=utf-8'}}))))});
