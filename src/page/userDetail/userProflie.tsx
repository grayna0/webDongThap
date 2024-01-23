import React, { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../../hook/Context";
import protectRoutes from "../../routes/ProtectRoutes";
import { HomeOutlined, MailOutlined, MobileOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import "./index.scss";
import { ToastContainer } from "react-toastify";
import setToastMessage from "../../compoents/setToastMessage";
const userProflie = (props: any) => {
  const { getUser, updatedUser } = useContext(MyContext);
  const [userDetail, setUserDetail] = useState<any>(null);
  const [disableForm, setDisableForm] = useState<boolean>(true);
  useEffect(() => {
    fetchData();
  }, []);
  const onChangeValues = (values, allValues) => {
    updatedUser({ cartCredit: allValues }, userDetail[0].uid);
  };
  const onChangeValuesInfo = (values, allValues) => {
    updatedUser(  allValues , userDetail[0].uid);
  };


  const fetchData = async () => {
    try {
      const res = await getUser(props.userLogger.user);
      setUserDetail(res);
    } catch (error) {
      console.error(error);
    }
  };
  const allowInteractForm = () => {
    setDisableForm(false);
  };
  return (
    <div>
      {userDetail !== null && (
        <div className="user-detail">
          <div className="user box">
            <img className="user-img" src={`./${userDetail[0].img}`} alt="" />
            <h2 className="user-name">{userDetail[0].name}</h2>
              <Form  onValuesChange={onChangeValuesInfo}>
              <Form.Item name="adress" initialValue={"your adress"}>
                <Input prefix={<HomeOutlined />} />
              </Form.Item>
              <Form.Item name="phone-number" initialValue={"xxxxxxxxx"}>
                <Input prefix={ <MobileOutlined />} />
              </Form.Item>
              <Form.Item name="email" initialValue={ userDetail[0].email}>
                <Input prefix={ <MailOutlined />} />
              </Form.Item>
            </Form>
          </div>
          <div className="user-credit box">
            <div className="user-credit-header">
              <h2>Thẻ mua hàng</h2>
              <div onClick={allowInteractForm}>
                {!disableForm ? (
                  <p
                    onClick={() => setToastMessage("Update user successfully")}
                  >
                    Updated{" "}
                  </p>
                ) : (
                  <img src="./updated.png" alt="" />
                )}
              </div>
            </div>
            <Form disabled={disableForm} onValuesChange={onChangeValues}>
              <Form.Item name="card__type" initialValue={userDetail[0].cartCredit.card__type }>
                <Input prefix="Loai the" />
              </Form.Item>
              <Form.Item name="card__nickName" initialValue={userDetail[0].cartCredit.card__nickName}>
                <Input prefix="Tên" />
              </Form.Item>
              <Form.Item name="card__date" initialValue={""}>
                <Input prefix="Ngày hết hạn" />
              </Form.Item>
              <Form.Item name="card__number" initialValue={""}>
                <Input prefix="Mã thẻ" />
              </Form.Item>
              <Form.Item name="card__surplus" initialValue={""}>
                <Input prefix="Số dư" />
              </Form.Item>
            </Form>
          </div>
          <div className="list box">
            <div style={{ height: 400 }} className="list-order">
              {userDetail[0].order.map((item, index) => {
                return (
                  <div key={index} className="product-order">
                    <div className="product-img">
                      <img src={item.img} alt="img" />
                    </div>
                    <div className="product-content">
                      <div>
                        <h1 className="product-name">{item.name}</h1>
                        <p>Số lượng: {item.quantity}</p>
                      </div>
                      <p className="price">{item.price}.000d</p>
                   
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default protectRoutes(userProflie);
