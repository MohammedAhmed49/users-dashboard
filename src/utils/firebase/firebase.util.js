import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";

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

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

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

      const newDocSnap = await getDoc(userDocRef);
      return newDocSnap.data();
    } catch (error) {
      alert(error.message);
      return null;
    }
  }

  return userDocSnap.data();
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
    return null;
  }
};

export const updateTodosList = async (todosList) => {
  const userDocRef = doc(db, "users", auth.currentUser.uid);
  try {
    setDoc(userDocRef, { todosList: todosList }, { merge: true });
  } catch (error) {
    alert(error.message);
    return null;
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    alert(error.message);
    return null;
  }
};

export const getUsersCollection = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const user = {
      id: doc.id,
      ...doc.data(),
    };
    users.push(user);
  });

  return users;
};
