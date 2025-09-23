import React from 'react'
import Bannerbg from '../assets/images/Bannerbg.png'
import { Link } from 'react-router'
import { CiSearch } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import BannerImg from '../assets/images/Bannerbg.png'
import BannerImg2 from '../assets/images/bannerzzz.png'

const Banner = () => {

 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay:true,
    slidesToScroll: 1,
  };

  return (
    <>
   
  <Slider {...settings}>
       <section className='w-full h-[550px] lg:h-[600px]' >
            <div className='bg-left lg:bg-center' style={{backgroundImage:`url(${BannerImg})` , backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className="container">
                <div id="Banner_Text" className='lg:py-[148px] pt-[163px] pb-[199px] pl-[24px] lg:pl-0'>
                    <h2 className='font-medium text-[14px] lg:text-[20px] text-Primary'>Starting from: $49.99</h2>
                    <h1 className='font-semibold text-[30px] lg:text-[64px] leading-[38px] lg:leading-[72px] w-[312px] lg:w-[632px] text-[#111827] mb-[24px] mt-[18px]'>Exclusive collection for everyone</h1>
                    <Link className='text-white py-[12px] px-[24px] lg:py-[20px] lg:px-[36px] bg-second rounded-full flex items-center w-fit gap-2.5 duration-[.3s] hover:scale-[1.06] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]' to={'/Products'}>Explore now <CiSearch className='text-[20px]'/></Link>
                </div>
              </div>
            </div>
          </section>
          <section className='w-full h-[550px] lg:h-[600px]' >
            <div className='bg-left lg:bg-center' style={{backgroundImage:`url(${BannerImg2})` , backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
              <div className="container">
                <div id="Banner_Text" className='lg:py-[148px] pt-[163px] pb-[199px] pl-[24px] lg:pl-0'>
                    <h2 className='font-medium text-[14px] lg:text-[20px] text-Primary'>100% Original Products</h2>
                    <h1 className='font-semibold text-[30px] lg:text-[64px] leading-[38px] lg:leading-[72px] w-[312px] lg:w-[632px] text-[#111827] mb-[24px] mt-[18px]'>The All New Fashion Collection</h1>
                    <Link className='text-white py-[12px] px-[24px] lg:py-[20px] lg:px-[36px] bg-second rounded-full flex items-center w-fit gap-2.5 duration-[.3s] hover:scale-[1.06] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]' to={'/Products'}>Explore now <CiSearch className='text-[20px]'/></Link>
                </div>
              </div>
            </div>
          </section>
    </Slider>






    </>
  )
}

export default Banner