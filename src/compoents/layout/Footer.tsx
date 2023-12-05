import React from "react";


const FooterChild = () => {
  return (
    <div className="footer">
      <div className="col-1">
        <div className="logo">
          <img src="./logo.png" alt="img" />
        </div>
        <div className="social-icon">
          <div className="face">
            <img src="./Group10.png" alt="img" />
          </div>
          <div className="google">
            <img src="./Group13.png" alt="img" />
          </div>
          <div className="youtube">
            <img src="./Group14.png" alt="img" />
          </div>
        </div>
        <div className="register-email">
          <h2>Đăng kí nhận tin</h2>
          <div className="input-email">
            <input type="text" />
            <img src="./Vector8.png" alt="img" />
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="footer-menu">
          <div className="about-us">
            <h2>VỀ CHÚNG TÔI</h2>
            <ul>
              <li>Giới Thiệu</li>
              <li>Hỗ trợ</li>
              <li>Góp ý báo lỗi</li>
            </ul>
          </div>
          <div className="footer-cate">
            <h2> DANH MỤC NỔI BẬT </h2>
            <ul>
              <li>Trái cây</li>
              <li>Gạo - sản phẩm làm từ gạo</li>
              <li>Trà</li>
              <li>Tinh dầu</li>
            </ul>
          </div>
          <div className="footer-rule">
            <h2>QUY ĐỊNH</h2>
            <ul>
              <li>Liên hệ</li>
              <li>Hình thức thanh toán</li>
              <li>Điều khoản sử dụng</li>
              <li>Chính sách vận chuyển</li>
            </ul>
          </div>
        </div>
        <div className="footer-assis">
          <div className="col">
            <img src="./Vector10.png" alt="img" />
            <p>756 Quốc lộ 30, xã Mỹ Tân, Thành phố Cao Lãnh, tỉnh Đồng Tháp, Việt Nam.</p>
          </div>
          <div className="col">
            <img src="./Vector10.png" alt="img" />
            <p>Hỗ trợ khách hàng l<br/>
            <strong>lienhe.ocopdongthap.com.vn</strong></p>
          </div>
          <div className="col">
            <img src="./Vector10.png" alt="img" />
            <p>(089) 8750 9669 - (089) 1710 2003</p>
          </div>
          <div className="col">
            <img src="./Vector10.png" alt="img" />
            <p>Chăm sóc khách hàng <br/>
            <strong>ocopdongthap.com.vn</strong></p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FooterChild;
