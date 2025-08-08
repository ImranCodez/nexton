import React from 'react'
import SingleExplore from './common/SingleExplore'
import { IoIosArrowRoundForward } from "react-icons/io";

const Explore = () => {
  return (
    <>
    <section id='exlore' className='mt-[88px]'>
         <div className="container">
            
        <h1 className='text-[38px] text-secound font-semibold font-poppins mb-[40px]'>Start exploring. <span className='text-[38px] text-[#4B5563] font-poppins font-semibold'>Good things are waiting for you</span></h1>

       <div className='flex justify-between'>
        <SingleExplore Mancloth={'For Men`s'} startprice={'Starting at $24'} ShopeNOw={'Shop Now'} ExploreIcon={<IoIosArrowRoundForward className='text-[30px]'/>} />
         <SingleExplore Mancloth={'For Women`s'} startprice={'Starting at $19'} ShopeNOw={'Shop Now'} ExploreIcon={<IoIosArrowRoundForward className='text-[30px]'/>} />
         <SingleExplore Mancloth={'Accessories'} startprice={'Explore accessories'} ShopeNOw={'Shop Now'} ExploreIcon={<IoIosArrowRoundForward className='text-[30px]'/>} />
       
       </div>
        


         </div>

    </section>
    
    
    
    
    </>
  )
}

export default Explore