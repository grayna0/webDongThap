import React, { useContext } from "react";
import Search from "antd/es/input/Search";
import { useSelector } from "react-redux";
import { MyContext } from "../../hook/Context";
import protectRoutes from "../../routes/ProtectRoutes";
import Menuicon from "./menu/Menu_icon";
import MenuPage from "./menu/Menu-page";

const HeaderChild = ({userLogger}) => {
  const { listItems } = useSelector((state: any) => state.cart);
  const {setShowModal} = useContext(MyContext)

  

  const onSearch = () => {};
  return (
    <div className="header">
      <div className="menu-page">
        <div className="logo">
          <h1>DongThap</h1>
          <p>One Comune One Product</p>
        </div>
        <MenuPage />
      </div>
      <div className="menu-icon">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        {userLogger ?      <>
        <Menuicon name="user" props={[]} />
        <Menuicon name="" props={listItems} />
        </>
        :
        <>
        <p onClick={()=>setShowModal(true)}>Đăng Ký</p>
        <p onClick={()=>setShowModal(true)}>Đăng Nhập</p>
        </>}
     
      </div>
    </div>
  );
};

export default protectRoutes(HeaderChild)
