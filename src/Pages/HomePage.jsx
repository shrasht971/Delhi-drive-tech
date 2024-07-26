import React from "react";
import Navbarimg from "../assets/image/car2.jpg"
import CarCategories from "../Component/CarCategories";
import LeftSideNav from "../Component/LeftSideNav";
import Keyword from "../Component/Keyword";

const HomePage = () =>{
    return(
<>
<div class=" bg-black  top-0 -mt-16  ">
<div class='flex'>
{/* <div class='h-64  shadow-md shadow-slate-500/50 border-lg p-4 rounded-lg bg-transparent mt-16'></div> */}
<LeftSideNav/>
 <div style={{ backgroundImage: `url(${Navbarimg})`, }}  class=' bg-cover bg-center xs:h-[110vh] sm:h-[110vh] ml-[1.5vw] object-contain lg:h-[80vh] w-full sm:w-3/4 md:w-3/5 lg:w-7/10 '> 
</div>
</div>
 <CarCategories />
 <Keyword/>
</div>
</>
    );
}

export default HomePage;