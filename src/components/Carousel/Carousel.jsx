import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Import your custom styles here if needed
import { testimonials } from "../../Assets/data/testimonials";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "0",
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
