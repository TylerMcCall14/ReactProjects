import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAGpZ-dCEP6bDiYLI9DftKu3r-Hry3LHJs",
    authDomain: "tiktok-clone-5059a.firebaseapp.com",
    projectId: "tiktok-clone-5059a",
    storageBucket: "tiktok-clone-5059a.appspot.com",
    messagingSenderId: "616935612592",
    appId: "1:616935612592:web:428e601879aacb001e5b75",
    measurementId: "G-K6S9MGCF6X"
  };

  const firebaseApp = 
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;