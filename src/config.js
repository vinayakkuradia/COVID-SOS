import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFvTQ5S15-pVRNP_hZ4FuHhbwJQHr0zNc",
  authDomain: "corona-sos-d3b88.firebaseapp.com",
  projectId: "corona-sos-d3b88",
  databaseURL:
    "https://corona-sos-d3b88-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "corona-sos-d3b88.appspot.com",
  messagingSenderId: "412212620531",
  appId: "1:412212620531:web:e8ff32c80d4ce66fc85b86"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
