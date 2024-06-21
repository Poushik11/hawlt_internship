import React from "react";
import "./Header.css";
// import people from "../../assets/people.png";
// import ai from "../../assets/ai.png";
import home from "../../Assets/home.png";
import HeaderImage from "../HeaderImage/HeaderImage";

const Header = () => {
  return (
    <>
      <div className="gpt3__header section__padding">
        <div className="gpt3__header-content">
          <h1 className="gradient__text">Get your Ideal Story.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum beatae
            quod omnis doloribus aperiam error amet, perferendis, dolorum aut
            nobis adipisci tenetur, pariatur maiores exercitationem. Eius quas
            soluta dolorum accusamus.
          </p>
          <div className="gpt3__header-content__input">
            <input type="text" placeholder="search here" />
            <button type="button">Get Started</button>
          </div>
          <div className="gpt3__header-content__people">
            <p>Find a perfect place in your city</p>
          </div>
        </div>
        <div className="gpt3__header-image">
          <img src={home} alt="ai" />
        </div>
      </div>
      <HeaderImage />
    </>
  );
};

export default Header;
