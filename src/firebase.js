import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyA65lRe232Ki191hcmPqO9hy3kmONow0pk",
    authDomain: "wallpaper-edda8.firebaseapp.com",
    databaseURL: "https://wallpaper-edda8.firebaseio.com",
    projectId: "wallpaper-edda8",
    storageBucket: "wallpaper-edda8.appspot.com",
    messagingSenderId: "82360185006",
    appId: "1:82360185006:web:42c62b1cc84e0004c37d3f"
  };
  // Initialize Firebase
  var fire = firebase.initializeApp(firebaseConfig);

export const fireStorage = fire.storage().ref(); 
export const fireDatabase = fire.database().ref();