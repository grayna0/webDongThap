import React from "react";
import Carousels from "../../../compoents/carousel/Carousels";
import "./index.scss";
import { StarFilled } from "@ant-design/icons";
const feedBackdetail = [
  {
    img: "Rectangle3533.png",
    feedback:
      "Hàng đóng gói rất đẹp. Hộp không có dấu hiệu bị móp, chứng tỏ bộ phận vận chuyển đã nâng như nâng trứng, hứng như hứng hoa.",
    user: "Yến Thư",
    adress: "Đà Nẵng",
  },
  {
    img: "Rectangle3533.png",
    feedback:
      "Hàng đóng gói rất đẹp. Hộp không có dấu hiệu bị móp, chứng tỏ bộ phận vận chuyển đã nâng như nâng trứng, hứng như hứng hoa.",
    user: "Thuy Hang",
    adress: "Ha Noi",
  },
  {
    img: "Rectangle3533.png",
    feedback:
      "Hàng đóng gói rất đẹp. Hộp không có dấu hiệu bị móp, chứng tỏ bộ phận vận chuyển đã nâng như nâng trứng, hứng như hứng hoa.",
    user: "Yến Kieu",
    adress: "Đà Nẵng",
  },
  {
    img: "Rectangle3533.png",
    feedback:
      "Hàng đóng gói rất đẹp. Hộp không có dấu hiệu bị móp, chứng tỏ bộ phận vận chuyển đã nâng như nâng trứng, hứng như hứng hoa.",
    user: "Cam Thư",
    adress: "Nha Trang",
  },
];
const FeedBack = () => {
  return (
    <div className="section-3">
      <Carousels fade={true} dots={false}>
        {feedBackdetail.map((item, i) => {
          return (
            <div key={i} className="fb-content">
              <div className="content-left">
                <div
                  className="img"
                  style={{
                    "--icons": "./Vector.png",
                  }}
                >
                  <img src={item.img} alt="iong" />
                </div>
              </div>
              <div className="content-right">
                <h2>ĐÁNH GIÁ</h2>
                <h1>Từ Khách hàng</h1>
                <div className="feedback">
                  <p>{item.feedback}</p>
                  <p>{item.user}</p>
                  <p>{item.adress}</p>
                </div>
                <div className="star-fb">
                {[...new Array(5)].map((_, i) => {
                  return (
                      <StarFilled style={{ color: "#F9B917",fontSize:25,marginTop:20,width:35
                       }} />
                      );
                    })}
                    </div>
              </div>
            </div>
          );
        })}
      </Carousels>
    </div>
  );
};

export default FeedBack;
