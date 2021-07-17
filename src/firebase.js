import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD0p3Zad-dXJHi9eJq518d-wlQe9W2jiLA",
  authDomain: "prime-80cce.firebaseapp.com",
  projectId: "prime-80cce",
  storageBucket: "prime-80cce.appspot.com",
  messagingSenderId: "743110088417",
  appId: "1:743110088417:web:3e7cbf2e553b78f0de89a0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
