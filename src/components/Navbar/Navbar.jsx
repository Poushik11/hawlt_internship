// Navbar.js
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Modal from "../Contact/Modal"; // Ensure correct path to Modal

// BEM --> Block Element Modifier
const Menu = ({ onContactClick }) => (
  <>
    <p>
      <NavLink
        to="rent"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-orange-700" : "text-gray-700"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        Rent
      </NavLink>
    </p>
    <p>
      <NavLink
        to="#Property"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-orange-700" : "text-gray-700"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        Property
      </NavLink>
    </p>
    <p>
      <NavLink
        to="about-us"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-orange-700" : "text-gray-700"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        About Us
      </NavLink>
    </p>
    <p>
      <button
        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
        onClick={onContactClick}
      >
        Contact Us
      </button>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="nav__navbar">
      <div className="nav__navbar-links">
        <Link className="main_logo" to="/">
          <p className="logo_name">Hawlt</p>
        </Link>
        <div className="nav__navbar-links_container">
          <Menu onContactClick={() => setShowModal(true)} />
        </div>
      </div>
      <div className="nav__navbar-sign">
        <p>Log in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="nav__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nav__navbar-menu_container scale-up-center">
            <div className="nav__navbar-menu_container-links">
              <Menu onContactClick={() => setShowModal(true)} />
              <div className="nav__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2>
          Contact <span className="highlight">us</span>
        </h2>
        <p>
          Want to get in touch? Send us your questions, and we'll respond as
          quickly as we can.
        </p>
        <form>
          <div className="form-row">
            <label>
              First name
              <input type="text" name="firstName" />
            </label>
            <label>
              Last name
              <input type="text" name="lastName" />
            </label>
          </div>
          <label>
            Email address
            <input type="email" name="email" />
          </label>
          <label>
            Your message
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default Navbar;
