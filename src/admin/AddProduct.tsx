import React, { useContext, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Select, Upload } from "antd";
import { ToastContainer } from "react-toastify";
import { MyContext } from "../hook/Context";
const { TextArea } = Input;

const AddProduct = ({ productId,str }: { productId?: any,str?:any }) => {
  const { updateProduct, addProduct, setProduct, product } =
    useContext(MyContext);

  const [form] = Form.useForm();
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = async (values: any,str?:any) => {
    const product={
      name:values.name,
      price:values.price,
      cate:values.cate,
      des:values.des,
      comment:[],
      img:values.img.map(img => img.thumbUrl)

    
    }
    if(str === "update"){
      updateProduct();

    } else  {
        addProduct(product);
        form.resetFields();
      }
  };

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        initialValues={productId ? productId : undefined}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name" }]}
        >
          <Input
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input price" }]}
        >
          <InputNumber onChange={(e) => setProduct({ ...product, price: e })} />
        </Form.Item>
        <Form.Item
          label="Category"
          name="cate"
          rules={[{ required: true, message: "Please Select category" }]}
        >
          <Select onChange={(e) => setProduct({ ...product, cate: e })}>
            <Select.Option value="traiCay">Trai cay</Select.Option>
            <Select.Option value="tra">Tra</Select.Option>
            <Select.Option value="giaVi">Gia vi</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Desciption"
          name="des"
          rules={[{ required: true, message: "Please input desciption" }]}
        >
          <TextArea
            rows={4}
            onChange={(e) => setProduct({ ...product, des: e.target.value })}
          />
        </Form.Item>
        {!productId && (
          <Form.Item
            label="Upload"
            name="img"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: "Please input file" }]}
          >
            <Upload action="/admin" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
        )}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {productId ? "Update" : "Submit"}
          </Button>
        </Form.Item>
      </Form>

      <ToastContainer />
    </>
  );
};

export default AddProduct;
