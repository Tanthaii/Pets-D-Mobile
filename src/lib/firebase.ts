import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA4lG_lQmF_v-s4Asjylk3XGauurP5WSM4',
  authDomain: 'pets-d.firebaseapp.com',
  projectId: 'pets-d',
  storageBucket: 'pets-d.appspot.com',
  messagingSenderId: '182285351042',
  appId: '1:182285351042:web:73d860720f8ae46b2a9c9b',
};

// Initialize Firebase only if it hasn't been initialized yet
if (!getApps().length) {
  initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully!');
} else {
  console.log('Firebase already initialized!');
}

// Export Firebase services
export const app = initializeApp(firebaseConfig);
// src/lib/firebase.ts
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
