import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaCartFlatbed } from "react-icons/fa6";

const Singleproduct = ({proimg ,proName ,proacc,proprice,prodis,prorating,Detailseclick,clcikCArt}) => {





  return (
    <>
    
    <div onClick={Detailseclick} className='w-[309px] h-[448px] relative'>
     <div className='absolute  right-5 top-5  group duration-[.3s] text-2xl flex flex-col items-center'>
      <button onClick={clcikCArt} className='w-10 h-10 rounded-full   text-[18px] bg-amber-700  flex justify-center items-center  group-hover:bg-primary group-hover:text-[#fff]'><FaCartFlatbed/></button>
      <div className='mt-[-27px] absolute top-0 right-0 duration-[.3s] w-[90px] h-[40px] bg-[#000] text-[#fff] rounded-[5px] invisible group-hover:visible flex justify-center items-center text-base group-hover:mt-[-50px]'>shop</div>
     </div>
     <div className='w-full h-[348px] bg-white rounded-[16px] relative z-[-10]'>
        <img src={proimg} alt="productiamge" />
     </div>
     <div className="productext">
        <div className='flex justify-between mt-[20px]'>
        <h2 className='text-[18px] text-secound font-semibold productNme font-poppins'>{proName}</h2>
        <h2 className='text-[18px] text-secound font-semibold  font-poppins'>{proprice}$</h2>
     </div>
     <div className='flex gap-[20px] justify-between '>
        <h2 className='text-[18px] text-primary font-semibold  font-poppins italic productNme'>{proacc}</h2>
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