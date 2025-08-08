import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import Singleservice from './common/Singleservice'
import { RiExchange2Line } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
const Service = () => {
  return (
    <>
    
    <section id='service' className='pt-[53px]'>
        <div className="container">
            <div className="service_row flex items-center justify-between border py-6 px-10 rounded-[16px] border-[#E5E7EB]">

                <Singleservice SupportText={'Free shipping'} Supportp={'On orders over $50.00'} suporticon={<CiDeliveryTruck className='text-[34px]'/>} />
                <span className='w-[2px] h-[50px] text-[#E5E7EB] inline-block'></span>

                <Singleservice SupportText={'Very easy to return'} Supportp={'Just phone number'} suporticon={<RiExchange2Line className='text-[34px]'/>} />
                <span className='w-[2px] h-[50px] text-[#E5E7EB] inline-block'></span>

                <Singleservice SupportText={'Worldwide delivery'} Supportp={'Fast delivery worldwide'} suporticon={<TbWorld className='text-[34px]'/>} />
                <span className='w-[2px] h-[50px] text-[#E5E7EB] inline-block'></span>
                 
                <Singleservice SupportText={'Refunds policy'} Supportp={'60 days return for any reason'} suporticon={<RiMoneyCnyCircleLine className='text-[34px]'/>} />
                <span className='w-[2px] h-[50px] text-[#E5E7EB] inline-block'></span>
      
                  

            </div>
        </div>
    </section>
    
    
    </>
  )
}

export default Service