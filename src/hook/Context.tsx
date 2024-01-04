import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  limit,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { auth, fireDB, provider } from "../Firebase/fireBase";
import setToastMessage from "../compoents/setToastMessage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import useLocalStorage from "./useStorage";
export const MyContext = createContext<any>(null);
const MySate = ({ children }) => {
  const { setItemStorage, getItemStorage } = useLocalStorage();
  const [products, setProducts] = useState<any[]>([]);
  const [product, setProduct] = useState<any>(null);
  const [userLogger, setUserLogger] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const getUserFromLocal = () => {
    const user = getItemStorage("u");
    setUserLogger(user);
  };
const sreachProducts = (cate,values) => {
  if( cate && values){

    const q = query(collection(fireDB, "products"),where(cate, "==", values ));
    
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const productsData: any = [];
          querySnapshot.forEach((doc) => {
            productsData.push({ ...doc.data(), id: doc.id });
          });
          setProducts(productsData);
          setLoading(false);
  
          return productsData;})
  }else{
    getProducts()
  }
  
}
  const addProduct = async (values) => {
    setLoading(true);
    const firebaseCollection = collection(fireDB, "products");
    await addDoc(firebaseCollection, values);
    setLoading(false);
    setToastMessage("Add product successfully");
  };
  // Get Prodcuts
  const getProducts = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "products"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const productsData: any = [];
        querySnapshot.forEach((doc) => {
          productsData.push({ ...doc.data(), id: doc.id });
        });
        setProducts(productsData);
        setLoading(false);

        return productsData;
      });
    } catch (error) {
      setToastMessage("Get products error");
      console.log(error);
      
    }
  };
  // Register
  const registerUser = async (values: any) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const userRef = collection(fireDB, "users");
      await addDoc(userRef, {
        name: values.email,
        email: values.username,
        uid: user.user.uid,
        time: Timestamp.now(),
      });
      setToastMessage("Register successful");
    } catch (error) {
      console.log(error);
      setToastMessage("Failed to Register");
    }
  };

  // Login

  const userLogin = async (values: any) => {
    setLoading(true)
    try {
      const emailLogin = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      if (values.remember === true) {
        setItemStorage("u", {
          token: emailLogin.user.accessToken,
          username: emailLogin.user.email,
        });
        
      }
      
      
      setTimeout(() => {
        setLoading(false);
        getUserFromLocal();
        setShowModal(false);
      }, 1500);
      
      setToastMessage("Login successful");
      
    } catch (error) {
      setToastMessage("Failed to login");
    }
  };
  // with google
  const withGoogle = async () => {
    try {
      const googleAccount = await signInWithPopup(auth, provider);
      setItemStorage("u", googleAccount.user.uid);
      setToastMessage("Login successful");
    } catch (error) {
      console.log(error);
      setToastMessage("Failed to Register");
    }
  };

  // update Product
  const updateProduct = async () => {
    setLoading(true);

    try {
      await setDoc(doc(fireDB, "products", product.id), product);
      setToastMessage("Update product successfully");
      setLoading(false);
    } catch (error) {
      setToastMessage("Update product error");
    }
  };
  // Delete Product
  const deleteProduct = async (item: any) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      setLoading(false);
    } catch (error) {
      setToastMessage("Delete product error");
    }
  };

  return (
    <MyContext.Provider
      value={{
        product,
        products,
        setProduct,
        setProducts,
        showModal,
        setShowModal,
        loading,
        setLoading,
        getProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        registerUser,
        withGoogle,
        userLogin,
        userLogger,
        sreachProducts
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MySate;
