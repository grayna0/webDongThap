import { ConfigProvider, Rate, Tabs, TabsProps } from "antd";
import React, { useContext, useEffect, useState } from "react";
import Rates from "../../../compoents/rate/Rates";
import { MyContext } from "../../../hook/Context";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Section2 = (props) => {
  const {sreachProducts,products} = useContext(MyContext)
  const item = props.productDetail;
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    const category = item !==null ? item.cate : null;   
    sreachProducts({cate:category})
  },[item])
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <div className="tab-label">Chi tiết sản phẩm</div>,
      children: <img src="/desp.png" alt="img" />,
    },
    {
      key: "2",
      label: <div className="tab-label">Đánh giá từ khách hàng</div>,
      children: (
        <>
          {item !== null && (
            <div className="tab-rate">
              <Rates
                item={item}
                id={item.id}
                setMesg={props.setMesg}
                user={props.user}
              />
            </div>
          )}
        </>
      ),
    },
    {
      key: "3",
      label: <div className="tab-label">Giao hàng và trả lại miễn phí</div>,
      children: (
        <div style={{ display: "flex",justifyContent:"space-around",alignItems:"center" }}>
          <div>
            <p>
              Đơn hàng từ <strong>5.000.000₫ </strong>trở lên của bạn sẽ được
              giao hàng tiêu chuẩn miễn phí.
            </p>
            <ul style={{margin:"1rem 0"}}>
              <li>
               
                <span>+</span> Giao hàng tiêu chuẩn 4-5 ngày làm việc{" "}
              </li>
              <li>
                <span>+</span> Chuyển phát nhanh 2-4 ngày làm việc{" "}
              </li>
            </ul>
            <p>
              Đơn hàng được xử lý và giao từ <strong>Thứ Hai</strong> đến<strong> Thứ Sáu</strong>  (trừ ngày lễ){" "}
            </p>
            <p  style={{margin:"1rem 0"}}>Khi hàng lỗi có thể liên hệ và đổi hàng miễn phí.</p>
          </div>
          <img src="./image28.png" alt="" />
        </div>
      ),
    },
  ];
  return (
    <>
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: "black",
            inkBarColor: "black",
            itemHoverColor: "#3f7824",
            titleFontSizeLG: 20,
          },
        },
      }}
    >
      <Tabs
        style={{ width: "100%", margin: "7rem 0 " }}
        size="large"
        defaultActiveKey="1"
        items={items}
        tabBarGutter={0}
        tabBarStyle={{
          color: "black",
        }}
      />
      
    </ConfigProvider>
      <h1 className="title">Sản phẩm bán chạy</h1>
    <div className="productsList">

      {products.slice(0,5).map((item: any, index: number) => {
                return (
                  <div key={index} className="box-product">
                    <div className="box-img" onClick={()=>navigate(`/${item.id}`)}>
                      <img src={item.img[0]} alt="" />
                    </div>
                    <p className="box-title">{item.name}</p>
                    <p className="box-price">{item.price}.000d </p>
                    <div className="box-btn">
                      <p className=" btn order-now" onClick={()=>navigate(`/${item.id}`)}>Mua ngay</p>
                      <ShoppingCartOutlined
                        className="icons btn-add-to-cart"
                        onClick={() => {
                          dispatch(addToCart(item));
                        }}
                      />
                    </div>
                  </div>
                );
              })}
    </div>
    </>
  );
};

export default Section2;
