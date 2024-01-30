import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";

const Breadcrumbs = ({ breadCrumb }:{ breadCrumb:string }) => {
  return (
    <div style={{ margin: "4rem 0 2rem 0" }}>
      <Breadcrumb
        items={[
          {
            href: "",
            title: <HomeOutlined />,
          },
          {
            href: "",
            title: (
              <>
                <span>{breadCrumb}</span>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Breadcrumbs;
