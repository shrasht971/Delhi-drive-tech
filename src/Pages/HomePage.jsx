import React from "react";
import Navbarimg from "../assets/image/car2.jpg";
import CarCategories from "../Component/CarCategories";
import LeftSideNav from "../Component/LeftSideNav";
import Keyword from "../Component/Keyword";

const HomePage = () => {
  return (
    <>
      <div className="bg-black">
        <div className="flex flex-col lg:flex-row">
          <LeftSideNav />
          <div
            style={{ backgroundImage: `url(${Navbarimg})` }}
            className="bg-cover bg-center h-[50vh] lg:h-[80vh] w-full lg:w-3/4"
          ></div>
        </div>
        <CarCategories />
        <Keyword />
      </div>
    </>
  );
};

export default HomePage;
