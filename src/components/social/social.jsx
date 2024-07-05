import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./social.css";

const SocialMenu = () => {
  return (
    <div className="container">
      <ul className="submenu">
        <li>
          <a href="https://www.facebook.com/hawltofficial">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://x.com/hawltnow">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/hawltnow">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/hawltnoww/">
            <i className="fa fa-google-plus"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMenu;
