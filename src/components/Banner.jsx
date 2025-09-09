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
    slidesToScroll: 1,
  };


  return (
    <>
      {/* <Slider {...settings}>
     <section id='Banner' style={{background:`url(${Bannerbg})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}} className='pt-[163px] pb-[199px] lg:[148px]'>
    
         <div className="container">
           
        <div className="banner_text">
          <h2 className='text-[#4B5563] text-[20px] font-medium font-poppins'>Starting from: $49.99</h2>
          <h1 className='text-[#111827] font-poppins text-[30px] font-semibold leading-[72px] w-full my-6 mt-2 mb-10 lg:text-[63px] lg:w-[632px]'>Exclusive collectionfor everyone</h1>
          <Link className='py-3 px-6 flex mt-[24px]  mb-[168px] lg:px-[36px]  items-center justify-center gap-2 rounded-[100px] bg-[#111827] text-[#fff] font-poppins text-[14px]  lg:text-[16px]  font-medium ruonded-[100px] w-fit hover:scale-[1.1] duration-[.4s]' to={'/'}>Explore now <CiSearch className='text-xl' /> </Link>            
        </div>
        
      </div>
     </section>
    </Slider> */}
       
     
  <Slider {...settings} >
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




{/* <div id='BannerSlider' className="slider-container overflow-hidden">
        <Slider {...settings} >
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
      </div> */}





    </>
  )
}

export default Banner