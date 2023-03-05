
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_PfUBboTjzSBj6ca8e-wFJCZsINe5jHM",
  authDomain: "chat-cdcf9.firebaseapp.com",
  projectId: "chat-cdcf9",
  storageBucket: "chat-cdcf9.appspot.com",
  messagingSenderId: "705802016271",
  appId: "1:705802016271:web:3235618ac3c145c289757a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const storage = getStorage();
export const db=getFirestore(); 