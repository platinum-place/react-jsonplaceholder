import React from "react";
import { NavLink } from "react-router-dom";

function Item({ name, url }) {
   return (
      <NavLink to={url} className="nav-link">{name}</NavLink>
   );
}

export default Item;
