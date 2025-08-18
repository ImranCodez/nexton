import React, { useEffect, useState } from 'react'
import Single_seller from './common/Single_seller'
import axios from 'axios'
import { Link } from 'react-router'

const Best_seller = () => {

      const [mostsell,setmostsell] =useState([])

         

      useEffect(()=>{
      axios.get('https://dummyjson.com/products')    
      .then((res2)=>(setmostsell(res2.data.products)))
       .catch((err)=>{console.log(err)})
         },[])
         
   console.log(mostsell)
    
  return (
    <section id='Best_seller' className='mt-[88px] w-full '>
       <div className="container">
    <h1 className='text-[38px] text-secound font-semibold font-poppins mb-[40px]'>Best Sellers. <span className='text-[38px] text-[#4B5563] font-poppins font-semibold'>Best selling of the month</span></h1>
       
       <div className='flex justify-around flex-wrap gap-2'>
         {
            mostsell.slice(0,4).map((items2)=>(
            <Single_seller bestSellimg={items2.images} bestSellNme={items2.title} bestPrice={items2.price} Rating={items2.rating} discount={items2.discountPercentage} />
      
            ))
          }
       </div>
          
          <div className='flex justify-center items-center mt-[30px]'>
      <Link className='py-[10px] px-[12px] bg-secound text-base text-[#fff] hover:bg-primary rounded-[4px] '>See More....</Link>

          </div>

       </div>

      


    </section>
  )
}

export default Best_seller