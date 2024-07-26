import React from 'react';
import Keywordbg from '../assets/image/Keywordbg2.jpg';
import { GoDotFill } from "react-icons/go";

const points = ["Provides best door step car washing and detailing services in Delhi/NCR Region.",
  "Provides Best Car Detailing Services in Delhi/NCR Region.", 
  "Provides Best Car Rental Services at very affordable prices in Delhi/NCR Region.",
  "Best Place To Sell And Purchase Used Cars. (Services Upcoming)."
];

function Keyword()  {
  return (
    <section style={{ backgroundImage: `url(${Keywordbg})` }} className="relative bg-cover bg-center text-slate-100 m-4 h-fit p-6">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative z-10">
      {GoDotFill}
              </div>
              <span>{points}</span>
    </section>
  );
}

export default Keyword;

