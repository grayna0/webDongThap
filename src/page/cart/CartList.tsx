// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart,deleteItem } from "../../redux/slices/cartSlice";
import { ToastContainer } from "react-toastify";
import "./index.scss"
import { useNavigate } from "react-router-dom";
const CartList = () => {
  const { listItems } = useSelector((state: any) => state.cart);
  const [price, setPrice] = useState<number>(0);
  const navigate = useNavigate()
  useEffect(() => {
    const price = listItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    setPrice(price);
  }, [listItems]);

  const dispatch = useDispatch();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (_, record) => <img  src={record.img} alt="" />,
      width:300
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },,
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, record) => (
        <p  className="price">{record.price}.000</p>
      )
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => dispatch(addToCart(record))}>Thêm</a> <a onClick={() => dispatch(removeCart(record))}>Xoá</a>
          <a  onClick={() => dispatch(deleteItem(record))}>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="container-cartlist">
      <Table columns={columns} dataSource={listItems} />;
      <div className="to-checkout">
        <div className="total-price">
          <h1>Tổng tiền</h1>
          <h1 className="price">{price}.000d</h1>
        </div>
        <button className="btn" onClick={() => navigate("/checkout")}>Thanh Toán</button>
      </div>
     
      <ToastContainer/>
    </div>
  );
};

export default CartList;
