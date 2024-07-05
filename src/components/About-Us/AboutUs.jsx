import React from "react";
import "./AboutUs.css";
import placeholderImage from "../../Assets/home.png"; // Replace with the correct path to your image

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <div>
          <h1>
            About <span className="highlight">Us</span>
          </h1>
          <p>
            Welcome to our company, the leading aggregator of PG (Paying Guest)
            accommodations in Bangalore! We understand the challenges
            individuals face when searching for suitable PGs in a city like
            Bangalore, and we are here to simplify the process for you.
          </p>
          <p>
            At our company, our primary goal is to provide a comprehensive
            platform where users can easily find, compare, and book PG
            accommodations that meet their specific requirements. Whether you
            are a student, a working professional, or someone new to the city,
            we have a wide range of options to suit your needs.
          </p>
        </div>
        <img src={placeholderImage} alt="Mountain" className="about-image" />
      </header>
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to our company, the leading aggregator of PG (Paying Guest)
            accommodations in Bangalore! We understand the challenges
            individuals face when searching for suitable PGs in a city like
            Bangalore, and we are here to simplify the process for you.
          </p>
          <p>
            At our company, our primary goal is to provide a comprehensive
            platform where users can easily find, compare, and book PG
            accommodations that meet their specific requirements. Whether you
            are a student, a working professional, or someone new to the city,
            we have a wide range of options to suit your needs.
          </p>
        </div>
      </div>
      <footer className="about-footer">
        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">2000+</span>
            <span className="stat-text">
              PGs <span className="highlight">Provided</span>
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-number">70K</span>
            <span className="stat-text">
              PGs all <span className="highlight">Across India</span>
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              5 <span className="star">★</span>
            </span>
            <span className="stat-text">
              <span className="highlight">Reviews</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
