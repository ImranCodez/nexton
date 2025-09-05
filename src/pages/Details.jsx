import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TbStars } from "react-icons/tb";
import { Link, useParams } from 'react-router';
import BredCrum from '../components/common/BredCrum';
import DetailsProduct from '../components/DetailsProduct';
import ProductCustomize from '../components/ProductCustomize';
import Reco from '../components/Reco';


const Details = () => {

 const [product, setproduct] = useState([0]);
  const Params=useParams()
    
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${Params.Productid}`)
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


   console.log(product.images)
 
  return (
    <>
    <section id='detailspage' className='mt-10'>
            <div className="container">
             {/* .............Bredcrum part.................. */}
          <BredCrum Breadontent={'Detailspage'} Brealink={'/'} />
            
             
        <div id='product info' className='flex justify-between'>
            
               {/* ...........left side......... */}
                 <DetailsProduct mainimg={product.images}/>
                  {/* .......right side........... */}
                  <ProductCustomize/>
        </div>
        
        

            {/* ................right siide............ */}
                <div className='w-full h-[572px] mt-[105px]'  >
                    <h1 className='text-[38px] text-secound font-semibold font-poppins'>{product.title}</h1>
                    <p className='text-[16px] text-primary font-normal font-poppins w-[735px]'>{product.description}</p>
                    <div className='mt-[60px]'>
                        <h2 className='text-secound text-[24px] font-semibold font-poppins'>Fabric + Care</h2>
                        <p className='text-[16px] text-primary font-normal font-poppins'>Material: Soft wool blend</p>
                        <p className='text-[16px] text-primary font-normal font-poppins'>Color: Various</p>
                    </div>
                    <div className='mt-[60px]'>
                        <h2 className='text-secound text-[24px] font-semibold font-poppins'>Sale performance</h2>
                        <p className='text-[16px] text-primary font-normal font-poppins'>Sales: 0</p>
                        <p className='text-[16px] text-primary font-normal font-poppins'>Review Count: -</p>
                        <p className='text-[16px] text-primary font-normal font-poppins'>Review Average: -</p>

                    </div>
                    <div className='mt-[60px]'>
                        <h2 className='text-secound text-[24px] font-semibold font-poppins'>Keywords</h2>
                       <div className='flex gap-2'>
                        <Link to={'/'} className='py-[8px] px-[30px]  flex items-center border border-primary rounded-[100px]'><TbStars className='flex gap-1' /> men's fashion</Link>
                        <Link to={'/'} className='py-[8px] px-[30px]  flex items-center border border-primary rounded-[100px]'><TbStars className='flex gap-1' />winter hat</Link>
                        <Link to={'/'} className='py-[8px] px-[30px]  flex items-center border border-primary rounded-[100px]'><TbStars className='flex gap-1' />colorful accessory</Link>
                        <Link to={'/'} className='py-[8px] px-[30px]  flex items-center border border-primary rounded-[100px]'><TbStars className='flex gap-1' />warm headwear</Link>


                       </div>
                    </div>
                    
                </div>
                <Reco/>
    </div>
    </section>
    
    
    
    </>
  )
}

export default Details