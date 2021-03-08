import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDY32T8dGVFdWhX7l0tGsixU9wRGtY-C34",
    authDomain: "soccerapp-9f2ad.firebaseapp.com",
    projectId: "soccerapp-9f2ad",
    storageBucket: "soccerapp-9f2ad.appspot.com",
    messagingSenderId: "861850029260",
    appId: "1:861850029260:web:9ae30ae303a781bfb30669"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;