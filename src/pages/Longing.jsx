import React from 'react'
import { Link } from 'react-router'

const Longing = () => {
  return (
    <>
   <form action="">
     <section id='Resis' className='w-[440px] h-[550px] bg-[#Fff] top-[40%] left-[40%]  absolute rounded-[10px] border border-[#00000049] '>
        <h1 className='text-[38px] text-secound font-semibold font-poppins mb-[60px] px-[144px] '>login</h1>
        <label htmlFor="" className='text-secound font-semibold text-[20px] pl-[12px]'>email</label>
        <br />
        <input placeholder='Enter Your Email' className='w-full pl-[10px] ronded-[12px] h-[43px] outline-0 border rounded-sm border-[#00000015] ' type="text" />
          <br />
          <br />
          <label htmlFor=""className='text-secound font-semibold text-[20px] pl-[12px]'>password</label>
        <br />
        
        <input placeholder='Enter your password' className='w-full pl-[10px] ronded-[12px] h-[43px] outline-0 border rounded-sm border-[#0000001c]  ' type="text" />
          
          
            <sub className='bg-secound w-full h-[52px] rounded-3xl text-white text-[18px] mt-[24px] mb-6 font-medium font-poppins flex items-center justify-center hover:scale-[1.03] duration-[.4s] '>continuee

            </sub>

             <label className='text-[14px] font-medium text-[#4B5563]  px-[190px]' htmlFor="">OR</label>
             <Link className='flex justify-center bottom-0 text-[#0EA5E9]'><h4 className='text-[#4B5563]'> if your are a New user </h4> create an account </Link>

    </section>
     </form>


    </>
  )
}

export default Longing