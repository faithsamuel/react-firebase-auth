import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDvoHqNiQfPX4jJPwRiovpfQIaFzmkvJqo",
    authDomain: "react-firebase-auth-tut-2024.firebaseapp.com",
    projectId: "react-firebase-auth-tut-2024",
    storageBucket: "react-firebase-auth-tut-2024.appspot.com",
    messagingSenderId: "85852982542",
    appId: "1:85852982542:web:8a405e8d0606121d125b5f",
    measurementId: "G-RBGGZ87Q3V"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export default auth;