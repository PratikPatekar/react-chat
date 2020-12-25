import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyBsvyRSjXoGDqGTONU1gEv3Zbh-noUk5TI',
  authDomain: 'chat-app-f12c5.firebaseapp.com',
  databaseURL: 'https://chat-app-f12c5-default-rtdb.firebaseio.com',
  projectId: 'chat-app-f12c5',
  storageBucket: 'chat-app-f12c5.appspot.com',
  messagingSenderId: '1040735439400',
  appId: '1:1040735439400:web:08351374a3c222b2a0031d',
};

const app = firebase.initializeApp(config);
