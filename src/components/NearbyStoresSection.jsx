import React from 'react';
import { MapPin } from 'lucide-react';

const nearbyStores = [
  { name: 'BeautyHub', distance: '0.5 miles', category: 'Beauty & Personal Care' },
  { name: 'TechNest', distance: '1.2 miles', category: 'Electronics' },
  { name: 'PageTurner Books', distance: '1.8 miles', category: 'Books & Stationery' },
];

const NearbyStoresSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Nearby Stores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {nearbyStores.map((store, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
              <MapPin className="text-blue-600 mb-4 mx-auto" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">{store.name}</h3>
              <p className="text-gray-600">{store.category}</p>
              <p className="text-blue-600 mt-2">{store.distance}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyStoresSection;
