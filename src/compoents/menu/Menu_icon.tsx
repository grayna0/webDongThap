import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";
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
  const cartListDropDown = props.map((item: any) => {
    return {
      key: "1",
      label: (
        <div>
          <img src={item.img} alt="img" />
          <div>
            <h2>{item.title}</h2>
            <p>{item.total}</p>
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
              <ShoppingCartOutlined className="icons" />
            )}
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default Menuicon;
