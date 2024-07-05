import React from "react";
import "./footer.css";
import logo from "../../Assets/logo1.png";
import Social from "../social/social";

const Footer = () => {
  return (
    <div className="ft__footer section__padding">
      {/* <div className="ft__footer-heading">
        <h1 className="gradient__text">Subscribe to Our Newsletter</h1>
      </div>
      <div className="ft__footer-btn">
        <p>Subscribe</p>
      </div> */}
      <div className="ft__footer-links">
        <div className="ft__footer-links_logo">
          <img className="clogo" src={logo} alt="logo" />
          <p>Head Office</p>
          <p>Banglore,Karnataka ,India -XXXXXX</p>
        </div>
        <div className="ft__footer-links_div">
          <h4>Carrears</h4>
          <p>Blogs</p>
          <p>List your property</p>
          <p>Sitemap</p>
          <p>FAQs</p>
        </div>
        <div className="ft__footer-links_div">
          <h4>Company</h4>
          <p>Partner with Us</p>
          <p>List Your Policy</p>
          <p>Contact</p>
          <p>Media</p>
        </div>
        <div className="ft__footer-links_div">
          <h4>Get in touch</h4>
          <p>+91 12432414</p>
          <p>info@hawlt.com</p>
          <p>landline</p>
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
