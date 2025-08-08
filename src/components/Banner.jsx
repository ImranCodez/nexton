import React from 'react'
import Bannerbg from '../assets/images/Bannerbg.png'
import { Link } from 'react-router'
import { CiSearch } from "react-icons/ci";
const Banner = () => {
  return (
    <>
     <section id='Banner' style={{background:`url(${Bannerbg})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}} className='pt-[163px] pb-[199px] lg:[148px]'>
         <div className="container">
        <div className="banner_text">
          <h2 className='text-[#4B5563] text-[20px] font-medium font-poppins'>Starting from: $49.99</h2>
          <h1 className='text-[#111827] font-poppins text-[30px] font-semibold leading-[72px] w-full my-6 mt-2 mb-10 lg:text-[63px] lg:w-[632px]'>Exclusive collectionfor everyone</h1>
          <Link className='py-3 px-6 flex mt-[24px]  mb-[168px] lg:px-[36px]  items-center justify-center gap-2 rounded-[100px] bg-[#111827] text-[#fff] font-poppins text-[14px]  lg:text-[16px]  font-medium ruonded-[100px] w-fit hover:scale-[1.1] duration-[.4s]' to={'/'}>Explore now <CiSearch className='text-xl' /> </Link>            
        </div>
      </div>
     </section>
    
    
    </>
  )
}

export default Banner