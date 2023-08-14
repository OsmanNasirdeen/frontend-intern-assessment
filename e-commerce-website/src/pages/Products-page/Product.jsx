import React from "react";
import demoImg from "../../assets/banner.jpg";
import "./products.css";
import { Link } from "react-router-dom";
const Product = ({ details }) => {
  return (
    <article className="product-card">
      <div className="product-card-top">
        <img src={details.images[0]} alt="" loading="lazy" />
      </div>
      <div className="product-card-body">
        <p className="product-card-name">{details.title}</p>
        <p className="product-card-price">${details.price}</p>
        <div className="product-view-details">
          <Link to={`/details/${details.id}`}>
            <button className="view-details-btn">view details</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Product;
