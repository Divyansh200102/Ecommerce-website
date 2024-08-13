import React from 'react';
import { ShoppingCart, User, Search, ChevronDown } from 'lucide-react';

const categories = [
  'Beauty & Personal Care',
  'Electronics',
  'Books & Stationery',
  'Art & Handicraft',
  'Gifts & Toys'
];

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <img src="src\assets\images\logo.png" alt="Brand Logo" className="h-10 w-10 rounded-2xl" />
            <div className="text-3xl font-bold font-display tracking-tight">ElegantMart</div>
          </div>
          
          {/* Navigation Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {categories.map((category, index) => (
                <li key={index} className="hover:text-blue-200 font-semibold transition-colors duration-200 cursor-pointer">{category}</li>
              ))}
            </ul>
          </nav>
          
          {/* Search, Cart, and Profile Icons */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-blue-700 text-white placeholder-blue-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search className="absolute right-3 top-2.5 text-blue-300" size={18} />
            </div>
            <ShoppingCart className="hover:text-blue-200 transition-colors duration-200 cursor-pointer" />
            <User className="hover:text-blue-200 transition-colors duration-200 cursor-pointer" />
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden mt-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center text-blue-100 hover:text-white"
          >
            <span className="mr-2">Categories</span>
            <ChevronDown size={20} className={`transform transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          {isMenuOpen && (
            <ul className="mt-2 space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="hover:text-blue-200 transition-colors duration-200">{category}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
