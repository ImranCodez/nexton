import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti'

const Single_seller = () => {
  return (
    <>
       <div className='w-[352px] h-[444px] border border-amber-100 rounded-sm'>
        <div className='w-full h-[348px] bg-amber-400 rounded-sm'>
            <img src="fefdefef" alt="" />
        </div>
         <div className='flex justify-between items-center mt-[20px]'>
            <h2 className='text-[18px] text-secound font-semibold font-poppins'>Black Automatic Watch</h2>
            <h2 className='text-[18px] text-secound font-semibold font-poppins'>$169.99</h2>
         </div>
            <div className='flex justify-between items-center'>
            <h2 className='text-[14px] text-[#4B5563] font-normal  font-poppins'>Accessories</h2>
            <h2 className='text-[14px] text-[#4B5563] font-normal font-poppins'>$199.99</h2>
         </div>
         <div className='flex gap-1 mt-[15px]'>
            <TiStarFullOutline className='text-[#FBBF24] text-[20px]'/>
            <p className='text-[#4B5563] text-[14px] font-normal font-poppins '>4.9 (98)</p>
         </div>
       </div>
        
    
    
    </>
  )
}

export default Single_seller