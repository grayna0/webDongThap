import React, { useContext, useEffect, useState } from "react";
import "./shop.scss";
import SideBarShop from "./SideBarShop";
import { MyContext } from "../../hook/Context";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Pagination, Select } from "antd";

const Shop = () => {
  const { products, getProducts } = useContext(MyContext);

  const [handeProducts, setHanldeProducts] = useState<any[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setHanldeProducts(products);
  }, [products]);
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    let productSort;
    switch (value.value) {
      case "rate": {
        productSort = [...handeProducts].sort(
          (itemFirst: any, itemLast: any) => itemFirst.rate - itemLast.rate
        );
        break;
      }
      case "increase": {
        productSort = [...handeProducts].sort(
          (itemFirst, itemLast) => itemFirst.price - itemLast.price
        );
        break;
      }
      case "decrease": {
        productSort = [...handeProducts].sort(
          (itemFirst, itemLast) => itemLast.price - itemFirst.price
        );
        break;
      }
      case "none-reverse": {
        productSort = [...handeProducts].sort(
          (itemFirst, itemLast) =>    itemFirst.name.localeCompare(itemLast.name)
        );
        break;
      }
      case "reverse": {
        productSort = [...handeProducts].sort(
          (itemFirst, itemLast) =>   itemLast.name.localeCompare(itemFirst.name)
        );
        break;
      }
    }

    setHanldeProducts(productSort);
  };
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

        {handeProducts.map((item: any, index: number) => {
          return (
            <div key={index} className="box-product">
              <div className="box-img">
                <img src={item.img[0]} alt="" />
              </div>
              <p className="box-title">{item.name}</p>
              <p className="box-price">{item.price}.000d </p>
              <div className="box-btn">
                <p className="order-now">Mua ngay</p>
                <ShoppingCartOutlined
                  className="icons btn-add-to-cart"
                  onClick={() => {dispatch(addToCart(item))}}
                />
              </div>
            </div>
          );
        })}
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
