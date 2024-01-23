import { Button, Form, Input } from "antd";
import React from "react";
import "./index.scss";
const Contact = () => {
  const [form] = Form.useForm();
  // const form = Form.useFormInstance();
  const onFinish = () => {
    form.resetFields()
  }
  return (
    <div className="wrapped-contact">
      <div className="map">
        <h2>Vị trí bản đồ</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2805910843713!2d105.81270582594225!3d21.14122898053646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135004e4cd67cf9%3A0xfd32b6db82560334!2zVsOibiBO4buZaSBUcsOqbiwgVsOibiBO4buZaSwgxJDDtG5nIEFuaCwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1705801029856!5m2!1svi!2s"
          width="1198px"
          height="522px"
        ></iframe>
      </div>
      <div className="contact-form">
        <div className="form-left">
          <h2>Liên kết khác</h2>
          <div className="group-icon">
            <img src="./Group10.png" alt="img" />
            <img src="./Group13.png" alt="img" />
            <img src="./Group14.png" alt="img" />
          </div>
          <div>
            <h2>Địa chỉ</h2>
            <div  className="group-icon">
           

              <img className="icon" src="./Vector10.png" alt="img" />
            
              <div>
                <p>Địa chỉ</p>
                <p>
                  Showroom: 9 P. Đốc Ngữ, Vĩnh Phúc, Ba Đình, Hà Nội, Vietnam
                </p>
              </div>
            </div>
            <div  className="group-icon">
              <img className="icon" src="./Vectore.png" alt="img" />
              <div>
                <p>Email</p>
                <p>OCOPDongThap@gmail.com</p>
              </div>
            </div>
            <div  className="group-icon">
              <img className="icon" src="./Vector11.png" alt="img" />
              <div>
                <p>Điện thoại</p>
                <p>0868 22 9752</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-right">
          <h2>Điền thông tin dưới đây, chúng tôi sẽ sớm liên lạc với bạn.</h2>
          <p>
            Nếu bạn có thắc mắc gì, hãy gửi ngay yêu cầu về cho chúng tôi, chúng
            tôi sẽ cố gắng liên lạc lại cho bạn sớm nhất có thể .
          </p>
          <Form
           form={form}
            // style={{ maxWidth: 600 }}
            className="form-content"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
            >
              <Input prefix="Họ và tên" />
            </Form.Item>

            <div style={{ display: "flex", gap: "2rem" }}>
              <Form.Item
                name="phone_number"
                style={{ width: "50%" }}
                rules={[
                  {
                  
                    required: true,
                    message: "Vui lòng nhập thông tin",
                  },
                ]}
              >
                <Input maxLength={10} prefix="Số điện thoại" />
              </Form.Item>
              <Form.Item
                name="email"
                style={{ width: "50%" }}
                rules={[
                  {
                  
                    required: true,
                    message: "Vui lòng nhập thông tin Email",
                    type: "email",
                  },
                ]}
              >
                <Input prefix="Email" />
              </Form.Item>
            </div>
            <Form.Item
              name="mesg"
              rules={[{ required: true, message: "Vui lòng nhập thông tin" }]}
            >
              <Input.TextArea prefix="Nội dung" />
            </Form.Item>
            <p>*Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!</p>
            <Button  type="primary" htmlType="submit"   className="btn">Gửi cho chúng tôi</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
