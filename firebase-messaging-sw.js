/* AÏDABA Market : notifications même application fermée ou téléphone verrouillé.
   À placer à la RACINE du dépôt GitHub (à côté de index.html). */
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCP1CvMB-tKGpx-mSzd-x8IkU45Dz2gNUc",
  authDomain: "aidaba-market.firebaseapp.com",
  projectId: "aidaba-market",
  storageBucket: "aidaba-market.firebasestorage.app",
  messagingSenderId: "451207374898",
  appId: "1:451207374898:web:a9ec26c46258be0952342b"
});

const messaging = firebase.messaging();

// Message reçu quand l'application est fermée : on affiche la notification (son + vibration du téléphone).
messaging.onBackgroundMessage((payload) => {
  const d = payload.data || {};
  return self.registration.showNotification(d.title || "AÏDABA Market", {
    body: d.body || "Nouvelle activité sur votre compte.",
    icon: "icon-192.png",
    badge: "icon-192.png",
    tag: d.tag || String(Date.now()),
    renotify: true,
    requireInteraction: true,
    vibrate: [300, 150, 300, 150, 600],
    data: { url: d.url || self.registration.scope }
  });
});

// Un clic sur la notification ouvre directement l'application (sur la bonne commande).
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || self.registration.scope;
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (c.url.startsWith(self.registration.scope) && "focus" in c) {
          return c.navigate(url).then(() => c.focus()).catch(() => c.focus());
        }
      }
      return clients.openWindow(url);
    })
  );
});

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
