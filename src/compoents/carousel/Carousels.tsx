import React, { Fragment, useRef, useState } from "react";
import { Carousel } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
const Carousels = ({ children, fade,dots,slidesToShow}) => {

  const ref = useRef()
  const onChange = (currentSlide: number) => {

  };

  return (
    <div >
    <LeftOutlined  className="prev" onClick={()=>{ref.current.prev()}}/> 
    <Carousel afterChange={onChange}  ref={ref} fade={fade} dots={dots} slidesToShow={slidesToShow}>
      {children}
    </Carousel>
   <RightOutlined  className="next" onClick={()=>{ref.current.next()}}/>

    </div>
  );
};


export default Carousels;
