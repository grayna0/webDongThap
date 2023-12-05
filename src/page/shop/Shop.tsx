import React from "react";
import "./shop.scss";
import SideBarShop from "./SideBarShop";

const Shop = () => {
  return (
    <div className="wrap">
      <SideBarShop/>
      <div className="product">
        <div className="product-sale">sale</div>
        <div className="product-list">list</div>
      </div>
    </div>
  );
};

export default Shop;
