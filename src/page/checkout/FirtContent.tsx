import { Form, Input, InputNumber, Select } from "antd";
import React, { useRef } from "react";
import { useSelector } from "react-redux";


const FirtContent = (props) => {

  
  const {listItems} = useSelector((state:any )=> state.cart)
  const toltalPrice = listItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  const formRef = useRef<any>();
  const onFinish = () => {
    console.log("Form values:", formRef.current.getFieldValue());
  };
  return (
    <div className="content-checkout" >
      <Form ref={formRef} layout="vertical" style={{ maxWidth: 600 }} className="form-checkout">
        <Form.Item label="Họ và Tên" name="name">
          <Input />
        </Form.Item>

        <div style={{ display: "flex", gap: "2rem" }}>
          <Form.Item
            label="Tỉnh thành"
            name="country"
            style={{ width: "33.3%" }}
          >
            <Select>
              <Select.Option value="hn">Hà Nội</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Quận huyện" name="name2" style={{ width: "33.3%" }}>
            <Select>
              <Select.Option value="da">Đông Anh</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Phường xã" name="name3" style={{ width: "33.3%" }}>
            <Select>
              <Select.Option value="bc">Bắc Hồng</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <Form.Item label="Địa chỉ cụ thể" name="adress">
          <Input />
        </Form.Item>

        <div style={{ display: "flex", gap: "2rem" }}>
          <Form.Item
            label="Email"
            name="email"
            style={{ width: "50%" }}
            rules={[{ type: "email" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="phone"
            style={{ width: "50%" }}
            rules={[{ type: "number" }]}
          >
            <Input />
          </Form.Item>
        </div>

        <Form.Item label="Ghi chú" name="note">
          <Input />
        </Form.Item>
        <Form.Item label="" name="note" style={{textAlign:"right"}}>
        <button onClick={() => {onFinish(), props.next()}} className="btn btn-next">
          Bước tiếp theo
        </button>
        </Form.Item>
      </Form>
      <div className="list">
        <div style={{height:400}} className="list-order">

        {listItems.map((item,index) =>{
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
          )
        })}
        </div>
        <p className="btn order-total-price">Tổng tiền: { toltalPrice}.000d</p>
      </div>
    </div>
  );
};

export default FirtContent
