import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For React Router v6
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate(); // For navigation in React Router v6

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Clear the token from localStorage or sessionStorage
        localStorage.removeItem("authToken"); // or sessionStorage.removeItem("authToken");

        // Make an API call to the backend for logout (optional, if needed)
        await axios.post("http://localhost:3007/api/users/logout");

        localStorage.removeItem("authToken"); // Remove token from localStorage
        setIsLoggedIn(false); // Update state
        navigate("/signup"); 
        // Redirect to the signup page
        // navigate("/signup");
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    handleLogout();
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;
