import { Collapse, CollapseProps, Form, Input } from "antd";
import React, { useRef } from "react";
import { useSelector } from "react-redux";



const SecondContent = (props) => {
  const { listItems } = useSelector((state: any) => state.cart);
  const toltalPrice = listItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  const formRef = useRef<any>();
  const onFinish = () => {
    console.log("Form values:", formRef.current.getFieldValue());
  };
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Thanh toán khi giao hàng",
      children: <p>Địa chỉ: Hà Nội - Việt Nam</p>,
    },
    {
      key: "2",
      label: "Thẻ tín dụng",
      children: (
        <Form
          ref={formRef}
          layout="vertical"
          style={{ maxWidth: 600 }}
          className="form-checkout"
          onFinish={onFinish}
        >
          <Form.Item
            label="Tên trên thẻ"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
          >
            <Input />
          </Form.Item>
  
          <Form.Item
            label="Số thẻ"
            name="number-cart"
            rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
          >
            <Input />
          </Form.Item>
  
          <div style={{ display: "flex", gap: "2rem" }}>
            <Form.Item
              label="Ngày hết hạn"
              name="date"
              style={{ width: "50%" }}
              rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="CVC/CVV"
              name="CVC/CVV"
              style={{ width: "50%" }}
              rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
            >
              <Input />
            </Form.Item>
          </div>
        </Form>
      ),
    },
  ];
  
  return (
    <div className="content-checkout">
      <div className="form-checkout">
        {items.map((item, index) => (
          <Collapse
            key={item.key}
            expandIconPosition="end"
            items={items.slice(index, index + 1)}
            expandIcon={(panelProps) => (
              <>
                {panelProps.isActive ? (
                  <div className="active"></div>
                ) : (
                  <div className="none-active"></div>
                )}
              </>
            )}
          />
        ))}
        <button onClick={() => {onFinish(), props.next()}} className="btn btn-next">
          Bước tiếp theo
        </button>
      </div>
      <div className="list">
        <div style={{ height: 400 }} className="list-order">
          {listItems.map((item, index) => {
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
        <p className="btn order-total-price">Tổng tiền: {toltalPrice}.000d</p>
      </div>
    </div>
  );
};

export default SecondContent;
