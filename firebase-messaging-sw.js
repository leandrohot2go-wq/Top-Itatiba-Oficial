importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAv6nXf5AwTgMh2R5cny0GqoABavJn4kVI",
  authDomain: "radiotopitatiba-1cd4d.firebaseapp.com",
  projectId: "radiotopitatiba-1cd4d",
  storageBucket: "radiotopitatiba-1cd4d.firebasestorage.app",
  messagingSenderId: "120739759000",
  appId: "1:120739759000:web:8f210171327411972b61ed",
  measurementId: "G-0ETWMEXNYE"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'top1.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});