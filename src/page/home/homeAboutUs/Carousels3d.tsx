import React from "react";
import { useState } from "react";

const Carousel3d = ({ children ,active}) => {

  return (
    <div
      className="carousel">
      {/* <button onClick={() => setActive(active + 1)}>next</button> */}
      {React.Children.map(children, (child, i) => (
        <div
          className="img-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= 3 ? "0" : "1",
            display: Math.abs(active - i) > 3 ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {/* <button onClick={() => setActive(active - 1)}>prev</button> */}
    </div>
  );
};

export default Carousel3d;
