import React, { useState, useEffect } from "react";
import "./Header.css";
import home from "../../Assets/home.png";
import HeaderImage from "../HeaderImage/HeaderImage";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the database
      // const response = await axios.get()
      // setFilteredSuggestions(response.data.data);
      // setSuggestions(response.data.data)

      // Fake data for demonstration purposes
      const data = [
        "Single Room in Koramangala",
        "Double Room in HSR Layout",
        "Shared Room in Indiranagar",
        "Single Room with AC in Whitefield",
        "Double Room with Balcony in Marathahalli",
        "Single Room with Attached Bathroom in MG Road",
        "Double Room in Electronic City",
        "Single Room near Manyata Tech Park",
        "Shared Room in JP Nagar",
        "Single Room with Kitchen in BTM Layout",
        "Single Room in Hebbal",
        "Double Room in Yelahanka",
        "Shared Room in Jayanagar",
        "Single Room with Gym in Bellandur",
        "Double Room with Pool in Sarjapur",
        "Single Room near Bagmane Tech Park",
        "Double Room in Banashankari",
        "Single Room in Richmond Town",
        "Shared Room in Ulsoor",
        "Single Room with Study in Domlur",
        "Double Room in Basavanagudi",
        "Single Room in Sadashivanagar",
        "Shared Room in VV Puram",
        "Single Room with Balcony in Rajajinagar",
        "Double Room in Malleshwaram",
        "Single Room in Frazer Town",
        "Double Room in Cooke Town",
        "Shared Room in Cox Town",
        "Single Room near RMZ Infinity",
        "Double Room near RMZ Ecospace",
        "Shared Room in Kadubeesanahalli",
        "Single Room in Kalyan Nagar",
        "Double Room in Hennur",
        "Single Room near Embassy GolfLinks",
        "Double Room in Koramangala 1st Block",
        "Single Room near Koramangala 4th Block",
        "Double Room in Indiranagar 100 Feet Road",
        "Shared Room in Indiranagar 12th Main",
        "Single Room in Ulsoor Lake",
        "Double Room in CV Raman Nagar",
        "Shared Room in Kaggadasapura",
        "Single Room in New BEL Road",
        "Double Room in Dollars Colony",
        "Shared Room near Sankey Tank",
        "Single Room near IISc",
        "Double Room in Malleswaram 8th Cross",
        "Single Room in VV Puram Food Street",
      ];

      setSuggestions(data);
      setFilteredSuggestions(data); // Initially show all suggestions
    };

    fetchData();
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
            />
            <button type="button">Get Started</button>
            <ul className="suggestions-dropdown">
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
      <HeaderImage />
    </>
  );
};

export default Header;
