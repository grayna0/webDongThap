import React from "react";
import Carousels from "../../compoents/carousel/Carousels";
import Banner from "./banner/bannerDetail";
import HomeAboutUs from "./homeAboutUs";
import FeedBack from "./feedback/FeedBack";
import CategoryHome from "./category/CategoryHome";
import BlogHome from "./blogHome/BlogHome";
import NotesAboutus from "./blogHome/Section-6";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeAboutUs />
      <FeedBack/>
      <CategoryHome/>
      <BlogHome/>
      <NotesAboutus/>
    </>
  );
};

export default Home;
