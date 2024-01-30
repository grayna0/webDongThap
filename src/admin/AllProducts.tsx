
import React, { useContext, useEffect, useState } from "react";
import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DataType, ProductType } from "./type";
import AddProduct from "./AddProduct";
import { MyContext } from "../hook/Context";

const AllProducts = () => {
  const { products, setProduct, product, getProducts, deleteProduct,addProduct } =
    useContext(MyContext);

  const [showModal, setShowModal] = useState<boolean>(false);
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (_, record) => <img src={record.img[0]} alt="" />,
    },
    ,
    {
      title: "Description",
      dataIndex: "des",
      key: "des",
      render: (text) => <a>{text.slice(0, 50)}...</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setShowModal(true);
              products.map((i: ProductType) =>
                i.id === record.id ? setProduct(i) : false
              );
            }}
          >
            Edit{" "}
          </a>
          <a onClick={() => deleteProduct(record)}>Delete</a>
          <a onClick={() => addProduct(record)}>duplicate</a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div>
      {showModal && <AddProduct productId={product} str={"update"} />}
      <Table columns={columns} dataSource={products} />;
    </div>
  );
};

export default AllProducts;
