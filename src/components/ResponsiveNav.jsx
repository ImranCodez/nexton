import React, { useState } from "react";
import reslogo from "../assets/images/reslogo.png";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import { PiShoppingCartSimple } from "react-icons/pi";
const ResponsiveNav = () => {

   const [shownav,setshowNav]=useState(false)
  console.log(shownav)


  return (

    
    <>
      <nav id="resonse-nav" className="w-full py-[20px] bg-[#fff]">
        <div className="container">
          <div className="nav-row  flex justify-between ">
            <div className="navlogo">
              <Link to={"/"} className="w-[24xp]">
                <img src={reslogo} alt="logo" />
              </Link>
            </div>
            <div className="searchbar w-[200px] h-[32px] bg-[#F8F8F8] rounded-[100px] flex items-center gap-[7px] pl-[24px]">
              <CiSearch className="text-[14px]" />
              <input
                className="w-full text-[14px] text-primary outline-none"
                placeholder="Search in products..."
                type="text"/>
            </div>

            <button onClick={()=>setshowNav(!shownav) } className="w-[18px] h-[20px] text-primary relative ">
              <span className={`w-full h-[3px] bg-primary absolute left-0 rounded-full ${shownav? 'rotate-45 top-[13px] ':'rotate-0deg'} duration-[.4s]  top-0 `}></span>
              <span className={`w-full h-[3px] bg-primary absolute  left-0 rounded-full duration-[.4s] ${shownav? 'hidden':'block top-1/2   transilate-y-[-50%] '} `}></span>
              <span className={`w-full h-[3px] bg-primary absolute   left-0 rounded-full ${shownav? 'rotate-[-45deg] top-[69%] ':'rotate-0 top-[100%]'} duration-[.4s]`}></span>
            </button>
                
                    <div className={` ${shownav? ' top-[-200px] opacity-100 ':' top-[200px] opacity-0  invisible'} left-[200px]  M-[10px] bg-primary absolute top-[100px] rounded-[10px] mt-[20px] w-[70%] h-[70%] text-[#fff] flex items-center justify-center flex-colm duration-[.4s]`}>
                       
                       
                           <div className="buttons absolute top-3 right-4 flex ">
                                  <button  className='text[24px] text-[#fff] font-poppins mr-[-7px] p-[10px] rounded-[10px] hover:bg-[#fff] hover:text-primary duration-[.4s]'><RiUserLine/></button>
                                  <button className='text[24px] text-[#fff] font-poppins  relative p-[10px] rounded-[10px] hover:bg-[#fff] hover:text-primary duration-[.4s]'><PiShoppingCartSimple/>
                                  <span className='text-[#fff] w-[20px] h-[20px] bg-[#0EA5E9] rounded-full text-[12px] flex items-center justify-center absolute left-[15px] top-[-6px] '>3</span>
                                  </button>
                                 </div>
           
                     
               <ul className="flex items-center justify-center flex-col gap-5 font-poppins  text-[16px] font-normal text-[#fff]" >
                  
               <li><Link className="hover:bg-[#fff]  py-2 px-5 hover:rounded-[10px] duration-[.4s]  hover:text-primary">Home</Link></li>
               
               <li className="mt-[10px] "><Link className="hover:bg-[#fff]  py-2 px-5 hover:rounded-[10px] duration-[.4s]  hover:text-primary">Shoping</Link></li>
               <li className="mt-[10px] "><Link className="hover:bg-[#fff]  py-2 px-5 hover:rounded-[10px] duration-[.4s]  hover:text-primary">About us</Link></li>
                </ul>
             
            </div>
               
      
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResponsiveNav;
