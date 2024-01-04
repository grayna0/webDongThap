import React, { useContext, useEffect } from "react";
import "./shop.scss";
import SideBarShop from "./SideBarShop";
import { MyContext } from "../../hook/Context";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer } from 'react-toastify';
import { Pagination } from "antd";

const Shop = () => {
  const { products, getProducts,testFnb } = useContext(MyContext);
  const dispatch = useDispatch()
  useEffect(() => {
    getProducts();
  }, []);
  const onChange = (values:any) => {
    testFnb()
    
  }
  return (
    <div className="wrap">
      <SideBarShop />
      <div className="products">
        {products.map((item: any,index:number) => {
          return (
            <div key={index} className="box-product">
              <div className="box-img">
                <img src={item.img[0]} alt="" />
              </div>
              <p className="box-title">{item.name}</p>
              <p className="box-price">{item.price}.000d  </p>
              <div className="box-btn">
                <p className="order-now">Mua ngay</p>
              <ShoppingCartOutlined className="icons btn-add-to-cart" onClick={()=> dispatch(addToCart(item))}/>

              </div>
            </div>
          );
        })}
        <Pagination defaultCurrent={6} total={500}  onChange={onChange}/>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Shop;
