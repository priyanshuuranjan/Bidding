import { createContext, useEffect, useState } from "react";
import { authApp, firestoreApp } from "../config/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [globalMsg, setGlobalMsg] = useState("");

  useEffect(() => {
    const unsubscribeAuth = authApp.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribeAuth();
  }, []);

  const register = async (email, password) => {
    try {
      const { user } = await authApp.createUserWithEmailAndPassword(email, password);
      await createUserDocument(user);
      return user;
    } catch (error) {
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      await authApp.signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authApp.signOut();
    } catch (error) {
      throw error;
    }
  };

  const bidAuction = async (auctionId, price) => {
    try {
      if (!currentUser) {
        throw new Error("Please login first");
      }

      let newPrice = Math.floor((price / 100) * 110);
      const auctionRef = firestoreApp.collection("auctions").doc(auctionId);

      await auctionRef.update({
        curPrice: newPrice,
        curWinner: currentUser.email,
      });
    } catch (error) {
      throw error;
    }
  };

  const endAuction = async (auctionId) => {
    try {
      const auctionRef = firestoreApp.collection("auctions").doc(auctionId);
      await auctionRef.delete();
    } catch (error) {
      throw error;
    }
  };

  const createUserDocument = async (user) => {
    const userRef = firestoreApp.collection("users").doc(user.uid);
    await userRef.set({
      email: user.email,
      createdAt: new Date(),
    });
  };

  useEffect(() => {
    const interval = setTimeout(() => setGlobalMsg(""), 5000);
    return () => clearTimeout(interval);
  }, [globalMsg]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        bidAuction,
        endAuction,
        globalMsg,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
