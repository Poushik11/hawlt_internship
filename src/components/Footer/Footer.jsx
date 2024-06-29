import React from "react";
import "./footer.css";
import logo from "../../Assets/image.png";

const Footer = () => {
  return (
    <div className="ft__footer_section__padding">
      {/* <div className="ft__footer-heading">
        <h1 className="gradient__text">Subscribe to Our Newsletter</h1>
      </div> */}

      <div className="ft__footer-links">
        <div className="ft__footer-links_logo">
          <img className="clogo" src={logo} alt="logo" />
          <br></br>
          <h5>Head Office</h5>
          <br></br>
          <p>
            Banglore,Karnataka , <br></br>India -XXXXXX
          </p>
        </div>
        <div className="ft__footer-links_div">
          <h4>Company Information</h4>
          <p>Blogs</p>
          <p>Careers</p>
          <p>Contact Us</p>
          <p>Cookies Policy</p>
          <p>Disclaimers</p>
          <p>FAQ's</p>
          <p>How it works?</p>
          <p>Investor Relations</p>
          <p>List your property</p>
          <p>Media</p>
          <p>Partber with us</p>
          <p>Privacy Policy</p>
          <p>Sitemap</p>
          <p>Term's and Condition</p>
        </div>
      </div>

      <div className="ft__footer-right">
        <h4>Right Side Content</h4>
        <p>Additional information here</p>
      </div>

      <div className="ft__footer-copyright">
        <p>© Copyright 2024 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
