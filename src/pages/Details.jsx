import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TbStars } from "react-icons/tb";
import { Link } from 'react-router';
import BredCrum from '../components/common/BredCrum';
import DetailsProduct from '../components/DetailsProduct';
import ProductCustomize from '../components/ProductCustomize';
import Reco from '../components/Reco';


const Details = () => {

 const [product, setproduct] = useState([0]);


          console.log(product)
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
    <>
    <section id='detailspage' className='mt-10'>
            <div className="container">
             {/* .............Bredcrum part.................. */}
          <BredCrum Breadontent={'Detailspage'} Brealink={'/'} />
            
             
        <div id='product info' className='flex justify-between'>
            
               {/* ...........left side......... */}
                 <DetailsProduct/>
                  {/* .......right side........... */}
                  <ProductCustomize/>
        </div>
        
        

            {/* ................right siide............ */}
                <div className='w-full h-[572px] mt-[105px]'  >
                    <h1 className='text-[38px] text-secound font-semibold font-poppins'>Black Automatic Watch</h1>
                    <p className='text-[16px] text-primary font-normal font-poppins w-[735px]'></p>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had
                    previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic
                    wooden canoes in Valley Park, Missouri ceased in 1978.
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