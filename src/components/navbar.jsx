import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate();


  // Function to handle Login/SignUp button click
  const handleLoginClick = () => {
    if (!isLoggedIn) {
      navigate("/signup"); // Redirect to signup if not logged in
    } else {
      navigate("/login"); // Redirect to login if logged in
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      {/* Replace text with logo image */}
      <Link className="navbar-brand" to="logo.png">
        <img
          src={logo}
          alt="SwasthySewa Logo"
          style={{ height: "40px", width: "auto" }} // Adjust size as needed
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="d-flex justify-content-center w-20">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success c" type="submit">
                Search
              </button>
            </form>
          </div>

          {/* Login/Sign Up Button */}
          <button className="btn btn-primary ms-3" onClick={handleLoginClick}>
            {isLoggedIn ? "Login" : "Sign Up"} Change text based on login status
          </button>
           

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
