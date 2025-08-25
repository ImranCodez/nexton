import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router';

const BredCrum = ({Brealink,Breadontent}) => {
  return (
    <div>


        <div className='flex justify-around mb-4 items-center w-[200px] h-[40px] rounded-sm bg-amber-600 text-black'>
            <Link to={'/'}>Home</Link>
            <IoIosArrowDroprightCircle className='w-[40px] h-[30px]'/>
            <Link to={Brealink}>{Breadontent}</Link>
        </div>
    </div>
  )
}

export default BredCrum