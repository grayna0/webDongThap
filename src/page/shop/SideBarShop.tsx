import { Checkbox, Collapse, ConfigProvider, InputNumber, Slider } from "antd";
import Search from "antd/es/input/Search";

import React, { useState } from "react";
const CheckboxGroup = Checkbox.Group;
const SideBarShop = () => {
  const [inputValue, setInputValue] = useState<number[]>([0, 500]);

  const onChange = (newValue: number[]) => {
    setInputValue(newValue);
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
                          justifyContent: "space-between", }}>
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
                          value={   typeof inputValue[0] === "number"   ? inputValue[0]: 0}
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
                          value={ typeof inputValue[1] === "number" ? inputValue[1]: 0  }
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
                  label:"Loại sản phẩm",
                  children:(
                    <>
                     <Search placeholder="Tìm kiếm..." onSearch={e => console.log(e)} style={{ width: "100%"}} />
                     {/* <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} /> */}
                     </>
                  )
                }
              ]}
              />
            
          </div>
          <div className="price">500</div>
        </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default SideBarShop;
