// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const configuration = {
  API_KEY: import.meta.env.VITE_API_KEY,
  AUTH_DOMAIN : import.meta.env.VITE_AUTH_DOMAIN,
  PROJECT_ID : import.meta.env.VITE_PROJECT_ID,
  STORAGE_BUCKET : import.meta.env.VITE_STORAGE_BUCKET,
  MESSAGING_SENDER_ID : import.meta.env.VITE_MESSAGING_SENDER_ID,
  APP_ID : import.meta.env.VITE_APP_ID
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: configuration.API_KEY,
  authDomain: configuration.AUTH_DOMAIN,
  projectId: configuration.PROJECT_ID,
  storageBucket: configuration.STORAGE_BUCKET,
  messagingSenderId: configuration.MESSAGING_SENDER_ID,
  appId: configuration.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };