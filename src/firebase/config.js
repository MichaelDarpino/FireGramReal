import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCd3z3yjV5_ckEZV7d_2wBTP7bihr6QiC4",
    authDomain: "mike-firegram.firebaseapp.com",
    databaseURL: "https://mike-firegram.firebaseio.com",
    projectId: "mike-firegram",
    storageBucket: "mike-firegram.appspot.com",
    messagingSenderId: "471126511638",
    appId: "1:471126511638:web:83a304195227da4fe76537"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  export {projectStorage, projectFirestore};