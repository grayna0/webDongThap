
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { fireDB } from "../../Firebase/fireBase";
import Section1 from "./compoent/Section-1";
import "./index.scss"
import Section2 from "./compoent/Section-2";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setproductDetail] = useState<any>(null);


  useEffect(() => {
    getProducts(id);
  }, [id]);
  const getProducts = async (id) => {
    
    try {
      const docRef = doc(collection(fireDB, "products"), id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const productData = { ...docSnap.data(), id: docSnap.id };

        setproductDetail(productData);

        return productData;
      } else {   
        return null;
      }
    } catch (error) {
      console.error(error);

      return null;
    }
  };

  return (
    <div className="">
        <Section1 productDetail={productDetail}/>
        <Section2 productDetail={productDetail}/>
    </div>
  );
};

export default ProductDetail;
