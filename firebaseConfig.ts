import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4lG_lQmF_v-s4Asjylk3XGauurP5WSM4", // ตรวจสอบให้ใช้ API Key ที่ถูกต้อง
  authDomain: "pets-d.firebaseapp.com",
  projectId: "pets-d",
  storageBucket: "pets-d.appspot.com",
  messagingSenderId: "182285351042",
  appId: "1:182285351042:web:73d860720f8ae46b2a9c9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services for use throughout the app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
