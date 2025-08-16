  import React, { useState } from 'react'
  import logo from '../assets/images/logo.png'
  import { CiSearch } from "react-icons/ci";
  import { RiUserLine } from "react-icons/ri";
  import { PiShoppingCartSimple } from "react-icons/pi";
  import {AddToCart} from './AddToCart';
import { Link } from 'react-router';
import { FaArrowDown } from "react-icons/fa";


const Navbar = () => {

  const [showcart,setshocart]=useState(true)
  
  const [showAccount,setShowAccount]=useState(true)


  const handlecloss=()=>{
    console.log('hello')
  }


  console.log(showcart)

  return (
    <>
    <nav id='Main_nav' className='py-[-27px] bg-[#f8f8f8a1] w-full h-[52px] hidden lg:block fixed top-0 left-0'>

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
{/* .......................add to cart er part.............. */}
    
    <div className={`top-[20%] duration-[.3s] w-full fixed ${showcart? 'right-[-2000px]' : 'right-0'}`}>
      <AddToCart/>
    </div>
                 
        {/* ................Longing and resistration part............ */}
    <div className={`flex items-center justify-center   top-[10%] right-3 ${showAccount? 'hidden' : 'visible w-full fixed h-screen bg-[#0000003d]'}`}>
       
       <div className='bg-[#0000]  w-[660px] h-[440px] flex items-center justify-between gap-[20px] rounded-4xl '>
                  
     <div className='w-[48%] h-[440px] bg-primary border-2 flex justify-center items-center flex-col hover:scale-[1.1] duration-[.4s] gap-6 rounded-4xl'>
              <h1 className='text-white text-4xl font-bold font-poppins'>Welcomne!</h1>
                <p className='text-[14px] text-white font-medium font-poppins'>Create an acoount if you are new here </p>

                    <Link className='w-full h-[50px]  border-white border-2  bg-secound text-white flex items-center justify-center rounded-2xl hover:bg-white hover:text-secound duration-[.4s]'  onClick={()=>setShowAccount(!showAccount)} to={'/Register'}>Sign Up</Link>

             </div>

           <div className='w-[48%] h-[440px] bg-primary border-2 flex items-center justify-center hover:scale-[1.1] duration-[.4s] flex-col gap-7 rounded-4xl'>
            <h1 className='text-white text-4xl font-bold font-poppins'>Welcome!</h1>
            <p className='w-[220px] text-white text-[14px]'>Login if already have a account.Unlock your New journey</p>
        
         <Link className='w-full h-[50px] bg-secound text-white flex items-center border-white border-2 justify-center rounded-2xl hover:bg-white hover:text-secound duration-[.4s]'  onClick={()=>setShowAccount(!showAccount)} to={'/Login'}>Login</Link>
                <div className='flex justify-between items-center gap-3'>
                  <span className='w-[100px] h-[3px] rounded-4xl bg-secound inline'></span> <h2 className='text-white'>OR</h2> <span className='w-[100px] inline h-[3px] rounded-3xl bg-secound'></span>
                </div>
           
           <div className="inputitems flex justify-center flex-col">
           <input placeholder='Loging with google' className='w-[250px] border-3  bg-white rounded-4xl h-[30px] text-[14px] text-secound pl-[20px] outline-none mb-[10px]' type="text" />
            <input placeholder='Loging with Facebook' className='w-[250px] border-3  bg-white rounded-4xl h-[30px] text-[14px] text-secound pl-[20px] outline-none mb-[10px]' type="text" />
            <input placeholder='Loging with github' className='w-[250px] border-3  bg-white rounded-4xl h-[30px] text-[14px] text-secound pl-[20px] outline-none mb-[10px]' type="text" />
           </div>

           </div>
          
      </div>
    </div>
    {/* <section onClick={handlecloss} className={`top-0 fixed z-50 w-full h-screen backdrop-blur-xs bg-[#00000000] `}>
    </section> */}
                           
    <AddToCart closeCart={handlecloss} />
    </>
  )
}

export default Navbar