import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // adjust this value to change the frequency of image updates

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ bottom: '10px', right: '10px', width: '300px', height: '200px', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.3)' }}>
      <div
        style={{
          display: 'flex',
          width: `${images.length * 300}px`,
          transition: 'transform 1s ease-in-out', // adjust this value to change the duration and easing of the animation
          transform: `translateX(${-currentImageIndex * 300}px)`,
        }}
      >
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt="Image"
            style={{ width: '300px', height: '200px', objectFit: 'cover', overflow: 'hidden'}}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;