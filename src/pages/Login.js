// import React from "react";

// const Login = () => {
//   return (
//     <div className="container mt-4">
//       <h1>Login</h1>
//       <p>Access your account and manage your orders.</p>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");

  const handleMobileChange = (e) => setMobileNumber(e.target.value);
  const handleOtpChange = (e) => setOtp(e.target.value);

  const sendOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/send-otp", {
        mobileNumber,
      });
      console.log(response.data);
      setIsOtpSent(true); // OTP sent, now show OTP input
    } catch (err) {
      console.error(err);
      setError("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/verify-otp", {
        otp,
      });
      console.log(response.data);
      alert("OTP verified successfully");
    } catch (err) {
      console.error(err);
      setError("Invalid OTP");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {!isOtpSent ? (
        <div>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={handleMobileChange}
          />
          <button onClick={sendOtp}>Send OTP</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOtpChange}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default Login;
