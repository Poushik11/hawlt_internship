import React from "react";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Hawlt from "../components/Hawlt/Hawlt";
import Carousel from "../components/Carousel/Carousel";
const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Hawlt />
      <Carousel />
    </div>
  );
};

export default Home;
