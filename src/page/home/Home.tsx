import React, { useEffect, useState } from "react";
import Carousels from "../../compoents/carousel/Carousels";
import Banner from "./banner/bannerDetail";
import HomeAboutUs from "./homeAboutUs";
import FeedBack from "./feedback/FeedBack";
import CategoryHome from "./category/CategoryHome";
import BlogHome from "./blogHome/BlogHome";
import NotesAboutus from "./blogHome/Section-6";
import axios from "axios";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { fireDB } from "../../Firebase/fireBase";

const Home = () => {
  const [product, setProduct] = useState<any[]>([]);
  console.log(product);

  const getProductData = async () => {
  
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const unsubscribe = onSnapshot(q, (snapshot) => {

        
        snapshot.docChanges().forEach((product) => {
          if (product.type === "added") {
              console.log("New city: ", product.doc.data());
          }
          if (product.type === "modified") {
              console.log("Modified city: ", product.doc.data());
          }
          if (product.type === "removed") {
              console.log("Removed city: ", product.doc.data());
          }
        });
      });
    } catch (error) {}
    // setProduct(productsArr);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <Banner />
      <HomeAboutUs />
      <FeedBack />
      <CategoryHome />
      <BlogHome />
      <NotesAboutus />
    </>
  );
};

export default Home;
