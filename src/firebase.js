// v9 compat packages are API compatible with v8 code

import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBky1tIqPUFbC8JvMe_LZkh4reY6OanAu8",
    authDomain: "medibuddy-48800.firebaseapp.com",
    projectId: "medibuddy-48800",
    storageBucket: "medibuddy-48800.appspot.com",
    messagingSenderId: "447988507194",
    appId: "1:447988507194:web:b629846c897564cc18cb03"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };