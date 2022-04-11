import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAkQ9wq9KBbBkOhF952wGftModWwv6gIXw",
    authDomain: "fir-jogo.firebaseapp.com",
    projectId: "fir-jogo",
    storageBucket: "fir-jogo.appspot.com",
    messagingSenderId: "1076084907974",
    appId: "1:1076084907974:web:4b7bd69de3dc1a044e5cc7"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.database();