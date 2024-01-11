// @ts-nocheck
import {
  Checkbox,
  Collapse,
  ConfigProvider,
  Flex,
  InputNumber,
  Slider,
} from "antd";
import Search from "antd/es/input/Search";

import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../hook/Context";
const CheckboxGroup = Checkbox.Group;
const SideBarShop = () => {
  const { sreachProducts } = useContext(MyContext);
  const [inputValue, setInputValue] = useState<number[]>([0, 500]);
  const [checkedList, setCheckedList] = useState([]);
  const [checkedRate, setcheckedRate] = useState<string[]>([]);
  const [arrInputSreach, setArrInputSreach] = useState<any>({
    cate:null,
    price:null ,
    name:null,
    rate:null,
  })
  
  const plainOptions = ["Ca Cao", "Trà", "Trái Cây", "Dứa"];



  const onChange = (newValue: number[]) => {

    setInputValue(newValue);
    setArrInputSreach(arrInputSreach => ({...arrInputSreach, price: newValue}))
    sreachProducts({...arrInputSreach, price: newValue});
  };
  const selectCate = (newValue = plainOptions) => {
    const cate = newValue[0] !== undefined ? newValue[0] : null

    setCheckedList(newValue);
    setArrInputSreach(arrInputSreach => ({...arrInputSreach, cate: cate}))
    sreachProducts({...arrInputSreach, cate: cate});
  };
  const selectRate = (newValue = ["5", "4", "3", "2", "1"]) => {
    const rate = newValue[0] !== undefined ? newValue[0][0] : null
    setcheckedRate(newValue);
    setArrInputSreach(arrInputSreach => ({...arrInputSreach, rate: rate}))
    sreachProducts({...arrInputSreach, rate:rate});
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            railSize: 12,
            dotSize: 0,
            handleSize: 20,
            handleLineWidth: 0,
            handleLineWidthHover: 0,
            handleSizeHover: 20,
            trackBg: "#3F7824",
            trackHoverBg: "#3F7824",
          },
        },
        token: {
          colorPrimary: "#3F7824",
        },
      }}
    >
      <div className="sidebar">
        <div className="header">
          <h2>Lọc sản phẩm</h2>
          <div className="sort-price">
            <Collapse
              collapsible="header"
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              ghost={true}
              items={[
                {
                  key: "1",
                  label: "Gia Tien",
                  children: (
                    <>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p className="price">0</p>
                        <p className="price">500.000đ</p>
                      </div>

                      <Slider
                        range={true}
                        max={500}
                        defaultValue={[0, 500]}
                        tooltip={{ open: false }}
                        onChange={(e) => onChange(e)}
                      />

                      <div className="price-from">
                        <p>Từ</p>
                        <InputNumber
                          className="price"
                          controls={false}
                          precision={3}
                          min={1}
                          max={5000000}
                          style={{ margin: "0 16px" }}
                          value={
                            typeof inputValue[0] === "number"
                              ? inputValue[0]
                              : 0
                          }
                          onChange={(e: any) => onChange([e, inputValue[1]])}
                        />
                        <p>Đến</p>
                        <InputNumber
                          className="price"
                          controls={false}
                          precision={3}
                          min={1}
                          max={500}
                          style={{ margin: "0 16px" }}
                          value={
                            typeof inputValue[1] === "number"
                              ? inputValue[1]
                              : 0
                          }
                        />
                      </div>
                    </>
                  ),
                },
              ]}
            />
          </div>
          <div className="sreach">
            <div className="sort-cate">
              <Collapse
                collapsible="header"
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                ghost={true}
                items={[
                  {
                    key: "1",
                    label: "Loại sản phẩm",
                    children: (
                      <>
                        <Search
                          placeholder="Tìm kiếm..."
                          onSearch={(e) => {setArrInputSreach(arrInputSreach => ({...arrInputSreach, name: e}))
                          sreachProducts({...arrInputSreach, name: e})}}
                          style={{ width: "100%", marginBottom: 20 }}
                        />
                        <CheckboxGroup
                          options={[...new Set(plainOptions)]}
                          value={checkedList[checkedList.length - 1]}
                          onChange={selectCate}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            flex: 1,
                            height: 200,
                            overflow: "hidden",
                            gap: 20,
                          }}
                        />
                      </>
                    ),
                  },
                ]}
              />
            </div>
            <div className="sort-rate">
              <Collapse
                collapsible="header"
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                ghost={true}
                items={[
                  {
                    key: "1",
                    label: "Đánh giá OCOP",
                    children: (
                      <>
                        <CheckboxGroup
                          options={[
                            "5 sao",
                            "4 sao",
                            "3 sao",
                            "2 sao",
                            "1 sao",
                          ]}
                          value={checkedRate[checkedRate.length - 1]}
                          onChange={selectRate}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            flex: 1,
                            height: 200,
                            overflow: "hidden",
                            gap: 20,
                          }}
                        />
                      </>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default SideBarShop;
