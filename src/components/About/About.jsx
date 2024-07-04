import React from "react";
import Feature from "../Feature/Feature";
import "./About.css";
import Feat from "../Feat/Feat";
const About = () => {
  return (
    <>
      <Feat />
      <div className="about__whatgpt3 section__margin" id="whatgpt3">
        <div className="about__whatgpt3-feature">
          <Feature
            title="What is Hawlt"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic alias obcaecati rerum a placeat at modi atque eum quia magnam amet, natus ipsum quas, eos molestias praesentium minima eveniet commodi."
          />
        </div>
        <div className="about__whatgpt3-heading">
          <h1 className="">Your Gateway to hassle free PG living</h1>
          <p>some sort of description for the catch phrase</p>
        </div>
        <div className="about__whatgpt3-container">
          <Feature
            title="Advantages"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic alias obcaecati rerum a placeat at modi atque eum quia magnam amet, natus ipsum quas, eos molestias praesentium minima eveniet commodi."
          />
          <Feature
            title="Advantages"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic alias obcaecati rerum a placeat at modi atque eum quia magnam amet, natus ipsum quas, eos molestias praesentium minima eveniet commodi."
          />
          <Feature
            title="Advantages"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic alias obcaecati rerum a placeat at modi atque eum quia magnam amet, natus ipsum quas, eos molestias praesentium minima eveniet commodi."
          />
        </div>
      </div>
    </>
  );
};

export default About;
