import React, { useState } from 'react'
import { FaLess } from 'react-icons/fa6'
import { useSearchParams } from 'react-router'
import { Link } from 'react-router'
import { GoEye } from "react-icons/go";
import { IoMdEyeOff } from "react-icons/io";
import { Bounce, toast } from 'react-toastify';
import axios from 'axios';


const Resis = () => {

const [UserName,setUsername]=useState('')
const [email, setemail]=useState('')
const [passoword, setpassword]=useState('')
const [repassword, setrepasswoerd]=useState('')

// ................text error.....................//
const [Usernamerror,setUsernamerror]=useState('')
const [emailrror,setemailrror]=useState('')
const [passworderror,setpassworerror]=useState('')
const [repassworderror,setrepassworerror]=useState('')

// .............show pass .......................//
const [showpass, setshowpass]=useState(false)
const [reshowpass, resetshowpass]=useState(false)
// ...............Border error......................//

const [emailbordererror, setemailbordererror]=useState('border-[#00000041]')
const [Userbordernamerror, setUserbordernamerror]=useState('border-[#00000041]')
const [passwoborderrderror, setpasswordbbotredererror]=useState('border-[#00000041]')
const [repasswordbordererror, setrepasswordbortdererror]=useState('border-[#00000041]')
    
// .........Loding spinner code or usestat...................//
const [Loding, setloding] =useState(false)




  const Handlesubmit=(alu)=>{
      alu.preventDefault()

    if(!UserName){
      // ...........ussrName..........
      setUsernamerror('Enter Your Username')
      setUserbordernamerror(' border-red-600')
  
    
    } 
    // ....email aprt.................//
     if(!email){
      // ...........ussrName..........
      setemailrror('Entert Your email')
      setemailbordererror('border-red-600')
    
    } 
        //  ................password part............//
       if(!passoword){
          setpassworerror('Enter your passoword')
          setpasswordbbotredererror('border-red-600')
       }
    // ............Repassord..................//
       if(!repassword){
        setrepassworerror('Enter your comnform password')
        setrepasswordbortdererror('border-red-600')
       }
     else{
         
         setloding(true)
      axios.post('https://api.escuelajs.co/api/v1/users/',{name:UserName,email:email,password:passoword, avatar:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.veryicon.com%2Ficons%2Fmiscellaneous%2Fuser-avatar%2Fuser-avatar-male-5.html&psig=AOvVaw3Y_slxGtLYW-RP2KUMcYnQ&ust=1758721587623000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIC5oNCC748DFQAAAAAdAAAAABAE'})
          .then((res)=>{setloding(false)

            
            console.log(res)
          })
          .catch((err)=>{console.log(err)})  
    
    
    } 

  }


  return (
    <>
    
     
     <section id='Resis' className='w-[440px] h-[550px] bg-[#Fff] top-0 right-[50%] absolute rounded-[10px] '>
        <h1 className='text-[38px] text-secound font-semibold font-poppins mb-[60px] px-[144px] '>Resistration</h1>
      <form  onSubmit={Handlesubmit}  action=""> 
         {/* ..........UseName part............ */}
       <div className='relative'>
         <h2 className='text-base text-red-700 font-medium font-poppins absolute rigth-[70%]  w-full flex justify-center mb-[-20px] '>{Usernamerror}</h2>
        <label htmlFor="" className='text-secound font-semibold text-[20px] pl-[12px]'>UserName</label>
        <br />
        <input onChange={(e)=>{setUsername(e.target.value), setUsernamerror(''),setUserbordernamerror('')}} placeholder='Enter Your UserName' className = {`relative w-full pl-[10px] ronded-[12px] h-[43px] outline-0 border rounded-sm  ${Userbordernamerror} `} type="text" />
          <br />
          <br />
       </div>
        <div className='relative'>
            {/* .............Email part........ */}
           <h2 className='text-base text-red-700 font-medium font-poppins absolute rigth-[70%] top-0 w-full flex justify-center mb-[-20px] '>{emailrror}</h2>
           <label htmlFor="" className='text-secound font-semibold text-[20px] pl-[12px]'>Email</label>
        <br />
        <input onChange={(e)=>{setemail(e.target.value),setemailrror(''),setemailbordererror('') }} placeholder='Enter Your Email' className={`w-full pl-[10px] ronded-[12px] border h-[43px] outline-0 ${emailbordererror} rounded-sm `} type="email" />
          <br />
          <br />
        </div>
          {/* ..................passoword part .............. */}

         <div className='relative'>
          <h2 className='text-base text-red-700 font-medium font-poppins absolute rigth-[70%]  w-full flex justify-center mb-[-20px] '>{passworderror}</h2>
          <label htmlFor=""className='text-secound font-semibold text-[20px] pl-[12px]'>password</label>
        <br/>
          <input  onChange={(e)=>{setpassword(e.target.value),setpassworerror(''),setpasswordbbotredererror('')}} placeholder='Enter your password' className={`w-full pl-[10px] ronded-[12px] h-[43px] outline-0 border rounded-sm  ${passwoborderrderror}`} type={showpass? 'text':'password'} />
         {
           showpass?
           <GoEye onClick={()=>setshowpass(!showpass)}  className='bottom-[35px] right-5 absolute'/>
           :
            <IoMdEyeOff onClick={()=>setshowpass(!showpass)}  className='bottom-[35px] right-5 absolute'/>
         }
          <br />
          <br />
         </div>
           {/* ..............repassword part ................ */}
         <div className='relative'>
        <h2 className='text-base text-red-700 font-medium font-poppins absolute right-[-20%] top-0 w-full flex justify-center mb-[-20px] '>{repassworderror}</h2>

          <label htmlFor=""className='text-secound font-semibold text-[20px] pl-[12px]'>password(Again)</label>
         <br />
        <input onChange={(e)=>{setrepasswoerd(e.target.value),setrepassworerror(''),setrepasswordbortdererror('')}} placeholder='Enter Your comnform password' className={`w-full pl-[10px] ronded-[12px] h-[43px] ${repasswordbordererror} outline-0 border rounded-sm `} type={reshowpass? 'text':'password'} />
            {
           reshowpass?
           <GoEye onClick={()=>resetshowpass(!reshowpass)}  className='bottom-[35px] right-5 absolute'/>
           :
            <IoMdEyeOff onClick={()=>resetshowpass(!reshowpass)}  className='bottom-[35px] right-5 absolute'/>
         }
         <br />
         <br />
         </div>
         
         
            {
              Loding?
              <button className='bg-secound w-full h-[52px] rounded-3xl text-white text-[18px] mt-[24px] mb-6 font-medium font-poppins flex items-center justify-center hover:scale-[1.03] duration-[.4s] '>    <svg viewBox="25 25 50 50"><circle r="20" cy="50" cx="50"></circle></svg></button>
              :
            <button className='bg-secound w-full h-[52px] rounded-3xl text-white text-[18px] mt-[24px] mb-6 font-medium font-poppins flex items-center justify-center hover:scale-[1.03] duration-[.4s] '>continuee</button>
            }
               {/* ..............alternative part .................... */}
             <label className='text-[14px] font-medium text-[#4B5563]  px-[190px]' htmlFor="">or</label>
             <Link to={'Longing/'} className='flex justify-center bottom-0 text-[#0EA5E9]'><h4 className='text-[#4B5563]'> already taken</h4>Login ?</Link>
    </form>
    </section>
 
       

    
    
    </>
  )
}

export default Resis