import React, { useState, useEffect } from "react";
import "./Header.css";
import home from "../../Assets/home.png";
// import HeaderImage from "../HeaderImage/HeaderImage";
import { data } from "../../Assets/data/pgdata";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // Fetch data from the database or set fake data
    setSuggestions(data);
    setFilteredSuggestions(data); // Initially show all suggestions
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setFilteredSuggestions(
      suggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    // Keep suggestions visible for a moment after hover
    setTimeout(() => {
      setShowSuggestions(false);
    }, 2000); // Adjust the delay as needed
  };

  return (
    <>
      <div className="hd__header section__padding">
        <div className="hd__header-content">
          <h1 className="gradient__text">Find Your Perfect PG.</h1>
          <p>
            Discover the best PG accommodations in the city. Affordable,
            comfortable, and convenient.
          </p>
          <div className="hd__header-content__input">
            <input
              type="text"
              placeholder="Search for rooms, amenities..."
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <button type="button">Get Started</button>
            <ul
              className={`suggestions-dropdown ${
                showSuggestions ? "visible" : ""
              }`}
            >
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))
              ) : (
                <li>No suggestions available</li>
              )}
            </ul>
          </div>
          <div className="hd__header-content__people">
            <p>Find a perfect place in your city</p>
          </div>
        </div>
        <div className="hd__header-image">
          <img src={home} alt="home" />
        </div>
      </div>
      {/* <HeaderImage /> */}
    </>
  );
};

export default Header;
