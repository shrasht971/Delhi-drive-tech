import React from 'react'
import CarWashing from '../assets/image/car-wash.jpg'
import RentalCar from '../assets/image/Rental2.jpg'

function CarCategories() {
  const categories =[
    {name: 'Cleaning', status: 'available', img: CarWashing},
    {name: 'Rental Car', status: 'available', img: RentalCar},
    {name: 'Hire', status: 'coming soon'},
    {name: 'Sell', status: 'coming soon'},
    {name: 'Buy', status: 'coming soon'},
    {name: 'Travelling', status: 'coming soon'}
  ];
  return (
    <div class='container mx-auto p-6'>
      <p class='text-white  text-sm p mt-10 mx-28 font-extrabold'>Car Services</p>
      <div class='h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 shadow-md shadow-slate-500/50 border-lg m-2'>
      {categories.map((category, index) =>(
        <div 
        key={index}
        class={`h-64 mb-1 shadow-md shadow-slate-500/50 border-lg  rounded-lg ${
         category.status === 'coming soon' ? 'bg-gray-300' : 'bg-transparent'
        }`}
        >
      
          <h2 class='text-xl font-bold text-black'>{category.name}</h2>
          {category.status === 'coming soon' && (
            <p class='text-red-600 font-semibold mt-4'>Coming Soon</p>
          )}
          <img 
              src={category.img} 
              alt={category.name} 
              className="h-64 w-full object-cover rounded-md -mt-7"
            />
        </div>
        
      ))}
      </div>
    </div>
  )
}

export default CarCategories
