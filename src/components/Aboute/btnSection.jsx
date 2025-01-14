import React from "react";
import React, { useState } from "react";
import Content from './click_afterbtnSec'; // Adjust the path if necessary

const BtnSection = () => {
  // Define the data you want to pass to Content
  const contentData = {
    name: "Cosmetics",
    description: "Our GMP certified manufacturing advances our commitment to excellence, and guarantees safe, effective, and high-quality production of nutraceuticals.",
    image: "path_to_image.jpg", // Replace with actual image path
    link: "#"
  };

  return (
    <div>
      <h5>Cosmetics</h5>
      <p>
        Our GMP certified manufacturing advances our commitment to excellence,
        and guarantees safe, effective, and high-quality production of nutraceuticals.
      </p>

      <div className="about-btn">
        <a className="btn-read more" href="#">Click here to read more</a>
      </div>

      {/* Pass the data as props to Content component */}
      <Content
        name={contentData.name}
        description={contentData.description}
        image={contentData.image}
        link={contentData.link}
      />
    </div>
  );
};

export default BtnSection;
