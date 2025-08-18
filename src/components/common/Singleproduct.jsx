import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Singleproduct = ({proimg ,proName ,proacc,proprice,prodis,prorating}) => {
  return (
    <>
    
    <div className='w-[309px] h-[448px] relative'>
     <div className='absolute top-[20px] right-[20px]  group duration-[.3s] text-2xl flex flex-col items-center'>
      <div className='mt-[-27px] absolute top-0 right-0 duration-[.3s] w-[90px] h-[40px] bg-[#000] text-[#fff] rounded-[5px] invisible group-hover:visible flex justify-center items-center text-base group-hover:mt-[-50px]'>shop</div>
      <HiOutlineShoppingBag className='  w-[33px]  text-[10px] h-[28px]  rounded-[4px] bg-amber-700 group-hover:bg-primary group-hover:text-[#fff]' />
     </div>
     <div className='w-full h-[348px] bg-white rounded-[16px] relative z-[-10]'>
        <img src={proimg} alt="product iamge" />
     </div>
     <div className="productext">
        <div className='flex justify-between mt-[20px]'>
        <h2 className='text-[18px] text-secound font-semibold  font-poppins'>{proName}</h2>
        <h2 className='text-[18px] text-secound font-semibold  font-poppins'>{proprice}$</h2>
     </div>
     <div className='flex gap-[20px] justify-between '>
        <h2 className='text-[18px] text-primary font-semibold  font-poppins italic'>{proacc}</h2>
        <h2 className='text-[18px] text-primary font-semibold  font-poppins line-through italic'>{prodis}</h2>
     </div>
     </div>
     <div className='flex gap-2 items-center mt-4 '>
      
      <TiStarFullOutline className='text-[#FBBF24] text-[20px]'/>
        4.(98) {prorating}

     </div>
    </div>
    
    
    </>
  )
}

export default Singleproduct