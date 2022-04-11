// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBb_9XhBjqTNExRC-E_Ry9AJyOfcH7a35E',
	authDomain: 'instagram-clone-868e1.firebaseapp.com',
	projectId: 'instagram-clone-868e1',
	storageBucket: 'instagram-clone-868e1.appspot.com',
	messagingSenderId: '626223127935',
	appId: '1:626223127935:web:026628d1da5426bf4fce4a',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const storage = getStorage();
const db = getFirestore();

export { app, db, storage };
