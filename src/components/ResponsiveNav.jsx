import React, { useState } from "react";
import reslogo from "../assets/images/reslogo.png";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
const ResponsiveNav = () => {

   const [shownav,setshowNav]=useState(false)
  console.log(shownav)


  return (

    
    <>
      <nav id="resonse-nav" className="w-full py-[20px] bg-[#fff] lg:hidden">
        <div className="container">
          <div className="nav-row  flex justify-between ">
            <div className="navlogo">
              <Link to={"/"} className="w-[24xp]">
                <img src={reslogo} alt="logo" />
              </Link>
            </div>
            <div className="searchbar w-[200px] h-[32px] bg-[#F8F8F8] rounded-[100px] flex items-center gap-[10px] pl-[24px]">
              <CiSearch className="text-xl" />
              <input
                className="w-full text-[14px] text-primary outline-none"
                placeholder="Search in products..."
                type="text"
              />
            </div>

            <button onClick={()=>setshowNav(!shownav) } className="w-[22px] h-[20px] text-primary relative ">
              <span className={`w-full h-[3px] bg-primary absolute top-0  left-0 rounded-full ${shownav? 'rotted-[45deg] ':'rotted-[0deg]'} duration-[.4s]`}></span>
              <span className="w-full h-[3px] bg-primary absolute top-1/2  left-0 rounded-full duration-[.4s]"></span>
              <span className={`w-full h-[3px] bg-primary absolute top-[100%]  left-0 rounded-full ${shownav? 'rotted-[-45deg]':'rotted-[0deg]'} duration-[.4s]`}></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResponsiveNav;
