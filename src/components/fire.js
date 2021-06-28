import firebase from 'firebase';
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBjwGMkDzFmrxxFCCo2UoQEvzJjFFmI0-g",
    authDomain: "fir-authentication-60d46.firebaseapp.com",
    projectId: "fir-authentication-60d46",
    storageBucket: "fir-authentication-60d46.appspot.com",
    messagingSenderId: "550108107523",
    appId: "1:550108107523:web:11a7a4e8a650601612cf36"
  };
  
  // Initialize Firebase
 
  const fire=firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

 export default fire;