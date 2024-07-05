import React from "react";
import "./Feat.css";
import img1 from "../../Assets/1.png";
import img2 from "../../Assets/2.png";
import img3 from "../../Assets/3.png";
import img4 from "../../Assets/4.png";

const features = [
  { id: 1, text: "IDEAL PG ACCOMMODATION", image: img1 },
  { id: 2, text: "HASSLE FREE SETTLEMENT", image: img2 },
  { id: 3, text: "NEARBY WORKPLACES", image: img3 },
  { id: 4, text: "AVOID BROKER CHARGES", image: img4 },
];

const WhyUseHawlt = () => {
  return (
    <div className="why-use-hawlt">
      <h2>
        Why Use <span>HAWLT</span>
      </h2>
      {features.map(({ id, text, image }, index) => (
        <div className={`feature ${index % 2 !== 0 ? "reverse" : ""}`} key={id}>
          <div className="content">
            <h3>{id}</h3>
            <p>{text}</p>
          </div>
          <div className="icon">
            <img src={image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUseHawlt;
