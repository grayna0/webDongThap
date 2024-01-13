import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import FirtContent from "./FirtContent";
import SecondContent from "./SecondContent";
import "./index.scss";
import { CheckCircleOutlined } from "@ant-design/icons";
const steps = [
  {
    title: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="title-checkout">Bước 1</h1>
        <p>Địa chỉ giao hàng</p>
      </div>
    ),
    content: <FirtContent />,
  },
  {
    title: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="title-checkout">Bước 2</h1>
        <p>Phương thức thanh toán</p>
      </div>
    ),
    content: <SecondContent />,
  },
  {
    title: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="title-checkout">Bước 3</h1>
        <p>Giao dịch thành công</p>
      </div>
    ),
    content: (
      <div
        style={{
          height: "550px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "24px",
        }}
      >
        <CheckCircleOutlined style={{ color: "#3F7824", fontSize: 48 }} />
        <p>Mua hàng thành công</p>
        <p>
          Đơn hàng của bạn đã được xác nhận
          <br /> Chúng tôi sẽ gọi điện để xác nhận đơn hàng của bạn!
        </p>
      </div>
    ),
  },
];

const Checkout = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
    steps[current + 1].content;
  };

  const prev = () => {
    setCurrent(current - 1);
    steps[current - 1].content;
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>
        {" "}
        {React.cloneElement(steps[current].content, { next: next })}
      </div>
    </>
  );
};

export default Checkout;
