import React from 'react';
import keypoints from '../assets/image/Keypointsbg2.jpg'
import { motion } from 'framer-motion';

function LeftSideNav() {
  const textLines = [
    "Provides best self-drive car rental services in Delhi/NCR.",
    "Provides Door-step car washing services in West Delhi.",
    "Door-Step car detailing services - 3M Ceramic Coating, Glass Coating Services Available.",
    "Door-Step car rubbing, polishing, services available",
    "Hire professional skilled private driver.",
    "Hire professional instructors to learn driving.",
    "Selling and purchasing of used cars."
  ];

  const arrowIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 m-1">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );

  // Duplicate the textLines array to create a seamless loop
  const scrollingLines = [...textLines, ...textLines];

  const lineHeight = 48; // Approximate height of each line in pixels (line height + margin)
  const totalHeight = lineHeight * scrollingLines.length;

  return (
    <div>
      <div style={{backgroundImage: `url(${keypoints})`}} className="bg-cover bg-center backdrop:blur-md relative w-[32vw] h-96 mt-28 ml-8 border-solid border-4 border-x-white bg-zinc-900 bg-opacity-50 backdrop-blur-md overflow-hidden">
        <motion.div
          className="absolute w-full"
          initial={{ y: 0 }}
          animate={{ y: `-${totalHeight / 2}px` }} // Scroll only half the total height to loop back
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear"
          }}
        >
          {scrollingLines.map((line, index) => (
            <div
              key={index}
              className="w-full flex items-center text-lg font-bold text-slate-300 my-12"
            >
              <div className="w-6">
                {arrowIcon}
              </div>
              <span>{line}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <button className="ml-28 py-2 w-80 px-10 border-double border-4 m-2 border-x-neutral-600 text-white rounded hover:bg-gray-500 shadow-md text-xl transition">
        Explore More
      </button>
    </div>
  );
}

export default LeftSideNav;
