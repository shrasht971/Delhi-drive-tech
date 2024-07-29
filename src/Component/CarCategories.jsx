import React from 'react';
import CarWashing from '../assets/image/car-wash.jpg';
import RentalCar from '../assets/image/Rental2.jpg';
import HireCar from '../assets/image/hire.jpg';
import BuyCar from '../assets/image/buyCar.jpg';
import Travelling from '../assets/image/travelling.jpg';

function CarCategories() {
  const categories = [
    { name: 'Cleaning', status: 'available', img: CarWashing },
    { name: 'Rental Car', status: 'available', img: RentalCar },
    { name: 'Hire', status: 'coming soon', img: HireCar },
    { name: 'Sell', status: 'coming soon', img: HireCar },
    { name: 'Buy', status: 'coming soon', img: BuyCar },
    { name: 'Travelling', status: 'coming soon', img: Travelling },
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <p className="text-white text-sm mt-10 text-center items-center sm:mx-28 p font-extrabold">Our Services</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 shadow-md shadow-slate-500/50 border-lg m-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`relative h-64 mb-4 shadow-md shadow-slate-500/50 border-lg rounded-lg ${
              category.status === 'coming soon' ? 'bg-gray-300' : 'bg-transparent'
            }`}
          >
            <img
              src={category.img}
              alt={category.name}
              className="h-64 w-full object-cover rounded-md"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
              <h2 className="text-xl font-bold text-black bg-white bg-opacity-70 px-4 py-2 rounded mb-2">
                {category.name}
              </h2>
              {category.status === 'coming soon' && (
                <p className="text-red-600 font-semibold bg-white bg-opacity-70 px-4 py-2 rounded">
                  Coming Soon
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarCategories;
