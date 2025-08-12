import React from 'react'
import bannerzzz from '../assets/images/bannerzzz.png'
import { Link } from 'react-router'
const NewColletion = () => {
  return (
    <>
    
    <section id='Newcollection' className='w-full pt-[161px]' >
     <div className="container" style={{background:`url(${bannerzzz.png})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}} >
        <div className="textitems">
            <p className='text-primary text-[20px] font-medium font-poppins'>100% Original Products</p>
            <h1 className='text-secound text-[38px] font-semibold font-poppins mb-[24px] w-[362px]'>The All New Fashion Collection Items</h1>
            <p  className='text-primary text-[20px] font-medium font-poppins'>Starting from: $59.99</p>
              <Link to={'/'} className='py-[14px] px-[32px] bg-secound  text-white rounded-full mt-6 hover:scale-[1.1]' >Shop now</Link>
        </div>
     </div>
    </section>
    
    
    </>
  )
}

export default NewColletion