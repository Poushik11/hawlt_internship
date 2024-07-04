import React from "react";
import "./Feat.css";
import { IconHouse, IconHassleFree, IconWork, IconNoBroker } from "./Icons";

const features = [
  { id: 1, text: "IDEAL PG ACCOMMODATION", Icon: IconHouse },
  { id: 2, text: "HASSLE FREE SETTLEMENT", Icon: IconHassleFree },
  { id: 3, text: "NEARBY WORKPLACES", Icon: IconWork },
  { id: 4, text: "AVOID BROKER CHARGES", Icon: IconNoBroker },
];

const WhyUseHawlt = () => {
  return (
    <div className="why-use-hawlt">
      <h2>
        Why Use <span>HAWLT</span>
      </h2>
      {features.map(({ id, text, Icon }, index) => (
        <div className={`feature ${index % 2 !== 0 ? "reverse" : ""}`} key={id}>
          <div className="content">
            <h3>{id}</h3>
            <p>{text}</p>
          </div>
          <div className="icon">
            <Icon />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyUseHawlt;
