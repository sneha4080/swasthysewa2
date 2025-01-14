import React from "react";
import "./Footer.css";
import { Facebook, Instagram, YouTube, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo and Social Icons */}
        <div className="footer-left">
          <img src="logo.png" alt="Company Logo" className="footer-logo" />
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="social-icon" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <YouTube className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedIn className="social-icon" />
            </a>
          </div>
        </div>

        {/* Right Section: Contact Information */}
        <div className="footer-right">
          <h4>Address</h4>
          <p>2nd Floor , Chandanivas, Near Hariharanand Ashram,.</p>
          <p>Elisbridge, Ahmedabad-380006.</p>
          <p>Call us at: <strong> 99746-91145</strong></p>
          <p>Email: <a href="mailto:swasthysewa@.com">swasthysewa@gmail.com</a></p>
        </div>
      
        <br></br>
          <h6>Returns</h6>
          <br></br>
          <h6>Contact Us</h6>
          <br></br>
          <h6>Privacy-policy</h6>
          <br></br>
          <h6>Terms of Service</h6>

        

      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()}  Shri Gujarat Mahila Lok Swasthya Sewa Sahakari Mandali Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
