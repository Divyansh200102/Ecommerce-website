import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import FeaturedProductsSection from './components/FeaturedProductsSection';
import NearbyStoresSection from './components/NearbyStoresSection';
import Footer from './components/Footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <NearbyStoresSection />
      <Footer />
    </div>
  );
};

export default App;
