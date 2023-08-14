import React from "react";
import demo from "../../assets/banner.jpg";
import { NavLink } from "react-router-dom";
const MiniProduct = ({ details }) => {
  return (
    <div className="mini-product">
      <img src={details.images[0]} alt="" />
      <div className="mini-product-details">
        <p>
          <NavLink to={`/details/${details.id}`}>{details.title}</NavLink>
        </p>
        <p>${details.price}</p>
      </div>
    </div>
  );
};

export default MiniProduct;
