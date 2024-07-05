// Navbar.js
import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import Modal from "../Contact/Modal"; // Ensure correct path to Modal
import "./Navbar.css";

const Menu = ({ onContactClick }) => (
  <>
    <p>
      <NavLink
        to="/rent"
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
        to="/property"
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
        to="/about-us"
        className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive ? "text-orange-700" : "text-gray-700"
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
      >
        About Us
      </NavLink>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="nav__navbar flex justify-between items-center py-4 px-6">
      <div className="nav__navbar-links flex items-center">
        <Link className="main_logo" to="/">
          <p className="logo_name">Hawlt</p>
        </Link>
        <div className="nav__navbar-links_container flex justify-center flex-grow">
          <Menu onContactClick={() => setShowModal(true)} />
        </div>
      </div>
      <div className="nav__navbar-sign flex items-center">
        <button onClick={() => setShowModal(true)}>Contact Us</button>
        <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-purple-500 transition-colors duration-200">
          Login/Register
        </button>
      </div>
      <div className="nav__navbar-menu lg:hidden">
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
              <div className="nav__navbar-menu_container-links-sign flex flex-col items-end">
                <p className="cursor-pointer">Sign in</p>
                <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-purple-500 transition-colors duration-200">
                  Sign up
                </button>
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
