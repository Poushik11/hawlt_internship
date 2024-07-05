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
          <h1 className>GET THE</h1>
          <h1>
            <span className="highlight">HAWLT</span> APP
          </h1>
          <p>
            Effortless room reservations are now <br />
            exclusively available through our app!
          </p>

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
