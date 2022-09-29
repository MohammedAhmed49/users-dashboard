import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD20I8BdafGUw9pnTlnPSNu1CR19XlVF9U",
  authDomain: "users-dashboard-963de.firebaseapp.com",
  projectId: "users-dashboard-963de",
  storageBucket: "users-dashboard-963de.appspot.com",
  messagingSenderId: "1066385261442",
  appId: "1:1066385261442:web:88c93a78ae2a05e04ac59b",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

export const auth = getAuth();

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const getUserDocument = async (userAuth, additionalData) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    const { email, displayName } = userAuth;
    const creationDate = new Date();

    try {
      const result = await setDoc(userDocRef, {
        email,
        displayName,
        creationDate,
        ...additionalData,
      });

      return result;
    } catch (error) {
      alert(error.message);
    }
  }
};

export const signOutCustom = async () => await signOut(auth);

export const signUpWithEmail = async (email, password, displayName) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    return user;
  } catch (error) {
    alert(error.message);
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    return user;
  } catch (error) {
    alert(error.message);
  }
};
