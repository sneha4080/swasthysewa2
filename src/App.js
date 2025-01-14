import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Make sure the path is correct
import Home from "./components/Homepage/home"; // Ensure correct file names
import Products from "./pages/Products";
import About from "./components/Aboute/AbouteUs"; // Fixed typo in the component name
import Contact from "./pages/Contact"; // Fixed typo in the component name
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
