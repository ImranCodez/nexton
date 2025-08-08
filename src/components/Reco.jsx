import React, { useState } from 'react'
import Singleproduct from './common/Singleproduct'
import axios from 'axios'

const Reco = () => {
     
      const [product, setproduct]  = useState()


          
         axios.get('https://api.escuelajs.co/api/v1/products')
        .then((res)=>{ setproduct(res) })
        .catch((err)=>{console.log(err)})

        console.log(product)
       
  return (
    <>
    
    <section id='Reco' className='mt-[88px]'>
        <div className="container"> 
            <h1 className='text-[38px] text-secound font-semibold font-poppins mb-[40px]'>Recommendations. <span className='text-[38px] text-[#4B5563] font-poppins font-semibold'> Best matching products for you</span></h1>
                {

                }
                  <Singleproduct  />
              
        </div>
    </section>
    
    </>
  )
}

export default Reco