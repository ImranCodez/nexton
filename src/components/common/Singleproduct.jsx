import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import { BsCart4 } from "react-icons/bs";


const Singleproduct = ({proimg ,proName ,proacc,proprice,prodis,prorating}) => {
  return (
    <>
    
    <div className='w-[309px] h-[448px]'>
     <div className='w-full h-[348px] bg-white rounded-[16px] relative'>
      <div className=' group absolute top-6 right-7'>
         <span className='text-[#00000000] font-bold absolute mt-[-27px] group-hover:mt-[-60px] w-[60px] h-[40px] flex items-center justify-center rounded-sm group-hover:bg-primary group-hover:text-[aqua]'>Shop</span>
         <BsCart4 className='w-[30px] h-[30px] hover:bg-primary duration-[.4s] font-medium text-[30px]   hover:text-[aqua] rounded-2xl hover:scale-[1.1]' />
      </div>
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