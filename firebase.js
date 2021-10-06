import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB1ESECl7OSqjlRHkLkvPnKSl3bb7TDGy0",
  authDomain: "doogle-gocs.firebaseapp.com",
  projectId: "doogle-gocs",
  storageBucket: "doogle-gocs.appspot.com",
  messagingSenderId: "239969496438",
  appId: "1:239969496438:web:814e9a61e9b206f3f55e57",
  measurementId: "G-7RE0YM1H6P",
};

let app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
