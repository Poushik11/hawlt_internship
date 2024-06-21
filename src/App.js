import React from "react";
import "./App.css";

// import { Footer, Header } from "./containers";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Hawlt from "./components/Hawlt/Hawlt";
import Carousel from "./components/Carousel/Carousel";

// const items = [
//   "First text item",
//   "Second text item",
//   "Third text item",
//   "Fourth text item",
// ];

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <About />
      <Hawlt />
      <Carousel />
      <Footer />
    </div>
  );
};

export default App;
