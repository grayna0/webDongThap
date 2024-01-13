import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const userDropdown = [
  {
    key: "1",
    label: <Link to="/profile">Profile</Link>,
  },
  {
    key: "1",
    label: <a>Log Out</a>,
  },
];

const Menuicon = ({ props = [], name }) => {
  const navigate =useNavigate()
  const cartListDropDown = props.map((item: any) => {
    return {
      key: "1",
      label: (
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <img src={item.img} alt="img" width={100} height={100}/>
          <div>
            <h2>{item.name} x{item.quantity}</h2>
            <p className="price">{item.price}.000d</p>
          </div>
        </div>
      ),
    };
  });
  
    const items: MenuProps["items"] =
      name === "user" ? userDropdown : cartListDropDown;

  return (
    <>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {name === "user" ? (
              <UserOutlined className="icons" />
            ) : (
              <ShoppingCartOutlined className="icons" onClick={()=> navigate("/cart")} />
            )}
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default Menuicon;
