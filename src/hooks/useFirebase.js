import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInUsingEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const createNewAccount = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUserName(name);
        console.log(result);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        console.log(result);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleResetPassword = (email) => {
    sendPasswordResetEmail(auth, email).then((result) => {
      setError("");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    return unsubscribe;
  }, []);

  return {
    user,
    signInUsingGoogle,
    logOut,
    signInUsingEmailAndPassword,
    createNewAccount,
    error,
    handleResetPassword,
  };
};

export default useFirebase;
