import React, { useState, useEffect } from 'react';
import './slideStyle.css';

const TextSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-slider">
      <button onClick={prevSlide}>&#8249;</button>
      <div className="slide">
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].text}</p>
      </div>
      <button onClick={nextSlide}>&#8250;</button>
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;

