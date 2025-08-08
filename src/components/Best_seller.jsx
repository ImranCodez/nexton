import React from 'react'
import Single_seller from './common/Single_seller'

const Best_seller = () => {
  return (
    <section id='Best_seller' className='mt-[88px] w-full '>
       <div className="container">
    <h1 className='text-[38px] text-secound font-semibold font-poppins mb-[40px]'>Best Sellers. <span className='text-[38px] text-[#4B5563] font-poppins font-semibold'>Best selling of the month</span></h1>
       <Single_seller/>
       </div>

      


    </section>
  )
}

export default Best_seller