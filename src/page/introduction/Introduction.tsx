import React from "react";
import "./index.scss";
const Introduction = () => {
  return (
    <>
      <div className="banner">
        <img width={"100%"} src="./introduction.png" alt="img" />
      </div>
      <div className="section-1">
        <div className="img">
          <img src="./img1.png" alt="img" />
        </div>
        <div className="content">
          <h2 className="title">Về chúng tôi</h2>
          <p>
            HTX Đặc Sản Đồng Tháp được thành lập tháng 1/2021, với mục tiêu kết
            nối, giao lưu giữa các doanh nghiệp sản xuất và kinh doanh đặc sản
            mang phong vị Đất Sen Hồng, tạo không gian chia sẻ tri thức và là
            bước đệm thúc đẩy hệ sinh thái tiềm năng địa phương. Sau thời gian
            hoạt động, HTX đặc sản Đồng Tháp đã quy tụ được hơn 60 doanh nghiệp
            và hơn 400 dòng sản phẩm được đưa ra thị trường và cải tiến không
            ngừng nhằm đáp ứng thị hiếu người tiêu dùng. HTX đặc sản Đồng Tháp
            với sứ mệnh: "Kết nối và phát huy giá trị" những sản phẩm đặc sản từ
            tài nguyên bản địa Tỉnh Đồng Tháp.
          </p>
        </div>
      </div>
      <div className="section_2 ">
        <h2 className="title">Chúng tôi cam kết</h2>
        <div className="wrapped-box-icon">

        <div className="box-icon">
          <h2 className="title">
            
            <span>
              <img src="./Vector7.png" alt="img" />
            </span>
            100% sản vật địa phương
          </h2>
          <p>
            Chúng tôi đảm bảo vùng trông nguyên liệu rõ ràng, cung cấp những sản
            phẩm sạch, tự nhiên an toàn cho sức khỏe và hạnh phúc.
          </p>
        </div>
        <div className="box-icon">
          <h2 className="title">
            <span>
              <img src="./Vector7.png" alt="img" />
            </span>
            An toàn - Rõ nguồn gốc
          </h2>
          <p>
            Nỗ lực mang đến khách hàng những trải nghiệm về sản phẩm chất lượng
            cao, an toàn & dinh dưỡng góp phần nâng cao chất lượng cuộc sống
            khỏe.
          </p>
        </div>
        <div className="box-icon">
         <h2 className="title">
            <span>
              <img src="./Vector7.png" alt="img" />
            </span>
            Liên kết chuỗi giá trị
          </h2>
          <p>
            khai thác trọn vẹn chuỗi giá trị của nguyên liệu. Hướng đến nhiều
            đối tượng khách hàng và để lại ấn tượng bằng những sản phẩm sạch.
          </p>
        </div>
        <div className="box-icon">
          <h2 className="title">
            <span>
              <img src="./Vector7.png" alt="img" />
            </span>
            Đúng giá nhà cung cấp
          </h2>
          <p>
            Chúng tôi bán đúng giá nhà cung cấp và hướng đến thương mại công
            bằng với nông dân.
          </p>
        </div>
        <div className="box-icon">
         <h2 className="title">
            <span>
              <img src="./Vector7.png" alt="img" />
            </span>
            Môi trường
          </h2>
          <p>
            Chúng tôi xây dựng sản xuất an toàn và trách nhiệm với môi trường.
          </p>
        </div>
        <div className="box-icon">
         <h2 className="title">
            <span>
              <img src="./Vector7.png" alt="img" />
            </span>
            Sức khỏe cho cộng đồng
          </h2>
          <p>
            Hướng đến sức khỏe người tiêu dùng bằng việc sản xuất những sản phẩm
            chất lượng .
          </p>
        </div>
        </div>
    
      </div>
    </>
  );
};

export default Introduction;
