/* eslint-disable linebreak-style */
const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyDpi8PuswjhZd0WbPP-6tpjmchMvyowi00",
    authDomain: "project-inspa.firebaseapp.com",
    projectId: "project-inspa",
    storageBucket: "project-inspa.appspot.com",
    messagingSenderId: "1003131915209",
    appId: "1:1003131915209:web:0264fb9566dcc60dfd7618",
    measurementId: "G-QM0M6C3CNP"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports = firebase;

// const analytics = getAnalytics(app);

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// module.exports = firebase;
