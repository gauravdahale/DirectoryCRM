importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js');firebase.initializeApp({
  apiKey: "AIzaSyAiX5Irtfrqz4DkzIC-2gaTWOomha8U3CQ",
  authDomain: "buldhana-directory.firebaseapp.com",
  databaseURL: "https://buldhana-directory-default-rtdb.firebaseio.com",
  projectId: "buldhana-directory",
  storageBucket: "buldhana-directory.appspot.com",
  messagingSenderId: "884083362195",
  appId: "1:884083362195:web:8ba4ff1a168f4b1907c066",
  measurementId: "G-B3YMWQR8V1"
});const messaging = firebase.messaging();
