import React from 'react';

const categories = [
  'Beauty & Personal Care',
  'Electronics',
  'Books & Stationery',
  'Art & Handicraft',
  'Gifts & Toys'
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ElegantMart</h3>
            <p className="text-gray-400">Your one-stop shop for all things elegant and practical.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">1234 Elegant Street, Stylish City, 56789</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@elegantmart.com</p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2024 ElegantMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
