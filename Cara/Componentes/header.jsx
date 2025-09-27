import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/img/logo.png";

const Header = () => {
  return (
    <header id="header">
      <a href="#">
        <img src={logo} className="logo" alt="logo" />
      </a>
      <div>
        <ul id="navbar">
          <li><Link to="/"><a className="active">Home</a></Link></li>
          <li><Link to="/shop"><a>Shop</a></Link></li>
          <li><Link to="/blog"><a>Blog</a></Link></li>
          <li><Link to="/about"><a>About</a></Link></li>
          <li><Link to="/contact"><a>Contact</a></Link></li>
          <li id="lg-bag">
            <a href="cart.html"><i className="fa-solid fa-cart-shopping"></i></a>
          </li>
          <li>
            <a href="#" id="close"><i className="fas fa-close"></i></a>
          </li>
        </ul>
      </div>
      <div className="mobile">
        <a href="cart.html"><i className="fa-solid fa-cart-shopping"></i></a>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </header>
  );
};

export default Header;
