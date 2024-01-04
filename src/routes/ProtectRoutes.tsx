import React, { useEffect, useState } from "react";
import useLocalStorage from "../hook/useStorage";

const protectRoutes = (WrappedComponent) => {
  const WithLogger = (props: any) => {
    const { getItemStorage } = useLocalStorage();

    const [userLogger, setUserLogger] = useState(null);
    
    useEffect(() => {
      const user = getItemStorage("u");
      setUserLogger(user);
    }, []);

    return (
      <WrappedComponent/>
    );
  };

  return WithLogger;
};

export default protectRoutes;
