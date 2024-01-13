import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Image } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Section1 = (props) => {
  const product = props.productDetail 
  const [ count , setCount] = useState<number>(1)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handeclick = (key) => {
    if(key === "increase") {
      setCount(count => count +1 )
    }
    if(key === "decrease") {
      count == 1 ? setCount(1) : setCount(count => count - 1 )
    }
  }
 return (
  <>
    {  product !== null && <div className="item-introduction" style={{ display: "flex", gap: "2rem" }}>
      <div className="item-img">
        <Image.PreviewGroup>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              {[...Array(4)].map((_, index) =>
                product.img.map((item, index) => (
                  <Image
                    key={index}
                    width={100}
                    height={100}
                    src={item}
                    style={{ borderRadius: "15px" }}
                  />
                ))
              )}
            </div>
            <div>
              <Image width={550} height={450} src={product?.img[0]} />
            </div>
          </div>
        </Image.PreviewGroup>
      </div>
      <div className="item-detail">
        <p>HTX Đặc sản Đồng Tháp</p>
        <h1 className="title">{product.name}</h1>
        <h1 className="price">{product.price}.000 VND</h1>
        <p className="des">{product.des}.000d</p>
        <div className="item-count">
            <p>Số lượng</p>
            <div >
            <MinusOutlined className="btn-icon-outlined" onClick={() =>handeclick("decrease")}/>
            <p>{count}</p>
            <PlusOutlined className="btn-icon-outlined" onClick={() =>handeclick("increase")}/>
            </div>    
        </div>
        <div className="item-total-price">
              <p>Tổng số tiền</p>
              <p className="price">{product.price  * count}.000 VND</p></div>
        <div className="wrap-btn">
          <button className="btn-white" onClick={() => dispatch(addToCart({...product,quantity:count}))}>Thêm vào giỏ hàng</button>
          <button className="btn" onClick={() => {dispatch(addToCart({...product,quantity:count})), navigate("/cart")}}>Mua ngay</button>
        </div>
      </div>
    </div>}
    <ToastContainer/>
  </>
  );
};

export default Section1;
