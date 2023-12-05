import React from "react";
import Carousels from "../../../compoents/carousel/Carousels";
import "./section-5.scss"
const blogDetails = [
  {
    img: "Rectangle740.png",
    title: "Nhiều hoạt động hấp dẫn tại Lễ hội Xoài Đồng Tháp",
    des: "Trong không gian Lễ hội Xoài Đồng Tháp năm 2023, bên cạnh các khu vực trưng bày, triển lãm về xoài, các hoạt động trải nghiệm, vui chơi...",
    date: "2 tuần trước - 28/12/2022",
  },
  {
    img: "Rectangle740-2.png",
    title: "Đồng Tháp sẽ tổ chức lễ hội xoài",
    des: "Trong không gian Lễ hội Xoài Đồng Tháp năm 2023, bên cạnh các khu vực trưng bày, triển lãm về xoài, các hoạt động trải nghiệm, vui chơi...",
    date: "2 tuần trước - 28/12/2022",
  },
  {
    img: "Rectangle740-1.png",
    title: "Nhiều hoạt động hấp dẫn tại Lễ hội Xoài Đồng Tháp",
    des: "Trong không gian Lễ hội Xoài Đồng Tháp năm 2023, bên cạnh các khu vực trưng bày, triển lãm về xoài, các hoạt động trải nghiệm, vui chơi...",
    date: "2 tuần trước - 28/12/2022",
  },
  {
    img: "Rectangle740-3.png",
    title: "Nhiều hoạt động hấp dẫn tại Lễ hội Xoài Đồng Tháp",
    des: "Trong không gian Lễ hội Xoài Đồng Tháp năm 2023, bên cạnh các khu vực trưng bày, triển lãm về xoài, các hoạt động trải nghiệm, vui chơi...",
    date: "2 tuần trước - 28/12/2022",
  },
  {
    img: "Rectangle740.png",
    title: "Nhiều hoạt động hấp dẫn tại Lễ hội Xoài Đồng Tháp",
    des: "Trong không gian Lễ hội Xoài Đồng Tháp năm 2023, bên cạnh các khu vực trưng bày, triển lãm về xoài, các hoạt động trải nghiệm, vui chơi...",
    date: "2 tuần trước - 28/12/2022",
  },
  {
    img: "Rectangle740-2.png",
    title: "Đồng Tháp sẽ tổ chức lễ hội xoài",
    des: "Trong không gian Lễ hội Xoài Đồng Tháp năm 2023, bên cạnh các khu vực trưng bày, triển lãm về xoài, các hoạt động trải nghiệm, vui chơi...",
    date: "2 tuần trước - 28/12/2022",
  },
  {
    img: "Rectangle740-1.png",
    title: "Nhiều hoạt động hấp dẫn tại Lễ hội Xoài Đồng Tháp",
    des: "Trong không gian Lễ hội Xoài Đồng Tháp năm 2023, bên cạnh các khu vực trưng bày, triển lãm về xoài, các hoạt động trải nghiệm, vui chơi...",
    date: "2 tuần trước - 28/12/2022",
  },
  {
    img: "Rectangle740-3.png",
    title: "Nhiều hoạt động hấp dẫn tại Lễ hội Xoài Đồng Tháp",
    des: "Trong không gian Lễ hội Xoài Đồng Tháp năm 2023, bên cạnh các khu vực trưng bày, triển lãm về xoài, các hoạt động trải nghiệm, vui chơi...",
    date: "2 tuần trước - 28/12/2022",
  },
  
];
const BlogHome = () => {
  return (
    <div className="section-5">
        <div className="header-title">
            <h1>Bài viết gần đây nhất</h1>
        </div>
      <Carousels fade={false} dots={false} slidesToShow={4}>

        {blogDetails.map((item, i) => {
          return (
            <div className="content">
              <img src={item.img} alt="img" />
              <h1>{item.title}</h1>
              <div className="des">
                <p>{item.des}</p>
                <i>{item.date}</i>
              </div>
            </div>
          );
        })}
      </Carousels>
      <button className="show-more">
        <p>Xem chi tiết</p>
      </button>
    </div>
  );
};

export default BlogHome;
