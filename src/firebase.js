// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, getDocs, collection } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRBglysFJ6j4JY2Hp3g3DV4rd6birrV3Y",
  authDomain: "tienda-flowrena.firebaseapp.com",
  projectId: "tienda-flowrena",
  storageBucket: "tienda-flowrena.firebasestorage.app",
  messagingSenderId: "489701187455",
  appId: "1:489701187455:web:80e6b14c35c21deb63844a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);

export async function getItems(){
    const querySnapshot = await getDocs(collection(db, "items"));
    const itemsArray = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return itemsArray;
}
