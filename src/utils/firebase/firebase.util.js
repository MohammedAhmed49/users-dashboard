import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import {
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

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

export const db = getFirestore();

export const auth = getAuth();

export const storage = getStorage();

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getUserDocument = async (userAuth, additionalData) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    const { email, displayName, uid } = userAuth;
    const creationDate = new Date();

    try {
      const result = await setDoc(userDocRef, {
        email,
        displayName,
        creationDate,
        uid,
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

    await setDoc(doc(db, "usersChats", auth.currentUser.uid), {});
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

export const deleteAccount = async () => {
  const user = auth.currentUser;
  const userDocRef = doc(db, "users", user.uid);

  try {
    await deleteDoc(userDocRef);
    await deleteUser(user);
  } catch (error) {
    alert(error);
  }
};

export const updateUserName = async (displayName) => {
  const userDocRef = doc(db, "users", auth.currentUser.uid);

  try {
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    setDoc(userDocRef, { displayName: displayName }, { merge: true });
    return auth.currentUser;
  } catch (error) {
    alert(error.message);
    return null;
  }
};

export const changePassword = async (newPassword) => {
  try {
    await updatePassword(auth.currentUser, newPassword);
    return 1;
  } catch (error) {
    alert(error.message);
    return null;
  }
};

export const startNewChat = async (currentUser, otherUser, chatId) => {
  const chatDocRef = doc(db, "chats", chatId);
  const chatSnap = await getDoc(chatDocRef);

  if (!chatSnap.exists()) {
    try {
      await setDoc(doc(db, "chats", chatId), { messages: [] });

      await updateDoc(doc(db, "usersChats", currentUser.uid), {
        [chatId + ".userInfo"]: {
          uid: otherUser.uid,
          displayName: otherUser.displayName,
        },
        [chatId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "usersChats", otherUser.uid), {
        [chatId + ".userInfo"]: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
        },
        [chatId + ".date"]: serverTimestamp(),
      });
    } catch (error) {
      alert(error);
    }
  }
};

export const onChatsSnapshot = (callback) =>
  auth.currentUser &&
  onSnapshot(doc(db, "usersChats", auth.currentUser.uid), callback);

export const onMessagesSnapshot = (chatId, callback) =>
  onSnapshot(doc(db, "chats", chatId), callback);

export const sendMessage = async (text, file, messageId, chatId) => {
  if (file) {
    const storageRef = ref(storage, messageId);
    const uploadTask = uploadBytesResumable(storageRef, file);

    await uploadTask.on(
      (error) => {
        alert(error);
      },
      async () => {
        console.log("111");
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log(downloadURL);
          await updateDoc(doc(db, "chats", chatId), {
            messages: arrayUnion({
              id: messageId,
              text: text == "" ? "(Image)" : text,
              photo: downloadURL,
              senderId: auth.currentUser.uid,
              data: Timestamp.now(),
            }),
          });
        });
      }
    );
  } else {
    await updateDoc(doc(db, "chats", chatId), {
      messages: arrayUnion({
        id: messageId,
        text: text,
        senderId: auth.currentUser.uid,
        data: Timestamp.now(),
      }),
    });
  }
};

export const updateLastMessage = async (otherUser, chatId, text) => {
  await updateDoc(doc(db, "usersChats", auth.currentUser.uid), {
    [chatId + ".lastMessage"]: {
      text: text == "" ? "(Image)" : text,
    },
    [chatId + ".date"]: serverTimestamp(),
  });

  await updateDoc(doc(db, "usersChats", otherUser.uid), {
    [chatId + ".lastMessage"]: {
      text: text == "" ? "(Image)" : text,
    },
    [chatId + ".date"]: serverTimestamp(),
  });
};
