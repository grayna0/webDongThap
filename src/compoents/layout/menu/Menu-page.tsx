import React from "react";

import { NavLink } from "react-router-dom";
import { router } from "../../../routes/routes";

const MenuPage = () => {
  return (
    <ul className="list-page">
      {router.map((item,i) => {
        return (
          <>
         {item.title !== "" && <li key={i}>
            <NavLink  to={item.path}>{item?.title}</NavLink>
          </li>}
          </>
        );
      })}
    </ul>
  );
};

export default MenuPage;
