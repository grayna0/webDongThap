import React, { useState } from "react";
import "./index.scss";
import Carousels from "../../../compoents/carousel/Carousels";
import Carousel3d from "./Carousels3d";
import { ArrowRightOutlined } from "@ant-design/icons";
const HomeAboutUs = () => {
  const [active, setActive] = useState(2);
  const [point, setPoint] = useState(0);

  const handleMouseMove = (event: any) => {
    setPoint(event.pageX);
  };
  const handleCurrentImg = (event: any) => {
    if (point > 1400) {
      const next = active <= 0 ? active : active - 1;
      setActive(next);
    } else if (point < 1400) {
      const prev = active >= 3 ? active : active + 1;
      setActive(prev);
    }
  };

  return (
    <div className="section-2">
      <div className="content-left">
        <div className="content">
          <h1>Sứ mệnh mà chúng tôi sẽ đem lại cho khách hàng!</h1>
          <p className="des">
            Góp phần giới thiệu, quảng bá và thương mại các sản phẩm đặc sản của
            Đồng Tháp trên các kênh thương mại điện tử. Qua đó tăng thêm sự kết
            nối giữa người sản xuất và người tiêu dùng một cách nhanh chóng,
            chính xác và hiệu quả.
          </p>
      
          <p className="des">
       
            Với phương châm hoạt động: Chung tay hỗ trợ tiêu thụ nông sản - Lan
            tỏa sức mạnh cộng đồng - Cùng nông dân vượt qua đại dịch - Vì giá
            trị bền vững cho nông sản Việt!".
          </p>
          <button className="show-more">Kham Pha <ArrowRightOutlined  /></button>
        </div>
      </div>
      <div
        className="content-right"
        onPointerMove={(e) => handleMouseMove(e)}
        onClick={(e) => handleCurrentImg(e)}
      >
        <Carousel3d active={active}>
          <img src="image40.png" alt="" />
          <img src="image40.png" alt="" />
          <img src="image40.png" alt="" />
          <img src="image40.png" alt="" />
        </Carousel3d>
      </div>
    </div>
  );
};

export default HomeAboutUs;
