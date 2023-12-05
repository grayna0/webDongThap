import React from "react";
import MenuPage from "../menu/Menu-page";
import Search from "antd/es/input/Search";
import { UserOutlined } from "@ant-design/icons";
import Menuicon from "../menu/Menu_icon";

const HeaderChild = () => {
  const onSearch =() => {}
  return (
    <div className="header" >
      <div className="menu-page">
        <div className="logo">
          <h1>DongThap</h1>
          <p>One Comune One Product</p>
        </div>
        <MenuPage />
      </div>
      <div className="menu-icon">
      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      <UserOutlined className="icons" />
      <Menuicon />
      
      </div>
    </div>
  );
};

export default HeaderChild;
