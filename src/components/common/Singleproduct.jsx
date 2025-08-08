import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";

const Singleproduct = (proimg ,proName ,proacc,proprice,prodis,prorating) => {
  return (
    <>
    
    <div className='w-[309px] h-[448px]'>
     <div className='w-full h-[348px] bg-amber-200 rounded-[16px]'>
        <img src={proimg} alt="" />
     </div>
     <div className="productext">
        <div className='flex justify-between mt-[20px]'>
        <h2 className='text-[18px] text-secound font-semibold  font-poppins'>{proName}</h2>
        <h2 className='text-[18px] text-secound font-semibold  font-poppins'>{proprice}</h2>
     </div>
     <div className='flex gap-[20px] justify-between '>
        <h2 className='text-[18px] text-primary font-semibold  font-poppins italic'>{proacc}</h2>
        <h2 className='text-[18px] text-primary font-semibold  font-poppins line-through italic'>{prodis}</h2>
     </div>
     </div>
     <div className='flex gap-2 items-center mt-4 '>
      
      <TiStarFullOutline className='text-[#FBBF24] text-[20px]'/>
        {prorating}

     </div>
    </div>
    
    
    </>
  )
}

export default Singleproduct