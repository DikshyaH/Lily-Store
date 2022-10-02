import { initializeApp } from "firebase/app";

import { getAuth ,GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyBuAowKM9K-I1obv5UkFpZlieoPn5QDw",
  authDomain: "thelilystore-f0aa9.firebaseapp.com",
  projectId: "thelilystore-f0aa9",
  storageBucket: "thelilystore-f0aa9.appspot.com",
  messagingSenderId: "583827151978",
  appId: "1:583827151978:web:484efad59072b202633e13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters(
    {
        prompt: "select_account"
    }
);
export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async(customerAuth) => { 
  const customerDocRef = doc(db,"customer",customerAuth.uid);

  const customerSnapShot = await getDoc(customerDocRef);

  if(!customerSnapShot.exists()){
    const { displayName, email } = customerAuth;
    const createdAt = new Date();

    try{
      await setDoc(customerDocRef,{
        displayName,
        email,
        createdAt
      });
    }
    catch(error){
      console.log('error while creating customer through Google Sign In', error.message);
      }

    }
    
  return customerDocRef;  
}
  



