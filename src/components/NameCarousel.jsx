import React, { useEffect, useRef } from "react";

const NameCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      const animation = carousel.animate(
        [
          { transform: "translateX(100%)" },
          { transform: "translateX(-100%)" },
        ],
        {
          duration: 10000, // Adjust speed (10 seconds for a full loop)
          iterations: Infinity, // Infinite looping
        }
      );

      return () => animation.cancel();
    }
  }, []);

  const names = [
    "SHRI", "GURU", "NANAK", "DEV", "SAHIB", "JI", "SAMAJ", "SEWA", "SANSTHA",
  ];

  return (
    <div className="relative overflow-hidden w-full h-12 bg-gray-200">
      <div
        ref={carouselRef}
        className="flex space-x-8 absolute w-max h-full items-center"
        style={{ whiteSpace: "nowrap" }}
      >
        {names.map((name, index) => (
          <div
            key={`carousel-item-${index}`}
            className="text-lg font-semibold text-gray-800"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NameCarousel;
