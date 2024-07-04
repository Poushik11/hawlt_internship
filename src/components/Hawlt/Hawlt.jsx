import React from "react";
// import possibilityImage from "../../assets/possibility.png";
// import image from "../../Assets/hawltapp.webp";
import image from "../../Assets/mobile.png";
import play from "../../Assets/playstore.png";
import app from "../../Assets/appstore.png";
// import Feat from "../Feat/Feat";
import HeaderImage from "../HeaderImage/HeaderImage";
import "./hawlt.css";

const Hawlt = () => {
  return (
    <>
      {/* <Feat /> */}
      <HeaderImage />
      <div className="ht__possibility section__padding" id="possibility">
        <div className="ht__possibility-image">
          <img src={image} alt="possibility" />
        </div>
        <div className="ht__possibility-content">
          <h4>GET THE HAWLT APP</h4>
          <h1 className="gradient__text">Explore the Hawlt .</h1>
          <p>Download App From.</p>

          <div className="down-btn">
            <img className="playstore" src={play} alt="playstore" />
            <img className="appstore" src={app} alt="iosstore" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hawlt;
