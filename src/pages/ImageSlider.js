import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex+1) % (images.length));
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{bottom: '10px', right: '10px', width: '800px', height: '190px', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.3)', zIndex: '1' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: `${images.length * 300}px`,
          transition: 'transform 1s ease-in-out',
          transform: `translateX(${-currentImageIndex * 310}px)`,
          marginLeft: '50px'
        }}
      >
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Image"
            style={{ width: '300px', height: '190px', objectFit: 'cover', filter: (index - currentImageIndex) == 1 ? 'none' : 'blur(3px)',marginRight: '50px', transition: 'filter 0.5s ease-out'}}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
