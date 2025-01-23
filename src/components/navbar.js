import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // Set state based on token presence
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setsearchTerm("")

  }
  
  const handleLoginClick = () => {
    if (!isLoggedIn) {
      navigate("/signup"); // Redirect to signup if not logged in
    } else {
      navigate("/logout")
    }
  };

  // Function to handle Login/SignUp button click
  const handleLogoutClick = () => {
    localStorage.removeItem("authToken"); // Remove token from localStorage
    setIsLoggedIn(false); // Update state
    navigate("/signup"); // Redirect to signup after logout
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/logo.png" // Path relative to the `public` folder
            alt="SwasthySewa Logo"
            style={{ height: "40px", width: "auto" }}
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
            <li className="nav-item fs-4">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item fs-4">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item fs-4">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="d-flex w-90 search-bar me-auto">
            <form 
             onSubmit={handleSubmit}
            className="d-flex">
              <input
                className="form-control me-1"
                value={searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)}
                type="search"
                placeholder="Search Product..."
                aria-label="Search"
              />
              <button className=" search-button" type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
                Search
              </button>
            </form>
          </div>



          {/* Login/Sign Up Button */}
          {/* <button className="btn btn ms-5 sm-3" style={ {backgroundColor: "#BD0E20;", color: "black"}} onClick={handleLoginClick}>
            {isLoggedIn ? "Login" : "Sign Up"} login
          </button> */}

          <a href="/signup" className="signup-btn" >SignUp</a>
          <a href="/login" className="login-btn">Login</a>


          {/* <div>
        {isLoggedIn ? (
          <button className="signup-btn" onClick={handleLogoutClick}>Logout</button>
        ) : (
          <button className="login-btn" onClick={handleLoginClick}>Login SignUp</button>
        )}
        </div> */}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
