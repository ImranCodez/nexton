import React, { useState } from 'react'
import { CgPassword } from 'react-icons/cg'
import { Link } from 'react-router'
import { IoMdEyeOff } from "react-icons/io";
import { GoEye } from "react-icons/go";

const Longing = () => {

const [FoRmdata, setFormdata]  =useState({email:'', emailError:"", emailborder:'', pass:'', passwordError:'', repassword:'', CorforpassError:''})
 
const HndleLogin =()=>{
  if(!FoRmdata.email){
    setFormdata((error)=>({...error,emailborder:'#E62727'}))
    setFormdata((error)=>({...error,emailError:'Enter Your email'}))
  }
  if(!FoRmdata.pass){
    setFormdata((paserro)=>({...paserro,passwordError:'Enter your password'}))
  }
   if(!FoRmdata.repassword){
    setFormdata((prev)=>({...prev,CorforpassError:'Enter your password'}))
   }
}



const [eyesing ,seteyesign]=useState(false)
const [reeyesign,setreteyesign]  =useState(false)
      console.log(reeyesign)

  return (
    <>
  
     
         
     <section id='Resis' className='w-[440px] h-[600px]   bg-[#Fff] top-[20%] left-[40%] bottom-[20%] absolute rounded-[10px] border border-[#00000049] '>
        <h1 className='text-[38px] text-secound font-semibold font-poppins mb-[60px] px-[144px]  mt-10 border-2 border-[#00000010] '>login</h1>


        <label htmlFor="" className='text-secound font-semibold text-[20px] pl-[12px]'>email</label>
        <br />
           <div className='relative'> <p className='text-base font-normal absolute top-[-25px] left-10 font-poppins text-red-600 pl-10'>{FoRmdata.emailError}</p></div>         
          <input onChange={(e)=>setFormdata((prev)=>({... prev,email:e.target.value,emailError:''}))} placeholder='Enter Your Email' className={`w-full pl-[10px] ronded-[12px] h-[43px] border border-[#00000023] outline-0 ${FoRmdata.emailborder} `} type="text" />
            {/* .............password......... */}
          <br />
          <br />
          <label htmlFor=""className='text-secound font-semibold text-[20px] pl-[12px]'>password</label>
        <br />
      <div className='relative'> <p className='text-base font-normal absolute top-[-25px] left-14 font-poppins text-red-600 pl-10'>{FoRmdata.passwordError}</p></div>         


      <div className='relative'>
          <input onChange={(e)=>setFormdata((prev)=>({... prev,pass:e.target.value,passwordError:''}))} placeholder='Enter your password' className='w-full pl-[10px] ronded-[12px] h-[43px] outline-0 border rounded-sm border-[#0000001c]  ' type={ eyesing? "text":"password"} />
          {
                     eyesing?
                     <GoEye onClick={()=>seteyesign(!eyesing)}  className='bottom-[15px] right-5 absolute'/>
                     :
                      <IoMdEyeOff onClick={()=>seteyesign(!eyesing)}  className='bottom-[15px] right-5 absolute'/>
                   }
      </div>
          {/* ...............conform passwpord..................... */}
           <br />
          <br />
          <label htmlFor=""className='text-secound font-semibold text-[20px] pl-[12px]'>conform password</label>
           <br/>
             <div className='relative'> 
           <div className='relative'> <p className='text-base font-normal absolute top-[-25px] left-36 font-poppins text-red-600 pl-10'>{FoRmdata.CorforpassError}</p></div>         
           <input onChange={(e)=>setFormdata((prev)=>({... prev,repassword:e.target.value,CorforpassError:''}))} placeholder='Enter your password' className='w-full pl-[10px] ronded-[12px] h-[43px] outline-0 border rounded-sm border-[#0000001c]  ' type={reeyesign? 'text':'password'} />
              {
                     reeyesign?
                     <GoEye onClick={()=>setreteyesign(!reeyesign)}  className='bottom-[15px] right-5 absolute'/>
                     :
                     <IoMdEyeOff onClick={()=>setreteyesign(!reeyesign)}  className='bottom-[15px] right-5 absolute'/>
                   }
           </div>
            <button onClick={HndleLogin} className='bg-secound w-full h-[52px] rounded-3xl text-white text-[18px] mt-[24px] mb-6 font-medium font-poppins flex items-center justify-center hover:scale-[1.03] duration-[.4s] '>continuee

            </button>
             <label className='text-[14px] font-medium text-[#4B5563]  px-[190px]' htmlFor="">OR</label>
             <Link to={'/Resis'} className='flex justify-center bottom-0 text-[#0EA5E9]'><h4 className='text-[#4B5563]'> if your are a New user </h4> create an account </Link>

    </section>
  

   


    </>
  )
}

export default Longing