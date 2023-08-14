import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
const Products = () => {
  const { products } = useSelector((state) => state.store);
  return (
    <section id="products-section">
      <p className="results-showing">results: products </p>
      <div className="products-container">
        {products.map((product) => {
          const { title, images, price, id } = product;
          return (
            <Product
              details={{ title: title, images: images, price: price, id: id }}
              key={id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Products;
