import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function SliderGameImages({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = images.length - 1;

  function setSlide(button) {
    switch (button) {
      case "right":
        if (currentSlide >= maxSlide) {
          setCurrentSlide(0);
        } else {
          setCurrentSlide((state) => state + 1);
        }
        break;
      case "left":
        if (currentSlide <= 0) {
          setCurrentSlide(maxSlide);
        } else {
          setCurrentSlide((state) => state - 1);
        }

        break;
    }
  }

  useEffect(() => {
    document
      .querySelectorAll(".slide")
      .forEach((slide) => slide.classList.add("opacity-50"));

    document
      .querySelector(`#slide-${currentSlide}`)
      .classList.remove("opacity-50");
  });

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  return (
    <div className="relative w-3/4 max-w-md mx-auto mt-20">
      <h2 className="text-gray-50 text-center mb-6">Screenshots</h2>
      <div id="slider" className="flex flex-row flex-nowrap overflow-hidden ">
        {images.map((el, i) => (
          <img
            key={i}
            src={el.image}
            className="w-full transition-all duration-700"
            style={{ transform: `translateX(-${100 * currentSlide}%)` }}
          />
        ))}
      </div>
      <button
        id="slide-btn-left"
        className="absolute text-gray-50 text-2xl top-1/2 -left-10"
        onClick={() => setSlide("left")}
      >
        <FontAwesomeIcon icon={faAngleLeft} />{" "}
      </button>
      <button
        id="slide-btn-right"
        className="absolute text-gray-50 text-2xl top-1/2 -right-10"
        onClick={() => setSlide("right")}
      >
        <FontAwesomeIcon icon={faAngleRight} />{" "}
      </button>
      <ul className="flex flex-row flex-nowrap justify-center mt-5">
        {images.map((el, i) => (
          <li
            key={el.id}
            id={`slide-${i}`}
            className="slide w-2 h-2 rounded-full mx-2 bg-gray-50 opacity-50"
            onClick={() => setCurrentSlide(i)}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default SliderGameImages;
