import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti'
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Single_seller = ({bestSellimg,bestSellNme,bestPrice,discount,Rating,Accessories }) => {
  return (
    <>
       <div className='w-[309px] h-[444px] bg-[#8180805d]'>
        <div className='w-full h-[348px] rounded-sm relative'>
                 <div className="group  top-0 abso right-0">
                 <div className='text-white font-bold text-base w-[90px] bg-black h-[40px] rounded-[5px] absolute 
                 top-0 right-0 mt-[-27px] group-hover:mt-[-20px]'>Shop</div>
                      <HiOutlineShoppingBag/>
                 </div>
            <img src={bestSellimg} alt="Best_sell" />
        </div>
         <div className='flex justify-between items-center mt-[20px]'>
            <h2 className='text-[18px] text-secound font-semibold font-poppins productNme'>{bestSellNme}</h2>
            <h2 className='text-[18px] text-secound font-semibold font-poppins'>{bestPrice}</h2>
         </div>
            <div className='flex justify-between items-center'>
            <h2 className='text-[14px] text-[#4B5563] font-normal  font-poppins'>{Accessories}</h2>
            <h2 className='text-[14px] text-[#4B5563] font-normal font-poppins'>{discount}</h2>
         </div>
         <div className='flex gap-1 '>
            <TiStarFullOutline className='text-[#FBBF24] text-[20px]'/>
            <p className='text-[#4B5563] text-[14px] font-normal font-poppins '>{Rating}</p>
         </div>
       </div>
        
    
    
    </>
  )
}

export default Single_seller