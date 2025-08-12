import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti'
import { BsCart4 } from "react-icons/bs";

const Single_seller = ({bestSellimg,bestSellNme,bestPrice,discount,Rating,Accessories }) => {
  return (
    <>
       <div className='w-[309px] h-[444px] border '>
        <div className='w-full h-[348px] rounded-sm relative'>
                 <div className=" absolute top-6 right-7">
                 <span className='text-black font-bold absolute mt-[-27px] hover:mt-[-20px]'>Shop</span>
                          <BsCart4 className='w-[30px] h-[30px] hover:bg-primary duration-[.4s] font-medium text-[30px]  hover:text-[aqua] rounded-2xl hover:scale-[1.1]' />
                 </div>
            <img src={bestSellimg} alt="Best_sell" />
        </div>
         <div className='flex justify-between items-center mt-[20px]'>
            <h2 className='text-[18px] text-secound font-semibold font-poppins'>{bestSellNme}</h2>
            <h2 className='text-[18px] text-secound font-semibold font-poppins'>{bestPrice}</h2>
         </div>
            <div className='flex justify-between items-center'>
            <h2 className='text-[14px] text-[#4B5563] font-normal  font-poppins'>{Accessories}</h2>
            <h2 className='text-[14px] text-[#4B5563] font-normal font-poppins'>{discount}</h2>
         </div>
         <div className='flex gap-1 mt-[15px]'>
            <TiStarFullOutline className='text-[#FBBF24] text-[20px]'/>
            <p className='text-[#4B5563] text-[14px] font-normal font-poppins '>{Rating}</p>
         </div>
       </div>
        
    
    
    </>
  )
}

export default Single_seller