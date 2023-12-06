import React from "react";
import cartLogo from "../images/cartLogo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar">
            
          <div className="dropdown">
            <button className="dropdown-btn">
              Best Items <IoMdArrowDropdown className="dropdown-icon" />
            </button>
              <div className="dropdown-content">
                <Link to="/" className="item-link">
                  Best Items
                </Link>
                <Link to="/pizzas" className="item-link">
                  Pizzas
                </Link>
                <Link to="/burgers" className="item-link">
                  Burgers
                </Link>
                <Link to="/sandwiches" className="item-link">
                  Sandwiches
                </Link>
                <Link to="/bbqs" className="item-link">
                  BBQ's
                </Link>
                <Link to="/desserts" className="item-link">
                  Desserts
                </Link>
                <Link to="/drinks" className="item-link">
                  Drinks
                </Link>
              </div>
          </div>
          <Link to="/cart">
            <div className="cart-logo-container">
              <button className="cart-btn" title="Orders">
                <img src={cartLogo} alt="cart-logo" className="cart-logo" />
              </button>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
