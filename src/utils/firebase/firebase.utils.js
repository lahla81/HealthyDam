import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCuATLgYpzR-QfnKkL-pgV0_IJ-s3KjbgI",
    authDomain: "healthydam-db.firebaseapp.com",
    databaseURL: "https://healthydam-db-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "healthydam-db",
    storageBucket: "healthydam-db.appspot.com",
    messagingSenderId: "514263680119",
    appId: "1:514263680119:web:8f5a04f4cd0c861d6c7272",
    measurementId: "G-CHB0Q078HE"
  };

const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentrFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()){
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      })
    }
    catch (error){
      console.log('error creating user', error.massage);
    }
  }
  return userDocRef;
}
