// const firebase = require("firebase");
// importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging.js');
// importScripts("https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js");
// // importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
// // importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
firebase.initializeApp({
  apiKey: "AIzaSyCTbrq4URWVk6bf6XALVvmom0zCfN7aW6U",
  authDomain: "akola-directory-9defc.firebaseapp.com",
  databaseURL: "https://akola-directory-9defc.firebaseio.com",
  projectId: "akola-directory-9defc",
  storageBucket: "akola-directory-9defc.appspot.com",
  messagingSenderId: "403194184955",
  appId: "1:403194184955:web:0083b7d7e24aa1d2bc9c5e",
  measurementId: "G-LFKLBDSBGQ"
});
const messaging = firebase.messaging();
