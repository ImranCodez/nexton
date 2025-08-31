import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoBagHandleOutline } from 'react-icons/io5';


const Single_seller = ({bestSellimg,bestSellNme,bestPrice,discount,Rating,Accessories,SellerClik }) => {
  return (
    <>
       <div onClick={SellerClik} className='w-[309px] h-[444px] bg-[#8180805d]'>
        <div className='w-full h-[348px] rounded-sm relative'>
                 <div className='absolute top-[20px] right-[20px]  group duration-[.3s] text-2xl flex flex-col items-center'>
                      <div className='mt-[-27px] absolute top-0 right-0 duration-[.3s] w-[90px] h-[40px] bg-[#000] text-[#fff] rounded-[5px] invisible group-hover:visible flex justify-center items-center text-base group-hover:mt-[-50px]'>shop</div>
                      <IoBagHandleOutline className='   text-[18px]   rounded-[4px]  group-hover:bg-primary group-hover:text-[#fff]' />
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