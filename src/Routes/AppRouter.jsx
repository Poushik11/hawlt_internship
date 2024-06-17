import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Home from "../pages/home/Home";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
// import Search from "../pages/search/Search";
// import Categories from "../pages/categories/Categories";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
