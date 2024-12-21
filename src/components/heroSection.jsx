import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      <img 
        src="src/assets/images/hero.jpg" 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black opacity-10">
      <div className="flex items-center justify-center h-full text-center text-white px-6 sm:px-12">
        <div className="max-w-4xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          SHRI GURU NANAK DEV SAHIB JI SAMAJ SEWA SANSTHA
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Your journey to greatness starts here
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
