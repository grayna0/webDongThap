import React, { useContext, useEffect, useState } from "react";
import "./shop.scss";
import SideBarShop from "./SideBarShop";
import { MyContext } from "../../hook/Context";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Pagination, Select, Skeleton } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const Shop = () => {
  const { products, getProducts, loading,handleChange } = useContext(MyContext);

  const [handeProducts, setHanldeProducts] = useState<any[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setHanldeProducts(products);
  }, [products]);
  
  const onChange = (values: any) => {
    const arrProducts = products.slice((values - 1) * 12, values - 1 + 12);
    setHanldeProducts(arrProducts);
  };

  return (
    <div className="wrap">
      <SideBarShop />
      <div className="products">
        <div className="products-header">
          <p>Tất cả sản phẩm</p>
          <Select
            labelInValue
            defaultValue={{ value: "", label: "Sắp xểp sản phẩm theo" }}
            style={{ width: 200 }}
            onChange={handleChange}
            options={[
              {
                value: "rate",
                label: "Sản phẩm nổi bật",
              },
              {
                value: "increase",
                label: "Giá: Tăng dần",
              },

              {
                value: "decrease",
                label: "Giá: Giảm dần",
              },

              {
                value: "none-reverse",
                label: "Từ A-Z",
              },

              {
                value: "reverse",
                label: "Từ Z-A",
              },
            ]}
          />
        </div>
        <div className="productsList">
          {loading ? (
            <Skeleton />
          ) : (
            <>
              {handeProducts.map((item: any, index: number) => {
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
            </>
          )}
        </div>
        <Pagination
          defaultCurrent={products.length > 0 ? 10 : 0}
          total={products.length > 0 ? products.length : 0}
          onChange={onChange}
          className="pagination"
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Shop;
