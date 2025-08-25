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
        <div className='flex  justify-around items-center  py-[60px]'>
            <div  className='flex flex-col'>
                <div className='text-[15px] font-semibold font-poppins ml-'>
                 <img src={logo} className='' alt="footer-logo" />
                </div>
         
                <div className='flex gap-2 w-[200px] items-center mt-[20px]'>
                    <div><FaFacebook className='text-blue-700 '/></div>
                    <h2 className=' text-[18px] text-primary font-normal font-poppins'>Facebook</h2>
                </div>
                <div className='flex gap-2 w-[200px] items-center  mt-[20px]'>
                <IoLogoYoutube className='text-red-600'/>
                <Link className='text-[18px] text-primary font-normal font-poppins '> Yuotube</Link>

                </div>
                 <div className='flex gap-2 w-[200px] items-center  mt-[20px]'>
                  <FaTelegram className='text-blue-400'/>
                    <Link className='text-[18px] text-primary font-normal font-poppins'> Telegram</Link>
                  </div>
                 
                  <div className='flex gap-3 w-[200px] items-center  mt-[20px]'>
                  <FaTwitter className='text-blue-400'/>
                    <Link className='text-[18px] text-primary font-normal font-poppins'> Twitter</Link>
                  </div>
                  
            </div>
             <div  className='flex flex-col'>
                <h2 className='text-[18px] text-secound font-semibold font-poppins '>Getting started</h2>
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
         <div className='w-full  h-[100px] flex justify-around'>

          <div className='flex items-end gap-5'>
       <p className='py-[20px] px-[30px] rounded-s-xl bg-red-500 text-white hover:bg-primary duration-[.4s]' >first text </p>
       <p className='py-[20px] px-[30px] rounded-s-xl bg-red-500 text-white hover:bg-primary duration-[.4s]' >secondtext</p>
      </div>

      <div className='flex gap-2 items-end justify-end w-[70%]'>
        <button className='py-[10px] px-[50px] hover:bg-primary duration-[.4s] rounded-2xl bg-black text-white'>firstdiv</button>
        <button className='py-[10px] px-[50px] hover:bg-primary duration-[.4s] rounded-2xl bg-black text-white'>seconddiv</button>
        <button className='py-[10px] px-[50px] hover:bg-primary duration-[.4s] rounded-2xl bg-black text-white'>thirtdiv</button>
      </div>
      
     </div>
     </div> 
    

   </section>
  )
}

export default Footer
