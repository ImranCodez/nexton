import React, { useEffect, useState } from 'react'
import Singleproduct from '../components/common/Singleproduct'
import axios from 'axios';

const Recomondation = () => {


const [product, setproduct] = useState([]);
 

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
   <div className="container">
     <div className='flex gap-[13px] justify-around mt-3'>
      <div className='w-[450px] h-[814px] bg-white'>
        <h2 className='mb-2 text-[18px] text-secound font-poppins font-semibold'>Categories</h2>
        <div className='flex gap-2 mt-4'>
          <input className='w-5 h-5 rounde-[4px]' type="checkbox" />
          <p className='text-sm text-primary font-normal font-poppins'> Men's fashion </p>
        </div>
        <div className='flex gap-2 mt-4'>
          <input className='w-5 h-5 rounde-[4px]' type="checkbox" />
          <p className='text-sm text-primary font-normal font-poppins'>Women's fashion</p>
        </div><div className='flex gap-2 mt-4'>
          <input className='w-5 h-5 rounde-[4px]' type="checkbox" />
          <p className='text-sm text-primary font-normal font-poppins'>Kids & Toys</p>
        </div><div className='flex gap-2 mt-4'>
          <input className='w-5 h-5 rounde-[4px]' type="checkbox" />
          <p className='text-sm text-primary font-normal font-poppins'> Accessories</p>
        </div><div className='flex gap-2 mt-4'>
          <input className='w-5 h-5 rounde-[4px]' type="checkbox" />
          <p className='text-sm text-primary font-normal font-poppins'> Cosmetics</p>
        </div><div className='flex gap-2 mt-4'>
          <input className='w-5 h-5 rounde-[4px]' type="checkbox" />
          <p className='text-sm text-primary font-normal font-poppins'> Shoes</p>
        </div><div className='flex gap-2 mt-4'>
          <input className='w-5 h-5 rounde-[4px]' type="checkbox" />
          <p className='text-sm text-primary font-normal font-poppins'> Sports</p>
        </div>
        <div className='w-full h-[190px] mt-[32px]'>
            <h2 className='mb-2 text-[18px] text-secound font-poppins font-semibold'>Price range</h2>
            <div className='flex items-center justify-around '>
            <div className=''>
              <h4>Min price</h4>
             <div className='flex border rounded-3xl gap-6 p-3 hover:bg-secound hover:text-white duration-[.4s]'>
               <p className=''>4444</p>
              <p>$</p>
             </div>
            </div>
            <div className=''>
              <h4>Max price</h4>
             <div className='flex border rounded-3xl gap-6 p-3 hover:bg-secound hover:text-white duration-[.4s]'>
               <p>50000</p>
              <p>$</p>
             </div>
            </div>

            </div>
          
        </div>
        <div className='mt-[32px]' >
              <h2 className='mb-2 text-[18px] text-secound font-poppins font-semibold'>Price range</h2>
             <div className='flex gap-2 mt-4'>
          <input className='w-5 h-5 rounded-full' type="Radio" />
          <p className='text-sm text-primary font-normal font-poppins'> Most Popular </p>
        </div>
          <div className='flex gap-2 mt-4'>
          <input className='w-5 h-5 rounded-full' type="Radio" />
          <p className='text-sm text-primary font-normal font-poppins'> Best Rating </p>
        </div>  <div className='flex gap-2 mt-4'>
          <input className='w-5 h-5 rounded-full' type="Radio" />
          <p className='text-sm text-primary font-normal font-poppins'>Newest</p>
        </div>  <div className='flex gap-2 mt-4'>
          <input className='w-5 h-5 rounded-full' type="Radio" />
          <p className='text-sm text-primary font-normal font-poppins'> Price Low - Hight</p>
        </div>  <div className='flex gap-2 mt-4'>
          <input className='w-5 h-5 rounded-full' type="Radio" />
          <p className='text-sm text-primary font-normal font-poppins'> Price Hight - Low </p>
        </div> 
        </div>
      </div>
        <div className='flex gap-[13px]  flex-wrap justify-around'>
            {
            product.slice(0,8).map((items)=>(
              <Singleproduct proimg={items.category.image} proName={items.title} proprice={items.price} />))
          }
        </div>
      
    </div>
   </div>
  )
}

export default Recomondation