import React from "react";
import "./App.css";

// import { Footer, Header } from "./containers";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import { Outlet } from "react-router-dom";

// const items = [
//   "First text item",
//   "Second text item",
//   "Third text item",
//   "Fourth text item",
// ];

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
