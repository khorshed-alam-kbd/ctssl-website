import React, { useState, useEffect } from "react";
import img1 from "../Assets/photos/banner/banner1.jpg";
import img2 from "../Assets/photos/banner/banner2.jpg";
import img3 from "../Assets/photos/banner/banner3.jpg";
import img4 from "../Assets/photos/banner/banner4.jpg";
import img5 from "../Assets/photos/banner/banner5.jpg";

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [img1, img2, img3];
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 10000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px]">
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={slide}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button
          onClick={prevSlide}
          className="btn btn-circle bg-black bg-opacity-50 text-white"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-circle bg-black bg-opacity-50 text-white"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
