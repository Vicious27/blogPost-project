import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyASYpWZaZoIyymdMH565FAW9SsSxLyTPXo",
  authDomain: "skate-sesh-blog.firebaseapp.com",
  projectId: "skate-sesh-blog",
  storageBucket: "skate-sesh-blog.appspot.com",
  messagingSenderId: "17887962957",
  appId: "1:17887962957:web:0fec9786da80dc0f003904",
  measurementId: "G-DR0TVM6GZB"
};
//firebase initialization and exporting
firebase.initializeApp(config);
export default firebase;