import { Button, Checkbox, Form, Input } from "antd";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth, fireDB, provider } from "../../Firebase/fireBase";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useLocalStorage from "../../hook/useStorage";
import { Link } from "react-router-dom";


type FieldType = {
  username?: string;
  email?: string;
  password?: string;
  remember?: string;
};
const SinginAdmin = () => {
  const { setItemStorage } = useLocalStorage();

  const onFinish = async (values: any) => {
    console.log(values);
    
    try {
      const userRegister = await createUserWithEmailAndPassword(auth,values.email,values.password)
      const user = {
        name : values.email,
        email : values.username,
        uid : userRegister.user.uid,
        time:Timestamp.now()
      }
      const userRef = collection(fireDB,"users")
      await addDoc(userRef,user)

      toast.success("Register successful");
    } catch (error) {
      console.log(error);
      
      toast.error("Failed to Register");
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
      <h2 style={{ margin: 50 }}>Sign in</h2>
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
      >   <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: "Please input your username!" }]}
    >
      <Input />
    </Form.Item>
        <Form.Item<FieldType>
          label="Email"
          name="email"
         
          rules={[{ required: true, message: "Please input your email!" , type : 'email'}]}
        >
          <Input  />
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
             Register
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
              <Link to="/admin/login">
              <p style={{textAlign:"center",  textDecoration: "underline"}}>I have Account?</p>
              </Link>
          </div>
        </Form.Item>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default SinginAdmin;
