import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-[url('/images/summer.png')] bg-cover bg-center py-20 w-full">
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
  <div className="relative container mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
      Summer Sale Extravaganza!
    </h1>
    <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
      Up to 50% off on selected items. Limited time offer!
    </p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-xl shadow-lg">
      Shop Now
    </button>
  </div>
</section>

  );
};

export default HeroSection;
