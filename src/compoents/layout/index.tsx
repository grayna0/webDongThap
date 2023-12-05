import React from "react";
import { Layout } from "antd";

import HeaderChild from "./Header";
import FooterChild from "./Footer";
import Breadcrumbs from "./Breadcrumb";

const { Header, Footer, Content } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "black",
  height: 84,
  lineHeight: "34px",
  padding: "20px 0 0 0 ",
  backgroundColor: "transparent",
};

const LayOut = ({ children, home ,breadCrumb}) => {
  return (
    <Layout className="main">
      <Header
        style={{
          textAlign: "center",
          color: "black",
          height: 84,
          lineHeight: "34px",
          padding: "20px 0 0 0 ",
          backgroundColor: "transparent",
          position: home ? "absolute" : "relative",
        }}
      >
        <HeaderChild />
      </Header>
      <Content className="main">
        <div className={home ? "" : "container"}>
          {!home && <Breadcrumbs breadCrumb={breadCrumb}/>}
          {children}
        </div>
      </Content>
      <Footer>
        <FooterChild />
      </Footer>
    </Layout>
  );
};

export default LayOut;
