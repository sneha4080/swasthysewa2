import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobilenumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    city: '',
    pincode: '',
    gender: '',
    address: ''
  });


  const [error, setError] = useState({});
  const navigate = useNavigate();

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate the form fields
  const validateForm = () => {
    const errors = {};
    // if (!formData.firstname?.trim()) errors.firstname = "First Name is required.";
    // if (!formData.lastname?.trim()) errors.lastname = "Last Name is required.";
    if (!formData.mobilenumber?.match(/^\d{10}$/))
      errors.mobilenumber = "Mobile Number must be 10 digits.";
    if (!formData.email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errors.email = "Invalid email address.";
    if (formData.password.length < 6)
      errors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match.";
    if (!formData.city?.trim()) errors.city = "City is required.";
    if (!formData.pincode?.match(/^\d{6}$/))
      errors.pincode = "Pincode must be 6 digits.";
    if (!formData.gender) errors.gender = "Gender is required.";
    if (!formData.address?.trim()) errors.address = "Address is required.";
    return errors;
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    console.log("Validation Errors:", errors); // Check what errors are returned
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return; // Stops the function execution if errors exist
    }
    // Proceed with form submission
    console.log("Form is valid, submitting...");
    // Your form submission logic here


    setError({}); // Clear previous errors
    try {
      const response = await axios.post("http://localhost:3007/api/users/signup", formData);
      console.log("Signup successful:", response.data);
      navigate("/"); // Redirect to login page
    } catch (err) {
      if (err.response) {
        console.error("Signup failed:", err.response.data);
        setError({ api: err.response.data.message || "Signup failed. Please try again later." });
      } else {
        console.error("Signup failed:", err.message);
        setError({ api: "Signup failed. Please try again later." });
        console.error("Full Error:", err.response?.data || err.message);

      }
    } 
    // console.log("Form Data before sending to backend:", formData);


  };

  return (
    <div className="container mt-5 col-5 mb-3">
      <h2 className="text-center mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          {/* {error.firstName && <div className="text-danger">{error.firstName}</div>} */}
          {error.firstname && <div className="text-danger">{error.firstname}</div>}
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          {error.lastName && <div className="text-danger">{error.lastName}</div>}
        </div>

        {/* Mobile Number */}
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
          <input
            type="tel"
            className="form-control"
            id="mobilenumber"
            name="mobilenumber"
            value={formData.mobilenumber}
            onChange={handleChange}
          />
          {error.mobileNumber && <div className="text-danger">{error.mobilenumber}</div>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <div className="text-danger">{error.email}</div>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {error.password && <div className="text-danger">{error.password}</div>}
        </div>

        {/* Confirm Password */}
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {error.confirmPassword && <div className="text-danger">{error.confirmPassword}</div>}
        </div>

        {/* City */}
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {error.city && <div className="text-danger">{error.city}</div>}
        </div>

        {/* Pincode */}
        <div className="mb-3">
          <label htmlFor="pincode" className="form-label">Pincode</label>
          <input
            type="text"
            className="form-control"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
          {error.pincode && <div className="text-danger">{error.pincode}</div>}
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="male">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="female">Female</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="other">Other</label>
            </div>
          </div>
          {error.gender && <div className="text-danger">{error.gender}</div>}
        </div>

        {/* Address */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
          {error.address && <div className="text-danger">{error.address}</div>}
        </div>

        {/* Signup Button */}
        <button type="submit" className="btn btn-dark w-100 mb-3">Sign Up</button>
        <div className="text-center mb-3">
          <span>Already have an account? </span>
          <button
            type="button"
            className="btn btn-secondary w-100"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
        {/* API Error */}
        {error.api && <div className="text-danger text-center mt-3">{error.api}</div>}
      </form>
    </div>
  );
};

export default Signup;
