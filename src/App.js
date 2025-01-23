import React from "react";
import { Routes, Route, } from "react-router-dom";
import Navbar from "./components/navbar"; // Make sure the path is correct
import Home from "./components/Homepage/home"; // Ensure correct file names
import Products from "./components/Product/ProductList";
import About from "./components/Aboute/AbouteUs"; // Fixed typo in the component name
import Contact from "./components/Contact/Contact"; // Fixed typo in the component name
import Signup from "./components/Signup";
import Login from "./components/Login.js";
// import Logout  from "./components/Logout.js";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./components/ErrorPage.js";
import { ProductDetails } from "./components/Product/ProductDetails.jsx";
import { SearchItem } from "./components/Product/SearchItem.jsx";
import { Cart } from "./components/Cart.jsx";
import { items } from "./components/Data.jsx";
import { useState } from "react";
import ProductList from "./components/Product/ProductList";



const App = () => {
  const [data, setData] = useState(...items)
  const [cart, setCart] = useState([])
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home cart={cart} setCart={setCart} items={data} />}
        />

        {/* <Route path="/" element={<ProductList cart={cart} setCart={setCart} items={data}/>} /> */}
      
        <Route
          path="/products"
          element={<ProductList cart={cart} setCart={setCart} items={data} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products items={data} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* <Route
          path="/products"
          element={<ProductList cart={cart} setCart={setCart}  />}
        /> */}

        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route path="*" element={< ErrorPage />} />
        <Route path="/products/:id" element={< ProductDetails />} />
        <Route path="/search/:term" element={< SearchItem />} />
        <Route path="/cart" element={< Cart />} />


      </Routes>
      <Footer />
    </>
  );
};

export default App;
