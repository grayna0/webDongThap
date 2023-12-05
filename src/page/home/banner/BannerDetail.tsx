import React, { Fragment, useEffect, useState } from "react";
import Carousels from "../../../compoents/carousel/Carousels";

const bannerContent = [
  {
    right: {
      title: "Đặc sản nổi bật chất lượng cho mọi nhà!",
      text: "Luôn đem lại cho bạn những sản phẩm đạt chuẩn OCOP",
    },
    left: {
      header: "XOÀI NÀO NGON HƠN ",
      title: "XOÀI CAO LÃNH",
      text: "Sản phẩm xoài sạch, được trồng theo cách tự nhiên.",
    },
    img: "fedor-BRiT_s3tN6Y-unsplash__1_-removebg-preview 4.png",
    color: "#D04D4D",
  },
  {
    right: {
      title: "Đặc sản nổi bật chất lượng cho mọi nhà!",
      text: "Luôn đem lại cho bạn những sản phẩm đạt chuẩn OCOP",
    },
    left: {
      header: "MUỐN THÊM SỨC?",
      title: "BÚN GẠO LỨT",
      text: "Sản phẩm nói không với chất bảo quản và hàn the.",
    },
    img: "Bun-gao-lut-kho-HOA-HUNG-Sa-Dec-4-removebg-preview 4.png",
    color: "#D04D4D",
  },
  {
    right: {
      title: "Đặc sản nổi bật chất lượng cho mọi nhà!",
      text: "Luôn đem lại cho bạn những sản phẩm đạt chuẩn OCOP",
    },
    left: {
      header: "CHÍN GIÒN CÓ HẠT ",
      title: "ỔI NỮ HOÀNG",
      text: "Hương vị ngọt ngào, thơm ngon tuyệt hảo.",
    },
    img: "image-removebg-preview (14) 17.png",
    color: "#7AAB33",
  },
  {
    right: {
      title: "Đặc sản nổi bật chất lượng cho mọi nhà!",
      text: "Luôn đem lại cho bạn những sản phẩm đạt chuẩn OCOP",
    },
    left: {
      header: "THẢ LỎNG MỆT MỎI   ",
      title: "DẦU OẢI HƯƠNG",
      text: "Sản phẩm chiết xuất 100% tự nhiên, lưu hương lâu.",
    },
    img: "image-removebg-preview (9) 8.png",
    color: "#7078C0",
  },
  {
    right: {
      title: "Đặc sản nổi bật chất lượng cho mọi nhà!",
      text: "Luôn đem lại cho bạn những sản phẩm đạt chuẩn OCOP",
    },
    left: {
      header: "XOÀI NÀO NGON HƠN ",
      title: "XOÀI CAO LÃNH",
      text: "Sản phẩm xoài sạch, được trồng theo cách tự nhiên.",
    },
    img: "fedor-BRiT_s3tN6Y-unsplash__1_-removebg-preview 4.png",
    color: "#FFC700",
  },
];
const Banner = () => {
  return (
    <div className="banner">

    <Carousels slidesToShow={1} dots={false} fade={true}>
      {bannerContent.map((content, i) => {
        const contentR = content.right;
        const contentL = content.left;

        return (
          <div className="banner-content" key={i}>
            <div className="content-left">
              <div className="content">
                <h1 style={{ color: `${content.color}` }}>{contentR.title}</h1>
                <p>{contentR.text}</p>
              </div>
            </div>
            <div className="content-center">
              <img src={content.img} alt="img" />
            </div>
            <div
              className="content-right"
              style={{ backgroundColor: `${content.color}` }}
            >
              <div className="content">
                <p>{contentL.header}</p>
                <h1>{contentL.title}</h1>
                <p>{contentL.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Carousels>
    </div>
  );
};
export default Banner;
