import React, { createContext, useEffect, useState } from "react";
import App from "../Firebase/Firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(App);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoader(false);
      setUser(currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const updateProfileData = async (Name, Image) => {
    setLoader(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: Name,
        photoURL: Image,
      });
      setUser(auth.currentUser);
    } catch (error) {
      console.log("Error updating profile:", error);
    } finally {
      setLoader(false);
    }
  };
  const google = () => {
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
    return signOut(auth);
  };

  const authInfo = {
    createUser,
    signInUser,
    user,
    logout,
    google,
    updateProfileData,
    loader,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
