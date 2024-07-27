import React from 'react';
import Keywordbg from '../assets/image/Keywordbg2.jpg';
import { GoDotFill } from "react-icons/go";

const keyPoints = [
  "Provides best door step car washing and detailing services in Delhi/NCR Region.",
  "Provides Best Car Detailing Services in Delhi/NCR Region.", 
  "Provides Best Car Rental Services at very affordable prices in Delhi/NCR Region.",
  "Best Place To Sell And Purchase Used Cars. (Services Upcoming)."
];

function Keyword() {
  return (
    <section style={{ backgroundImage: `url(${Keywordbg})` }} className="relative bg-cover bg-center text-slate-100 ml-2 h-fit ">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 backdrop-blur-sm">
      <h1 className='text-sm m-4 font-bold p'>Key Points</h1>
        {keyPoints.map((point, index) => (
          
          <div key={index} className="flex items-center pb-4">
            <GoDotFill className="mr-2" />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Keyword;
