import { Tabs } from "antd";
import React from "react";
import AddProduct from "./AddProduct";
import AllProducts from "./AllProducts";
const tabsArray = [
  {
    label: "All products ",
    compoent: AllProducts,
  },
  {
    label: "Add products ",
    compoent: AddProduct,
  },
];
const AdminProducts = () => {
  return (
    <div>
      <Tabs  
        type="card"
        items={tabsArray.map((item, i) => {
          const id = String(i + 1);
          const Page = item.compoent;
          return {
            label: `${item.label}`,
            key: id,
            children: <Page />,
          };
        })}
      />
    </div>
  );
};

export default AdminProducts;
