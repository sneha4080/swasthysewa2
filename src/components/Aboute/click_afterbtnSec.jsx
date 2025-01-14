import React from "react";
import "./click_afterbtnSec.css"; // Make sure this path is correct

const Store = ({ name, description, image, link }) => {
  return (
    <div className="col-md-4 card-style">
      <div className="card">
        <div className="card-content">
          <img src={image} className="card-img-left" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <a href={link} className="btn btn-primary">
              Visit Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
