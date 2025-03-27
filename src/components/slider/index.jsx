import React from "react";
import "./styles.css";

const Slider = ({ image }) => {

  return (
    <div className="position-relative slider-container w-100">
      <img
        className="d-block w-100 slider-image"
        src={image}
        alt={`Slide ${image}`}
      />
    </div>
  );
};

export default Slider;
