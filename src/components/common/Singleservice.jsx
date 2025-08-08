import React from 'react'
const Singleservice = ({SupportText,Supportp,suporticon}) => {
  return (
    <>
    
   <>
     <div className='flex items-center gap-[16px]'> 
        {suporticon}
       <div>
     <h2 className='text-lg text-[#111827] font-semibold font-poppins'>{SupportText}</h2>
     <p className='text-sm font-normal font-poppins text-primary'>{Supportp}</p>
     </div>
     </div>
   </>
    
    
    </>
  )
}

export default Singleservice