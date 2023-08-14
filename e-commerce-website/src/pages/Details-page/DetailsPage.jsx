import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/products/ProductSlice";
// import demo from "../../assets/banner.jpg";

import "./detailsPage.css";
const DetailsPage = () => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { products } = useSelector((state) => state.store);
  // find product from the list
  const product = products.find((item) => {
    return item.id == Number(productID);
  });
  const { title, price, description, images, id } = product;
  return (
    <section id="product-details-section">
      <article className="product-details-container">
        <div className="product-image-container">
          <img src={images[0]} alt="" />
        </div>
        <div className="product-details">
          <h2 className="product-name">{title}</h2>
          <p className="product-price">${price}</p>
          <p className="product-description">{description}</p>
          <div className="add-to-cart-btn-container">
            <button
              onClick={() => {
                dispatch(addToCart(product));
              }}>
              add to cart
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DetailsPage;
