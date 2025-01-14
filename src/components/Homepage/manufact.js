
import React from "react";
import "./Manufact.css"; // Ensure this CSS file is correctly linked

const Manufact = () => {
  return (
    <div className="manufact-container">
      <h2 className="manufact-title">Manufacturing Details</h2>
      <div className="manufact-content">
        <p>
          Lok Swasthya SEWA Cooperative, part of the 50-year-old SEWA movement founded by Elaben Bhatt, 
          is a health initiative under the Self-Employed Women’s Association (SEWA). SEWA, a national 
          trade union of 2.5 million informal women workers across 18 Indian states, aims to make health 
          and social security affordable and accessible for informal women workers.
        </p>
      </div>
      <div className="manufact-image">
        <img
          src="/manufact.png" // Ensure this image is in the public folder
          alt="Manufacturing Unit"
        />
      </div>
    </div>
  );
};

export default Manufact;
