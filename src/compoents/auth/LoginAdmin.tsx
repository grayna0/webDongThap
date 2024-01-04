import { Button, Checkbox, Form, Input } from "antd";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, provider } from "../../Firebase/fireBase";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "../../hook/useStorage";
import { Link, useNavigate } from "react-router-dom";


type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  remember?: string;

};
const LoginAdmin = () => {
  const navigate= useNavigate()
  const { setItemStorage } = useLocalStorage();

  const onFinish = async (values: any) => {
    try {
      const emailLogin = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );


      setItemStorage("user", {
        token: emailLogin.user.accessToken,
        username: emailLogin.user.email,
      });
      toast.success("Login successful");
      navigate("/admin")
    } catch (error) {
      toast.error("Failed to login");
    }
  };

  const LoginWithGoogle = async () => {
    try {
      const googleAccount = await signInWithPopup(auth, provider);
      setItemStorage("user", googleAccount.user.uid);
    } catch (error) {
      console.log(error);
    }
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
    >
      <h2 style={{ margin: 50 }}>Log in</h2>
      <Form
        name="basic"
        labelCol={{ span: 16 }}
        layout="vertical"
        style={{
          width: 400,
          backgroundColor: "#ccc",
          padding: 20,
          borderRadius: 10,
        }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input  type="email"/>
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
            style={{ display: "flex", justifyContent: "space-between",flexDirection:"column",gap:10}}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <h2 style={{textAlign:"center"}}>OR</h2>
            <div
              className="login-gg"
              style={{
                padding: "1rem 5rem",
                border: "1px solid black",
                backgroundColor: "#Fff",
                borderRadius:10,
                textAlign:"center"
              }}
              onClick={LoginWithGoogle}
            >
              <button style={{backgroundColor:"transparent"}} ><h3>Login With Google</h3></button>
            </div>
              <Link to="/admin/singin">
              <p style={{textAlign:"center",  textDecoration: "underline"}}>I dont have Account?</p>
              </Link>
          </div>
        </Form.Item>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default LoginAdmin;
