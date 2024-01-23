import React, { useEffect, useState } from "react";
import useLocalStorage from "../hook/useStorage";
import setToastMessage from "../compoents/setToastMessage";


const protectRoutes = (WrappedComponent) => {
  const WithLogger = (props: any) => {
    const { getItemStorage } = useLocalStorage();
     const user = getItemStorage("u");
    const setMesg =(fn:any) => {
      if(user === null) {
        setToastMessage("Bạn cần Đăng Nhập để tiếp tục !", "error")
      }else{
        fn()

      }
     }

    return (
      <WrappedComponent userLogger={user}  setMesg={setMesg}/>
    );
  };

  return WithLogger;
};

export default protectRoutes;
