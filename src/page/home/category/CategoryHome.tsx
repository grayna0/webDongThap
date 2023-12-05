import React, { useMemo, useState } from "react";
import "./section-4.scss";
import { ArrowRightOutlined } from "@ant-design/icons";

const categoryList = [
  {
    title: "Trái cây",
    img: ["Rectangle3360.png", "Rectangle3361.png", "Rectangle3362.png"],
  },
  {
    title: "Sản phẩm sấy khô",
    img: ["Rectangle3361.png", "Rectangle3361.png", "Rectangle3362.png"],
  },
  {
    title: "Gạo - sản phẩm làm từ gạo",
    img: ["Rectangle3360.png", "Rectangle3360.png", "Rectangle3362.png"],
  },
  {
    title: "Gia vị",
    img: ["Rectangle3360.png", "Rectangle3360.png", "Rectangle3362.png"],
  },
  {
    title: "Trà",
    img: ["Rectangle3360.png", "Rectangle3360.png", "Rectangle3362.png"],
  },
  {
    title: "Tinh dầu",
    img: ["Rectangle3360.png", "Rectangle3360.png", "Rectangle3362.png"],
  },
  {
    title: "Các loại chả",
    img: ["Rectangle3360.png", "Rectangle3360.png", "Rectangle3362.png"],
  },
  {
    title: "Rượu",
    img: ["Rectangle3360.png", "Rectangle3360.png", "Rectangle3362.png"],
  },
];
const CategoryHome = () => {
    const [indexImg,setIndexImg] = useState(0)

    
  return (
    <div className="section-4">
      <div className="header-category">
        <div className="content">

        <h1>Danh mục sản phẩm OCOP</h1>
        <p>Đến với chúng tôi bạn không phải lo về chất lượng của sản phẩm!</p>
        <button className="show-more">Xem Them</button>
        </div>
        <div className="content"></div>
      </div>
      <div className="popip">
        <div className="cate-title" >
          {categoryList.map((cate, i) => {
            return (<div className="btn-title" onMouseEnter={()=> setIndexImg(i)}>
            <p >{cate.title} </p>
            <p className="arrowR"><ArrowRightOutlined /></p>
            </div>
            );
          })}
        </div>
        <div className="cate-img">
          {categoryList[indexImg].img.map((img, i) => {
          
              return (
                <>
                <img key={i} src={`./${img}`} alt={img}/>
        
                </>
              )
          
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryHome;
