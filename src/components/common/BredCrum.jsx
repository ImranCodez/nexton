import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router';

const BredCrum = ({Brealink,Breadontent}) => {
  return (
    <div>


        <div className='flex pl-4 mb-4 items-center w-full h-[40px] hover:scale-[1.01] duration-[.3s] rounded-sm bg-primary text-white'>
            <Link to={'/'}>Home</Link>
            <IoIosArrowDroprightCircle className='w-[40px] h-[30px]'/>
            <Link to={Brealink}>{Breadontent}</Link>
        </div>
    </div>
  )
}

export default BredCrum