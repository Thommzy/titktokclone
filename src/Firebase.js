import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBs57G5LMUV5RiITodAL8GcytRRYmKI8oI",
  authDomain: "tik-tok-app-26d77.firebaseapp.com",
  databaseURL: "https://tik-tok-app-26d77.firebaseio.com",
  projectId: "tik-tok-app-26d77",
  storageBucket: "tik-tok-app-26d77.appspot.com",
  messagingSenderId: "478496966140",
  appId: "1:478496966140:web:8d7993d56471f73fae1e79",
  measurementId: "G-LYVQRGPYX3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
