
import React from "react";
// import styled from "styled-components";
import "./Contact.css"
// import "./Footer.css";









const Contact = () => {
  return (
    <>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        //  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14687.916522405383!2d72.55577780761045!3d23.024538466755406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f7868fbdfb%3A0x8140bcb2e0cd79ef!2sEllisbridge%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1737288813146!5m2!1sen!2sin"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.043721938238!2d72.56840628315005!3d23.022166825475814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e35da82901%3A0x3ec497969c4fa01e!2sLok%20Swasthya%20SEWA%20Trust!5e0!3m2!1sen!2sin!4v1737289038083!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xqaavneb"
            method="POST"
            className="contact-inputs"
          >
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />

          <textarea
            name="Message"
            cols="5"
            rows="5"
            required
            autoComplete="off"
            placeholder="Enter your message"
          ></textarea>

          <input type="submit" value="Send" />
        </form>
      </div>
    </div >
      </>
  );
};

export default Contact;
