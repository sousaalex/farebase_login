import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const app = initializeApp({
  //Cretenciais
  apiKey: "AIzaSyAI-z4qSBLHuVXyYOy7RsaFw0A8si5fCzE",
  authDomain: "gdg-fundao-1-a1b08.firebaseapp.com",
  projectId: "gdg-fundao-1-a1b08",
  storageBucket: "gdg-fundao-1-a1b08.appspot.com",
  messagingSenderId: "1037639451625",
  appId: "1:1037639451625:web:45340b793bb69c8bf54178",
});

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();