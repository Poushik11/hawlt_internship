import React from "react";
import "./footer.css";
import logo from "../../Assets/logo1.png";
import Social from "../social/social";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="ft__footer section__padding">
      <div className="ft__footer-links">
        <div className="ft__footer-links_logo">
          <img className="clogo" src={logo} alt="logo" />
          <p>Head Office</p>
          <p>
            14th Cross Rd, 5th Main Rd, Sector 6, HSR Layout, Bengaluru,
            Karnataka 560102
          </p>
        </div>
        <div className="ft__footer-links_div">
          <h4>Carrears</h4>
          <p>Blogs</p>
          <p>List your property</p>
          <p>Sitemap</p>
          <Link to="/Faq">
            <p>FAQs</p>
          </Link>
        </div>
        <div className="ft__footer-links_div">
          <h4>Company</h4>
          <p>Partner with Us</p>
          <Link to="/terms-conditions">
            <p>Terms and Conditions</p>
          </Link>
          <Link to="/privacy-policy">
            <p>Privacy Policy</p>
          </Link>
          <p>Contact</p>
        </div>
        <div className="ft__footer-links_div">
          <h4>Get in touch</h4>
          <p>+91 9353018894</p>
          <p>Support@hawlt.com</p>
        </div>
      </div>
      <Social />
      <div className="ft__footer-copyright">
        <p>© Copyright 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
