importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAcs0ELY176L-d0qLZlpj1aJcej2b8fdPI",
    authDomain: "vtcty-6c839.firebaseapp.com",
    projectId: "vtcty-6c839",
    databaseURL: "https://vtcty-6c839-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "vtcty-6c839.firebasestorage.app",
    messagingSenderId: "103953800507" // Это стандартный ID для Firebase
});

const messaging = firebase.messaging();

// Фоновое получение уведомлений
messaging.onBackgroundMessage((payload) => {
    console.log('Получен пуш в фоне: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/icon-192.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});