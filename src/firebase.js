import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCgiYGcuoCmR0dmlySN_qy16mvh5q4wY_A",
    authDomain: "linkedin-clone-a5328.firebaseapp.com",
    projectId: "linkedin-clone-a5328",
    storageBucket: "linkedin-clone-a5328.appspot.com",
    messagingSenderId: "425916198009",
    appId: "1:425916198009:web:eccdf71ac2eebff324b8a8"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db= firebase.firestore()
  const auth=firebaseApp.auth()
  
  export{auth};
  export default db;