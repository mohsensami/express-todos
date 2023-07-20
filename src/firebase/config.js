import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDMFbPsKWWlTsKevHx-G7KSlC_uSCbL30Q',
    authDomain: 'gallery-f1021.firebaseapp.com',
    projectId: 'gallery-f1021',
    storageBucket: 'gallery-f1021.appspot.com',
    messagingSenderId: '495223452527',
    appId: '1:495223452527:web:480f3a1597f0e4de442e9a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export { db, storage };
