import React from 'react'
import logo from'../assets/images/logo.png'
import { Link } from 'react-router'
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
 import footerimg  from '../assets/images/footer (1).png'
  import footerimg2  from '../assets/images/footer (2).png'
   import footerimg3  from '../assets/images/footer (3).png'
    import footerimg4  from '../assets/images/footer (4).png'

const Footer = () => {
  return (
   <section id='Footer' className=' w-full h-[414px] bg-white'>

       <div className="container">
        <div className='flex  justify-around items-center w-full '>
            <div  className='flex flex-col'>
                <div className='text-[15px] font-semibold font-poppins'>
                 <img src={logo} className='' alt="footer-logo" />
                </div>
         
                <div className='flex gap-2 w-[200px] items-center mt-[20px]'>
                    <div className='p-2.5 hover:bg-primary group rounded-[4px] duration-[.40s] '><FaFacebook className='text-blue-700 group-hover:text-white'/></div>
                    <h2 className='  text-[18px] text-primary font-normal font-poppins'>Facebook</h2>
                </div>
                <div className='flex gap-2 w-[200px] items-center '>
                <div className='p-2.5 hover:bg-primary group rounded-[4px] duration-[.40s] '><IoLogoYoutube className='text-red-600 group-hover:text-white'/></div>
                <Link className='text-[18px] text-primary font-normal font-poppins '> Yuotube</Link>

                </div>
                 <div className='flex gap-2 w-[200px] items-center ]'>
                <div className='p-2.5 hover:bg-primary group rounded-[4px] duration-[.40s] '><FaTelegram className='text-blue-400 group-hover:text-white'/></div>

                    <Link className='text-[18px] text-primary font-normal font-poppins'> Telegram</Link>
                  </div>
                 
                  <div className='flex gap-3 w-[200px] items-center  '>
                 <div className='p-2.5 hover:bg-primary group rounded-[4px] duration-[.40s] '><FaTwitter className='text-blue-400 group-hover:text-white'/></div>
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
        {/* ......Down footer er part........... */}
         <div className='w-full  h-[50px] flex items-center justify-around mt-5'>

          <div>
       <p className='text-[16px] text-primary font-normal font-poppins pl-10' >Nexton eCommerce. © 2024 </p>
      </div>

      <div className='flex gap-2 items-center justify-end w-[70%]'>
        <Link className='m-0 p-0' to={'/'}><img className='m-0 p-0'  src={footerimg} alt="fototerimage" /></Link>
        <Link className='m-0 p-0' to={'/'}><img className='m-0 p-0' src={footerimg2} alt="fototerimage" /></Link>
        <Link className='m-0 p-0' to={'/'}><img className='m-0 p-0' src={footerimg3} alt="fototerimage" /></Link>
          <Link className='m-0 p-0' to={'/'}><img  className='m-0 p-0' src={footerimg4} alt="fototerimage" /></Link>

      </div>
      
     </div>
     </div> 
    

   </section>
  )
}

export default Footer
