import React from 'react';
import { FaHeart, FaLaptop, FaBook, FaPaintBrush, FaGift } from 'react-icons/fa';

const categories = [
  { name: 'Beauty & Personal Care', icon: <FaHeart /> },
  { name: 'Electronics', icon: <FaLaptop /> },
  { name: 'Books & Stationery', icon: <FaBook /> },
  { name: 'Art & Handicraft', icon: <FaPaintBrush /> },
  { name: 'Gifts & Toys', icon: <FaGift /> }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <div className="text-4xl mb-4 text-blue-600 flex justify-center">
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-800 ">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
