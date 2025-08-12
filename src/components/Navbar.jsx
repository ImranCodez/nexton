  import React, { useState } from 'react'
  import logo from '../assets/images/logo.png'
  import { CiSearch } from "react-icons/ci";
  import { RiUserLine } from "react-icons/ri";
  import { PiShoppingCartSimple } from "react-icons/pi";
  import Cart from './cart';
import { Link } from 'react-router';
import { FaArrowDown } from "react-icons/fa";


const Navbar = () => {

  const [showcart,setshocart]=useState(true)
  
  const [showAccount,setShowAccount]=useState(true)


  console.log(showcart)

  return (
    <>
    <nav id='Main_nav' className='py-[-27px] bg-[#F8F8F8] w-full h-[52px] hidden lg:block'>

      <div className="container ">
        <div className="nav_row  flex justify-between items-center">
          <div className="logo w-[119px] h-[46px]">
            <img src={logo} alt="logo" />
          </div>
          <div className="searchbar w-[400px] h-[52px] bg-[#F8F8F8] rounded-[100px] flex items-center gap-[10px] pl-[24px]">
              <CiSearch className='text-xl' />
            <input className='w-full text-[14px] text-primary outline-none' placeholder='Search in products...' type="text" />
          </div>
           <div className="buttons">
            <button onClick={()=>setShowAccount(!showAccount)}  className=' hover:text-white hover:bg-primary hover:scale-[1.1] duration-[.4s] text[24px] p-3 rounded-full  align-middle text-primary font-poppins mr-[10px]'><RiUserLine/></button>

            <button onClick={()=>(setshocart(!showcart)) } className=' text[24px] text-primary font-poppins  relative'><PiShoppingCartSimple/>
            <span className='  text-[#fff] w-[20px] h-[20px] bg-[#0EA5E9] rounded-full text-[12px] flex items-center justify-center absolute left-[8px] top-[-12px] '>3</span>
            </button>
           </div>
        </div>
      </div>
          
    </nav>

    
    <div className={`top-[20%] duration-[.3s] w-full fixed ${showcart? 'right-[-2000px]' : 'right-0'}`}>
      <Cart />
    </div>

    <div className={`flex items-center justify-center absolute top-[10%] right-3 ${showAccount? 'hidden' : 'visible'}`}>
       
       <div className='bg-[#00000046]  border-1 border-black w-[600px] h-[700px] flex items-center justify-center flex-col gap-[20px] rounded-2xl '>
           <div className='bg-white w-[260px] h-[3px] inline-block mr-[40px] mt-[50px] absolute top-[18%]'></div>
            <div className='bg-white w-[260px] h-[3px] inline-block ml-[15px] absolute mt-[20px]  top-[18%]'></div>
        <div className='flex justify-center items-center flex-col gap-5'>
          <h1 className='text-white text-3xl font-semibold font-poppins  top-[20%] absolute italic w-[200px] h-[44px] rounded-sm flex items-center justify-center tracking-[20px]'>welcome</h1>
        
        </div>

         <Link className='w-full h-[50px] bg-secound text-white flex items-center justify-center rounded-2xl hover:bg-white hover:text-secound duration-[.4s]'  onClick={()=>setShowAccount(!showAccount)} to={'/Login'}>Login</Link>
        <Link className='w-full h-[50px]  bg-secound text-white flex items-center justify-center rounded-2xl hover:bg-white hover:text-secound duration-[.4s]'  onClick={()=>setShowAccount(!showAccount)} to={'/Register'}>Registration</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar