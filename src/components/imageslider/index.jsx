import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./styles.css";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const createCustomArray = (length, elementGenerator = (i) => i + 1) => {
    return Array.from({ length }, (_, i) => elementGenerator(i));
  };

  const limitArrayLength = (arr = [], maxLength = 20) => {
    return arr.slice(0, arr.length < maxLength ? arr.length : maxLength);
  };

  const selectedImages = limitArrayLength(images) ?? []

  return (
    <div className="position-relative imageslider-container w-100">
      <img
        className="d-block w-100 imageslider-image"
        src={selectedImages[index]}
        alt={`Slide ${index}`}
      />
      <div
        className="position-absolute imageslider-controls"
        style={{ bottom: 5, transform: 'translate(-50%, -50%)', left: '50%' }}
      >
        <i
          className="fas fa-chevron-circle-left fa-sm"
          onClick={() => setIndex(index === 0 ? selectedImages.length - 1 : index - 1)}
        ></i>
        <div className="imagecustom-pagination">
          {limitArrayLength(createCustomArray(selectedImages.length)).map((_, i) => (
            <span key={i} className={`imagedot ${i === index ? "active" : ""}`} />
          ))}
        </div>
        <i
          className="fas fa-chevron-circle-right fa-sm"
          onClick={() => setIndex(index === selectedImages.length - 1 ? 0 : index + 1)}
        ></i>
      </div>
    </div>
  );
};

export default ImageSlider;
