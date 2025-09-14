import React, { useState } from 'react'
import { FaStarOfDavid } from 'react-icons/fa'
import { IoBagHandleOutline } from "react-icons/io5"
import { Link } from 'react-router'

const ProductCustomize = () => {
  
    const [Value, setvalue]  =useState(1)
    console.log(Value)

const Addhandle=()=>{

   setvalue(Value +1)
}
    const Removehandle=()=>{
        if (Value<=1){
           alert('Please never go down less then 1')
        }
         else{

            setvalue(Value - 1)
        }
            
        
    }

  return (
    <>
    <div className='w-[460px] h-screen' >
                <div className='h-[463px] w-full bg-white mr-[128px] rounded-xl border border-[#0202022c]'>
                      <div className='flex justify-around items-center mt-4'>
                        <div className='flex justify-baseline items-center'>
                            <p><FaStarOfDavid className='inline-block text-amber-300'/> 2.9</p>
                            <Link  to={'/'}>.124Reviews</Link>

                        </div>
                        <div>
                            <h1 className='text-secound text-xl font-bold font-poppins'>$169.99</h1>
                            <p className=' line-through text-base text-primary '>$199.99</p>
                        </div>
                      </div>
                      <div className='mt-[32px] '>
                        <div className='w-[390px] h-[80px] ml-[33px] mr-[33px]'>
                            <p className='text-secound test-[16px] font-semibold font-poppins'>Size: S</p>
                            <div className='flex gap-2.5 justify-between mt-3'>
                                <button className='lg:w-[77px] w-[68px] h-[44px] lg:text-base text-[12px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type='button'>s</button>
                                <button className='lg:w-[77px] w-[68px] h-[44px] lg:text-base text-[12px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type='button'>m</button>
                                <button className='lg:w-[77px] w-[68px] h-[44px] lg:text-base text-[12px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type='button'>L</button>
                                <button className='lg:w-[77px] w-[68px] h-[44px] lg:text-base text-[12px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type='button'>xl</button>
                                <button className='lg:w-[77px] w-[68px] h-[44px] lg:text-base text-[12px] border-2 border-[#E5E7EB] text-Primary font-semibold rounded-[12px] cursor-pointer focus:bg-[#0EA5E9] focus:text-white' type='button'>2xl</button>
                            </div>
                        </div>
                        <div className='w-[390px] h-[50px] mt-5 ml-[33px] mr-[33px] flex justify-between'>
                            <div className='w-[109px] h-[40px] rounded-full bg-[#E5E7EB] flex items-center justify-around'>
                                   <button onClick={Removehandle} className='w-6 h-6 bg-white rounded-full text-[16px] font-bold font-poppins '>-</button>
                                   <p>{Value}</p>
                                   <button onClick={Addhandle} className=' w-6 h-6 bg-white rounded-full text-[16px] font-bold font-poppins '>+</button>
                            </div>
                            <div>
                                <button className='w-[178px] h-[52px] rounded-full text-white text-[16px] font-medium font-poppins hover:bg-primary duration-[.4s] hover:scale-[1.1] bg-secound flex items-center gap-3 justify-center '> <IoBagHandleOutline/> Add to cart</button>
                            </div>
                        </div>
                        <div className='mt-[33px]'>
                            <div className='flex justify-between items-center'>
                                <p className='text-[16px] text-primary font-normal font-poppins ml-[33px]'>$169.99 x 1</p>
                                <p className='text-[16px] text-primary font-normal font-poppins mr-[33px]'>$169.99</p>
                            </div>
                             <div className='flex justify-between items-center mt-2.5 mb-4'>
                                <p className='text-[16px] text-primary font-normal font-poppins ml-[33px]'>Tax estimate</p>
                                <p className='text-[16px] text-primary font-normal font-poppins mr-[33px]'>0$</p>
                            </div>
                            <div className='w-[394px] border border-[#0000003a] ml-8'></div>
                        </div>
                          <div className='flex justify-between items-center mt-12'>
                                <p className='text-[16px] text-secound font-semibold font-poppins ml-[33px]'>Total</p>
                                <p className='text-[16px] text-secound font-semibold font-poppins mr-[33px]'>$169.99</p>
                            </div>
                      </div>
                </div>
            </div>
    
    
    </>
  )
}

export default ProductCustomize