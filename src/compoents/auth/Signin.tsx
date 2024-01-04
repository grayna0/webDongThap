import { Button, Checkbox, Form, Input } from "antd";
import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from "../../hook/Context";

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  remember?: string;
};
const Singin = ({setHaveAccount}) => {
  const {registerUser,withGoogle} = useContext(MyContext)
  const onFinish = async (values: any) => {
    registerUser(values)
  };
  const checkEmail = () => {};
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
    
      }}
   className="modal"

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
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
              <h2 style={{ textAlign: "center" }}>Sign in</h2>

        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          // wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
          <p onClick={checkEmail}>Forget Password?</p>
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
              Register
            </Button>
            <h2 style={{ textAlign: "center" }}>OR</h2>
            <div
              className="login-gg"
              style={{
                padding: "1rem 5rem",
                border: "1px solid black",
                backgroundColor: "#Fff",
                borderRadius: 10,
                textAlign: "center",
              }}
              onClick={withGoogle}
            >
              <button style={{ backgroundColor: "transparent" }}>
                <h3>Login With Google</h3>
              </button>
            </div>
           
              <a style={{ textAlign: "center", textDecoration: "underline" }} onClick={setHaveAccount}>
                I have Account?
              </a>
          
          </div>
        </Form.Item>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Singin;
