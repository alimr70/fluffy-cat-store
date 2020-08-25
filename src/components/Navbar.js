import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const menuBtn = "url('./img/iconmonstr-menu-1.svg')";
const closeBtn = "url('./img/iconmonstr-x-mark-1.svg')";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="nav-container">
            <div className="main-nav">
              <button
                id="menu"
                className="nav-links-btn"
                style={{
                  background: menuBtn,
                }}
                onClick={() => {
                  document.querySelector("#close").style.display = "block";
                  document
                    .querySelector(".nav-links")
                    .classList.add("open-menu");
                  document.querySelector("#menu").style.display = "none";
                }}></button>

              <button
                id="close"
                className="nav-links-btn"
                style={{
                  background: closeBtn,
                }}
                onClick={() => {
                  document.querySelector("#menu").style.display = "block";
                  document
                    .querySelector(".nav-links")
                    .classList.remove("open-menu");
                  document.querySelector("#close").style.display = "none";
                }}></button>
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="store" className="logo" />
                </Link>
              </div>
              <Link to="/cart">
                <button className="btn-blue">
                  <span>
                    <i className="fas fa-cart-plus"></i>
                  </span>
                </button>
              </Link>
            </div>
            <ul
              className="nav-links"
              onClick={() => {
                document
                  .querySelector(".nav-links")
                  .classList.remove("open-menu");
              }}>
              <li>
                <Link to="/" className="nav-link">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products/Dry Food" className="nav-link">
                  Dry Food
                </Link>
              </li>
              <li>
                <Link to="/products/Wet Food" className="nav-link">
                  Wet Food
                </Link>
              </li>
              <li>
                <Link to="/products/Toy" className="nav-link">
                  Toys
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
