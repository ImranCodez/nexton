import React from 'react'
import logo from'../assets/images/logo.png'
import { Link } from 'react-router'
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
   <section id='Footer' className=' w-full h-[414px] bg-white'>

       <div className="container">
        <div className='flex  justify-around items-center py-[60px] px-[120px]'>
            <div  className='flex flex-col'>
                <div className='text-[15px] font-semibold font-poppins ml-'>
                 <img src={logo} className='' alt="footer-logo" />
                </div>
         
                <div className='flex gap-2 w-[200px] items-center justify-center mt-[20px]'>
                    <div><FaFacebook className='text-blue-700 '/></div>
                    <h2 className=' text-[18px] text-primary font-normal font-poppins'>Facebook</h2>
                </div>
                <div className='flex gap-2 w-[200px] items-center justify-center mt-[20px]'>
                <IoLogoYoutube className='text-red-600'/>
                <Link className='text-[18px] text-primary font-normal font-poppins '> Yuotube</Link>

                </div>
                 <div className='flex gap-2 w-[200px] items-center justify-center mt-[20px]'>
                  <FaTelegram className='text-blue-400'/>
                    <Link className='text-[18px] text-primary font-normal font-poppins'> Telegram</Link>
                  </div>
                 
                  <div className='flex gap-3 w-[200px] items-center justify-center mt-[20px]'>
                  <FaTwitter className='text-blue-400'/>
                    <Link className='text-[18px] text-primary font-normal font-poppins'> Twitter</Link>
                  </div>
                  
            </div>
             <div  className='flex flex-col'>
                <h2 className='text-[18px] text-secound font-semibold font-poppins'>Getting started</h2>
                <Link className='mt-[20px] text-[18px] text-primary font-normal font-poppins'>Release Notes</Link>
                 <Link className='text-[18px] text-primary font-normal font-poppins mt-3'>Upgrade Guide</Link>
                  <Link className='text-[18px] text-primary font-normal font-poppins mt-3'>Browser Support</Link>
                   <Link className='text-[18px] text-primary font-normal font-poppins mt-3'>Dark Mode</Link>
                  
            </div>
             <div  className='flex flex-col'>
                <h2 className='text-[18px] text-secound font-semibold font-poppins'>Explore</h2>
                <Link className='mt-[20px] text-[18px] text-primary font-normal font-poppins'>Prototyping</Link>
                 <Link className='text-[18px] text-primary font-normal font-poppins mt-3'>Design systems</Link>
                  <Link className='text-[18px] text-primary font-normal font-poppins mt-3'>Pricing</Link>
                   <Link className='text-[18px] text-primary font-normal font-poppins mt-3'>Security</Link>
                  
            </div>
             <div className='flex flex-col'>
             <h2 className='text-[18px] text-secound font-semibold font-poppins'>Community</h2>
                <Link className='mt-[20px] text-[18px] text-primary font-normal font-poppins'>Discussion Forums</Link>
                 <Link className='text-[18px] text-primary font-normal font-poppins mt-3'>Code of Conduct</Link>
                  <Link className='text-[18px] text-primary font-normal font-poppins mt-3'>Contributing</Link>
                   <Link className='text-[18px] text-primary font-normal font-poppins mt-3'>API Reference</Link>
                  
            </div>
        </div>
     </div>

   </section>
  )
}

export default Footer
