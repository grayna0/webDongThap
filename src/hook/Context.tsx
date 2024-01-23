import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
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
  const { setItemStorage, removeItemStorage } = useLocalStorage();
  const [products, setProducts] = useState<any[]>([]);
  const [product, setProduct] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  
  // Sreach key
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    let productSort;
    switch (value.value) {
      case "rate": {
        productSort = [...products].sort(
          (itemFirst: any, itemLast: any) => itemFirst.rate - itemLast.rate
        );
        break;
      }
      case "increase": {
        productSort = [...products].sort(
          (itemFirst, itemLast) => itemFirst.price - itemLast.price
        );
        break;
      }
      case "decrease": {
        productSort = [...products].sort(
          (itemFirst, itemLast) => itemLast.price - itemFirst.price
        );
        break;
      }
      case "none-reverse": {
        productSort = [...products].sort((itemFirst, itemLast) =>
          itemFirst.name.localeCompare(itemLast.name)
        );
        break;
      }
      case "reverse": {
        productSort = [...products].sort((itemFirst, itemLast) =>
          itemLast.name.localeCompare(itemFirst.name)
        );
        break;
      }
    }

    setProducts(productSort);
  };
  const sreachProducts = (agr) => {
    const valuesChecked = Object.keys(agr).filter((key) => agr[key] !== null);
    try {
      let q = query(collection(fireDB, "products"));
      if (valuesChecked.length > 0) {
        valuesChecked.forEach((key) => {
          switch (key) {
            case "price":
              q = query(
                q,
                where("price", ">=", agr.price[0]),
                where("price", "<=", agr.price[1])
              );
              break;
            case "cate":
              q = query(q, where("cate", "==", agr.cate));
              break;
            case "name":
              q = query(
                q,
                where("name", ">=", agr.name),
                where("name", "<=", agr.name + "\uf8ff")
              );
              break;
            case "rate":
              q = query(q, where("rate", "==", agr.rate));
              break;
            case "id":
              q = query(q, where("doc", "==", agr.id));
              break;
          }
        });
      }
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const productsData: any = [];
        querySnapshot.forEach((doc) => {
          productsData.push({ ...doc.data(), id: doc.id });
        });
        setProducts(productsData);
        setLoading(false);
      });

      return unsubscribe;
    } catch (error) {
      setToastMessage("Get products error");
      console.error(error);
      setLoading(false);
    }
  };

  // ADD PRODUCT

  const addProduct = async (values) => {
    setLoading(true);
    const firebaseCollection = collection(fireDB, "products");
    await addDoc(firebaseCollection, values);
    setLoading(false);
    setToastMessage("Add product successfully");
  };

  // Checkout

  const handleUserCheckout = () => {};

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

  // getUser

  const getUser = async (values) => {
    setLoading(true);
    const userData: any = [];
    try {
      const q = query(collection(fireDB, "users"), where("email", "==", values));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        userData.push({ ...doc.data(), id: doc.id });
      });
      setLoading(false);
    } catch (error) {
      setToastMessage("Get products error");
      console.log(error);
    }
    return userData;
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
        email: values.email,
        name: values.username,
        uid: user.user.uid,
        img: "avatar.png",
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
    setLoading(true);
    try {
      const emailLogin = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      if (values.remember === true) {
        setItemStorage("u", {
          token: emailLogin.user.accessToken,
          // id: emailLogin.user.id,
          username: emailLogin.user.email,
        });
      }

      setTimeout(() => {
        setLoading(false);
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
      setItemStorage("u", {
        user: googleAccount.user.email,
        uid: googleAccount.user.uid,
      });
      setToastMessage("Login successful");
      console.log(googleAccount);
      
      setTimeout(() => {
        setLoading(false);
        setShowModal(false);
      }, 1500);
    } catch (error) {
      console.log(error);
      setToastMessage("Failed to Register");
    }
  };

  // update Product

  const updateProduct = async (values?) => {
    setLoading(true);
    const item = values ? values : product;
    try {
      await setDoc(doc(fireDB, "products", item.id), item);
      setLoading(false);
    } catch (error) {
      console.log(error);
      
      setToastMessage("Update product error");
    }
  };

  // update user

  const updatedUser = async (values,uid,type?) => {
    console.log(values);
    
    setLoading(true); 
    try {
      const q = query(collection(fireDB, "users"), where("uid", "==", uid)); 
      const querySnapshot = await getDocs(q);     
      if (!querySnapshot.empty ) {
        const docRef = querySnapshot.docs[0].ref;   
        await updateDoc(docRef, values);
        // setToastMessage("Update user successfully");
      }
      if(type === "checkout") {
        removeItemStorage("cart")
      }
      setLoading(false);
    } catch (error) {
    console.log(error);

      setToastMessage("Update user error","error");
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
        handleChange,
        sreachProducts,
        getUser,
        updatedUser
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MySate;
