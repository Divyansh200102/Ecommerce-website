import React from 'react';

const featuredProducts = [
  { name: 'Luxury Skincare Set', price: 99.99, category: 'Beauty & Personal Care', image: '/images/beauty-products.png'},
  { name: 'Wireless Earbuds', price: 129.99, category: 'Electronics', image: '/images/wireless-earbuds.png' },
  { name: 'Handcrafted Journal', price: 29.99, category: 'Books & Stationery', image: '/images/Journal.png' },
  { name: 'Artisan Ceramic Vase', price: 79.99, category: 'Art & Handicraft', image: 'images/Vase.png'},
];

const FeaturedProductsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
