import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCDP_OvFz9frV5IJnKYOgUW4X1Z_i0gJWc",
    authDomain: "jule-restaurant.firebaseapp.com",
    projectId: "jule-restaurant",
    storageBucket: "jule-restaurant.appspot.com",
    messagingSenderId: "576534686475",
    appId: "1:576534686475:web:7d33b5160521d1fd97100e"
};

const app = initializeApp(firebaseConfig);
export const dbConfig = getFirestore(app);