import React from 'react'

const SingleExplore = ({Mancloth,startprice,ShopeNOw,ExploreIcon}) => {
  return (
    <div>

        <div className='w-[418px] gap-[20px] h-[132px] border-2 hover:border-black duration-[.4s] rounded-[17px] text-[#E5E7EB] flex items-center justify-around'>
            <div>
                <h1 className='text-[24px] text-secound font-semibold font-poppins'>{Mancloth}</h1>
                <p className='text-[14px] text-primary font-normal font-poppins'>{startprice}</p>
            </div>
              <button className='w-[113px] h-[33px] text-primary font-medium font-poppins text-[14px]  '>{ShopeNOw}<span className='inline-block align-middle'>{ExploreIcon}</span></button>
        </div>




    </div>
  )
}

export default SingleExplore