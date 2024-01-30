import { Button, Checkbox, Form, Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from "../../hook/Context";
import Singin from "./Signin";
import { useNavigate } from "react-router-dom";
import protectRoutes from "../../routes/ProtectRoutes";
import Loader from "../loader/loader";
import { FieldType } from "../../admin/type";

const Login = () => {
  const { showModal, setShowModal, loading, withGoogle, userLogin } =
    useContext(MyContext);
  const [haveAccount, setHaveAccount] = useState<boolean>(false);
  const switchLoginAndSigin = () => {
    setHaveAccount(false);
  };

  const onFinish = async (values: any) => {
    userLogin(values);
  };
  return (
    <>
      {showModal && (
        <>
          {!haveAccount ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexDirection: "column",
              }}
              className="modal"
              onClick={(e: any) =>
                e.target.className === "modal" ? setShowModal(false) : true
              }
            >
              <Form
                name="basic"
                labelCol={{ span: 16 }}
                layout="vertical"
                style={{
                  width: 400,
                  backgroundColor: "LightGreen",
                  padding: 20,
                  borderRadius: 10,
                }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <h2 style={{ textAlign: "center" }}>Log in</h2>
                <Form.Item<FieldType>
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input type="email" />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item<FieldType> name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <div
                    className="login"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                    <h2 style={{ textAlign: "center" }}>OR</h2>
                  </div>
                </Form.Item>
                <div
                  className="login-gg"
                  style={{
                    padding: "1rem 5rem",
                    border: "1px solid black",
                    backgroundColor: "#Fff",
                    borderRadius: 10,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{ backgroundColor: "transparent" }}
                    onClick={withGoogle}
                  >
                    <h3>Login With Google</h3>
                  </div>
                </div>

                <p
                  style={{ textAlign: "center", textDecoration: "underline" }}
                  onClick={() => setHaveAccount(true)}
                >
                  I dont have Account?
                </p>
                {loading && (
                  <div style={{ width: 50, margin: "auto" }}>
                    <Loader />
                  </div>
                )}
              </Form>
              <ToastContainer />
            </div>
          ) : (
            <Singin setHaveAccount={switchLoginAndSigin} />
          )}
        </>
      )}
    </>
  );
};

export default Login;
