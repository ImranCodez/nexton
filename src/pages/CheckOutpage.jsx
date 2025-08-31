import React from 'react'
import BredCrum from '../components/common/BredCrum'
import { CgProfile } from "react-icons/cg";
import { GrDirections } from "react-icons/gr";
import Checkout from '../assets/images/Checkout.png'
import { BsArrowsAngleExpand } from "react-icons/bs";


const CheckOutpage = () => {
  return (
    <>
    <div className="container">
        <h1 className='text-[36px] text-secound font-semibold font-poppins'>Checkout</h1>
      <BredCrum Breadontent={'CheckOutpage'} Brealink={'/'} />
        <div className='flex justify-between items-center'>
        <div className='w-[638px] h-screen '>
          <div className='w-full h-[205px] rounded-[16px] border-2 border-[#0000002a]'>
            <h3 className='flex items-center gap-1.5 pl-[26px] text-[16px] text-primary py-[24px] font-medium font-poppins '><CgProfile/> CONTACT INFO</h3>
              <div className='flex justify-around items-center'>
               
              <div >
                 <label htmlFor="">Your phone number</label>
                <br /> <input className='outline-none border border-[#0003] rounded-[12px]' type="Number" />
              </div>
              <div >
                 <label htmlFor="">Email address</label>
                <br /> <input className='outline-none border border-[#0003] rounded-[12px]' type="email" />
              </div>
              </div>
          </div>
                        {/*.......shipping Adress......... ....... */}
          <div className='w-full h-[605px] rounded-[16px] border-2 border-[#0000002f] mt-10'>
             <h3 className='flex items-center gap-2.5 py-[24px] pl-[40px] border-b-2 border-[#0000002b] '> <GrDirections className='border text-[18px] font-bold rounded-[4px] border-[#00000071] p-0.5'/> SHIPPING ADDRESS</h3>
             <div className='flex just items-center justify-around mt-5 '>
              <div>
                <label className='text-xl text-secound font-semibold font-poppins' htmlFor="">First name</label>
                <br />
                <input placeholder='Write your first name' className='py-3 px-3 outline-none rounded-[16px] border border-[#0000000b] ' type="text" />
              </div>
                 <div>
                <label className='text-xl text-secound font-semibold font-poppins' htmlFor="">Last name</label>
                <br />
                <input placeholder='Write Your Last name' className='py-3 px-3 outline-none rounded-[16px] border border-[#00000031] ' type="text" />
              </div>
              
             </div>
               <div className='flex just items-center justify-around mt-5 '>
              <div>
                <label className='text-xl text-secound font-semibold font-poppins' htmlFor="">Address line 1</label>
                <br />
                <input placeholder='Write your Adress line 1' className='py-3 px-3 w-[384px] outline-none rounded-[12px] border border-[#0000004c] ' type="text" />
              </div>
                 <div>
                <label className='text-xl text-secound font-semibold font-poppins' htmlFor="">Apt, Suite</label>
                <br />
                <input placeholder='Write Your Apt, Suite' className='py-3 px-3 w-[180px] outline-none rounded-[12px] border border-[#00000031] ' type="text" />
              </div>
                
             </div>
             <div className='mx-6 mt-4'>
              <label className='text-xl text-secound font-semibold font-poppins' htmlFor="">Address line 2</label>
                <br />
                <input className='w-[488px] py-3 rounded-[12px] border  border-[#0003] pl-3'placeholder='write Your Adress line 2' type="text" />
             </div> 
             <div className='w-[588px] h-[80px] flex justify-around gap-10 items-center'>
                 <div>
                  <label  className='text-xl text-secound font-semibold font-poppins' htmlFor="">City</label>
                  <br />
                  <input className='w-[282px] h-[42px] rounded-[12px] border border-[#00000047]  outline-none' type="text" />
                 </div>
                 <div>
                  <label className='text-xl text-secound font-semibold font-poppins' htmlFor="">Country</label>
                  <br />
                  <input className='w-[282px] h-[42px] rounded-[12px] border border-[#00000047] outline-none' type="text" />
                 </div>
             </div>
                {/* ............State/Province State/Province.................. */}

                   <div className='w-[588px] h-[80px] flex justify-around gap-10 mt-8 items-center'>
                 <div>
                  <label  className='text-xl text-secound font-semibold font-poppins' htmlFor="">State/Province</label>
                  <br />
                  <input className='w-[282px] h-[42px] rounded-[12px] border border-[#00000047]  outline-none' type="text" />
                 </div>
                 <div>
                  <label className='text-xl text-secound font-semibold font-poppins' htmlFor="">Postal code</label>
                  <br />
                  <input className='w-[282px] h-[42px] rounded-[12px] border border-[#00000047] outline-none' type="text" />
                 </div>
             </div>
          </div>
          {/* .................Payment part................ */}
            <div className='w-full h-[400px] border border-[#00000046] rounded-[16px]'>
              <p className='border-b border-[#0000003b] py-[26px] px-[26px] rounded-[12px] '>PAYMENT</p>
              <div className='w-[510px] h-[75px] mx-[26px] mt-4'>
                <label className='text-xl text-secound font-semibold font-poppins ' htmlFor="">Card number</label>
                <br />
                <input className='w-full h-11 border border-[#0000003c] rounded-[16px] pl-5  ' placeholder='Write Your Card Number' type="text" />
              </div>
               <div className='w-[510px] h-[75px] mx-[26px] mt-4'>
                <label className='text-xl text-secound font-semibold font-poppins ' htmlFor="">Name on the card</label>
                <br />
                <input className='w-full h-11 border border-[#0000003c] rounded-[16px] pl-5  ' placeholder='Write Your Name on the card' type="text" />
              </div>
              <div className='flex items-center'>
                   <div className='w-[510px] h-[75px] mx-[15px] mt-4'>
                <label className='text-xl text-secound font-semibold font-poppins ' htmlFor="">Expiration date (MM/YY)</label>
                <br />
                <input className='w-[386px] h-11 border border-[#0000003c] rounded-[16px] pl-5  ' placeholder='Write Your Name Expiration date ' type="text" />
              </div> 
              <div className='w-[510px] h-[75px] mx-[26px] mt-4'>
                <label className='text-xl text-secound font-semibold font-poppins ' htmlFor="">CVC</label>
               <br />
                <input className='w-[180px]   h-11 border border-[#0000003c] rounded-[16px] pl-5  ' placeholder='Write Your CVC' type="text" />
              </div>
              </div>
            </div>
        </div>
        {/* ......................left side.................. */}
          <div className='w-[618px] h-[604px] border-y-orange-950 '>
            <h2 className='text-[24px]'>Order summary</h2>
            <div className='w-full h-[132px] flex justify-between items-center py-[24px] border-b border-[#00000030]'>
              <div className='w-[96px] h-[108px]'>
                <img src={Checkout} alt="checkOutImage" />
              </div>
              <div className='w-[498px] h-[108px]'>
                <h2 className='text-[16px] text-secound font-semibold font-poppins '>Black Automatic Watch</h2>
                <p className='flex mt-0.5 text-base text-primary'><BsArrowsAngleExpand/>One size</p>
              <div className='w-[110px] bg-[rgb(229,231,235)] h-10 rounded-3xl flex justify-between px-2 items-center mt-5'>
                <button className='w-7 h-7 rounded-full bg-amber-50 text-[16px] '>+</button>
                     <p>1</p>
                <button className='w-7 h-7 rounded-full bg-amber-50 text-[16px] '>-</button>
              </div>
              </div>
              <div className='w-[61px] h-[108px] '>
                 <h1 className='text-[16px] text-secoundm font-semibold font-poppins'>$169.99</h1>
                 <p className='text-base text-primary font-normal font-poppins' >$199.99</p>
              </div>
            </div>
                <div className='w-full h-[132px] flex justify-between items-center py-[24px] border-b border-[#00000030]'>
              <div className='w-[96px] h-[108px]'>
                <img src={Checkout} alt="checkOutImage" />
              </div>
              <div className='w-[498px] h-[108px]'>
                <h2 className='text-[16px] text-secound font-semibold font-poppins '>Black Automatic Watch</h2>
                <p className='flex mt-0.5 text-base text-primary'><BsArrowsAngleExpand/>One size</p>
              <div className='w-[110px] bg-[rgb(229,231,235)] h-10 rounded-3xl flex justify-between px-2 items-center mt-5'>
                <button className='w-7 h-7 rounded-full bg-amber-50 text-[16px] '>+</button>
                     <p>1</p>
                <button className='w-7 h-7 rounded-full bg-amber-50 text-[16px] '>-</button>
              </div>
              </div>
              <div className='w-[61px] h-[108px] '>
                 <h1 className='text-[16px] text-secoundm font-semibold font-poppins'>$169.99</h1>
                 <p className='text-base text-primary font-normal font-poppins' >$199.99</p>
              </div>
              
            </div>
            <div className='w-full h-[160px]  '>
                    <div className='flex justify-between items-center mt-6'>
                      <p className='text-[16px] text-primary font-normal font-poppins' >Subtotal</p>
                      <p className='text-[16px] text-primary font-normal font-poppins' >$169.99</p>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                      <p className='text-[16px] text-primary font-normal font-poppins' >Shipping estimate</p>
                      <p className='text-[16px] text-primary font-normal font-poppins' >$169.99</p>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                      <p className='text-[16px] text-primary font-normal font-poppins' >Tax estimate</p>
                      <p className='text-[16px] text-primary font-normal font-poppins' >$169.99</p>
                    </div>
                     <div className='flex justify-between items-center mt-6'>
                      <h2 className='text-[16px] text-secound font-semibold font-poppins' >Order total</h2>
                      <h2 className='text-[16px] text-secound font-semibold font-poppins' >$169.99</h2>
                    </div>
              </div>
            
          </div>

        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default CheckOutpage