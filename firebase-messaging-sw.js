importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Инициализация Firebase внутри Service Worker
firebase.initializeApp({
  apiKey: "AIzaSyAcs0ELY176L-d0qLZlpj1aJcej2b8fdPI",
  authDomain: "vtcty-6c839.firebaseapp.com",
  projectId: "vtcty-6c839",
  databaseURL: "https://vtcty-6c839-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "vtcty-6c839.firebasestorage.app",
  messagingSenderId: "ВАШ_SENDER_ID" // Получите в настройках проекта Firebase (Cloud Messaging)
});

const messaging = firebase.messaging();

// Фоновая обработка входящих пушей
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || "Vibe";
  const notificationOptions = {
    body: payload.notification.body || "",
    icon: "/Vibe.png?v=2", // Ваша новая иконка
    badge: "/images/icon-512.png?v=2"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});