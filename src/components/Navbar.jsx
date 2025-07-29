import React, { useState } from 'react'
  import logo from '../assets/images/logo.png'
  import { CiSearch } from "react-icons/ci";
  import { RiUserLine } from "react-icons/ri";
  import { PiShoppingCartSimple } from "react-icons/pi";


const Navbar = () => {

  

  return (
    <>
    <nav id='Main_nav' className='py-[27px] bg-[#fff] w-full h-[52px] hidden lg:block'>

      <div className="container ">
        <div className="nav_row flex justify-between">
          <div className="logo w-[119px] h-[46px]">
            <img src={logo} alt="logo" />
          </div>
          <div className="searchbar w-[400px] h-[52px] bg-[#F8F8F8] rounded-[100px] flex items-center gap-[10px] pl-[24px]">
              <CiSearch className='text-xl' />
            <input className='w-full text-[14px] text-primary outline-none' placeholder='Search in products...' type="text" />
          
          </div>
           <div className="buttons">
            <button  className='text[24px] text-primary font-poppins mr-[10px]'><RiUserLine/></button>
            <button className='text[24px] text-primary font-poppins  relative'><PiShoppingCartSimple/>
            
            <span className='text-[#fff] w-[20px] h-[20px] bg-[#0EA5E9] rounded-full text-[12px] flex items-center justify-center absolute left-[8px] top-[-12px] '>3</span>
            </button>
           </div>
        </div>
      </div>

    </nav>
    
    
    </>
  )
}

export default Navbar