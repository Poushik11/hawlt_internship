import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../Assets/logo.png";
import "./Navbar.css";

// BEM --> Block Element Modifier
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#Rent">Rent</a>
    </p>
    <p>
      <a href="#possibility">Post Property</a>
    </p>
    <p>
      <a href="#features">Download</a>
    </p>
    <p>
      <a href="#blog">Contact Us</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nav__navbar">
      <div className="nav__navbar-links">
        <div className="main_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="nav__navbar-sign">
        <p>Log in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="nav__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nav__navbar-menu_container scale-up-center">
            <div className="nav__navbar-menu_container-links">
              <Menu />
              <div className="nav__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
