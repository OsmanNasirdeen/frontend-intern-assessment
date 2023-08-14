import React, { useState } from "react";
import MiniProduct from "./miniProduct";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Checkout = () => {
  const { cartProducts, cartTotalAmount } = useSelector((state) => state.store);
  const navigate = useNavigate();
  const [userTel, setUserTel] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    if (!userTel || userTel.trim().length == 0) {
      return alert("please fill the form");
    }
    navigate("/checkout-success");
  };
  return (
    <section id="checkout-section">
      <div className="order-address-container">
        <form action="" method="post">
          <label For="order-telephone" id="label-order-telephone">
            contact
          </label>
          <input
            type="tel"
            name="order-telephone"
            id="order-telephone"
            placeholder="Enter shipping phone number..."
            required
            onChange={(e) => {
              setUserTel(e.target.value);
            }}
          />
          <div className="order-btn-container">
            <button
              type="submit"
              onClick={(e) => {
                formSubmit(e);
              }}>
              proceed to shipping
            </button>
          </div>
        </form>
      </div>
      <aside className="order-summary-container">
        <h2 id="order-summary-heading">order summary</h2>
        <div className="order-products-container">
          {cartProducts.length == 0 ? (
            <h1>bag is empty</h1>
          ) : (
            cartProducts.map((product) => {
              const { title, price, images, id } = product;
              return (
                <MiniProduct
                  details={{
                    title: title,
                    images: images,
                    price: price,
                    id: id,
                  }}
                  key={id}
                />
              );
            })
          )}
        </div>
        <div className="order-calculations">
          <div className="sub-total">
            <p>sub total:</p>
            <p>${cartTotalAmount}</p>
          </div>
          <p className="total">
            <p>Total:</p>
            <p>${cartTotalAmount}</p>
          </p>
        </div>
      </aside>
    </section>
  );
};

export default Checkout;
