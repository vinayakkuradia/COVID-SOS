// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDFvTQ5S15-pVRNP_hZ4FuHhbwJQHr0zNc",
  authDomain: "corona-sos-d3b88.firebaseapp.com",
  projectId: "corona-sos-d3b88",
  databaseURL:
    "https://corona-sos-d3b88-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "corona-sos-d3b88.appspot.com",
  messagingSenderId: "412212620531",
  appId: "1:412212620531:web:e8ff32c80d4ce66fc85b86"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
