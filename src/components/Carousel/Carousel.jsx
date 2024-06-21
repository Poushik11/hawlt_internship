// src/Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const testimonials = [
  {
    id: 1,
    user: "User",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    user: "User 2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    user: "User 3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <h2>What's it like to Hawlt with us</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="carousel-slide">
            <div className="carousel-content">
              <div className="user-icon">
                <i className="fas fa-user-circle"></i>
              </div>
              <h3>{testimonial.user}</h3>
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
