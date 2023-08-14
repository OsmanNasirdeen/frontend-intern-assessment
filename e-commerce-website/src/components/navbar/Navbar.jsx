import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import searchIcon from "../../assets/search-icon.svg";
import xLetter from "../../assets/x-letter.svg";
import shoppingBag from "../../assets/shopping-bag.svg";
import humbergerIcon from "../../assets/humberger.svg";
import "./navbar.css";
const Navbar = () => {
  const { cartLength } = useSelector((state) => state.store);
  return (
    <nav id="navbar">
      <form id="search-products-form">
        <input
          type="text"
          name="search-keyword"
          id="search-keyword"
          placeholder="Enter Keyword To Search..."
        />
        <button type="submit" id="btn-search">
          <img src={searchIcon} alt="search icon" />
        </button>
        <button id="btn-close">
          <img src={xLetter} alt="" />
        </button>
      </form>
      <section className="preferences-bar">
        <div id="welcome-msg">welcome to our shop</div>
        <form>
          <div className="languages">
            <label For="language"></label>
            <select name="language" id="language">
              <option value="english">english</option>
              <option value="english">Hausa</option>
              <option value="english">spanish</option>
            </select>
          </div>
          <div className="currencies">
            <label For="currency"></label>
            <select name="currency" id="currency">
              <option value="dollar">USD</option>
              <option value="cedis">cedi</option>
              <option value="pound">pound</option>
            </select>
          </div>
        </form>
      </section>
      <section className="pre-navbar">
        <div className="humberger-container">
          <img src={humbergerIcon} alt="humberger-icon" />
        </div>
        <div className="company-logo-container">
          <img src="" alt="company-logo" />
        </div>
        <div className="search-icon-container">
          <img src={searchIcon} alt="search icon" />
        </div>
        <div className="shopping-bag-container">
          <div className="bag-img-container">
            <div id="shopping-bag">
              <NavLink to="/checkout">
                <img src={shoppingBag} alt="a bag" />
              </NavLink>
            </div>
            <div className="bag-items-count">{cartLength}</div>
          </div>
        </div>
      </section>
      <ul id="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink>ABOUT</NavLink>
        <NavLink>PRODUCTS</NavLink>
        <NavLink>CONTACT US</NavLink>
      </ul>
      <div className="modal-overlay"></div>
    </nav>
  );
};

export default Navbar;
