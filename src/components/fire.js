import firebase from 'firebase';
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA8Bmp0yKK1qTa8qiOQyMK7-V6CE6dYgYQ",
  authDomain: "fir-auth-task.firebaseapp.com",
  projectId: "fir-auth-task",
  storageBucket: "fir-auth-task.appspot.com",
  messagingSenderId: "448667120992",
  appId: "1:448667120992:web:7356e4ca858d2c3a1ada05"
  };
  
  // Initialize Firebase
 
  const fire=firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

 export default fire;