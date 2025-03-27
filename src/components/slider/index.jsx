import React from 'react'
import { Carousel } from 'react-bootstrap';

const ImageSlider = () => (
  <Carousel indicators={false} controls={true}>
    <Carousel.Item>
      <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: 200 }}>
        <span className="text-muted">Image 1</span>
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: 200 }}>
        <span className="text-muted">Image 2</span>
      </div>
    </Carousel.Item>
  </Carousel>
);

export default ImageSlider