import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNbh2TkKGHnrYZLQZgYFPIUKF6YFfzZpw",
    authDomain: "instagram-clone-d3cf7.firebaseapp.com",
    projectId: "instagram-clone-d3cf7",
    storageBucket: "instagram-clone-d3cf7.appspot.com",
    messagingSenderId: "537858220547",
    appId: "1:537858220547:web:a6d1300cc73a37cf4de436"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };