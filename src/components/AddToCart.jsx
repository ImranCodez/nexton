import React from "react";
import { Link } from "react-router";

const AddToCart = ({closeCart}) => {


const handle =()=>{
   
    console.log(' hello miss')
}

  return (

    <div className={`relative`}>
      {/* ..............shadow div................. */}
      <div onClick={handle} className={`w-full h-screen  bg-[#64565631] left-0 top-[0%] fixed`}></div>
      <div className="w-[500px] h-screen absolute bg-white top-0 right-0 p-3">
         {/* ...........add to Cart header part...... */}
       <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold font-poppins text-primary">
        {  Cart}efvhdovkn
        </h1>
             <div>plgkelpgkmlm,</div>
       </div>
         {/* .............................cart items........................ */}
        <div className="Allproducts flex flex-col mt-[20px] w-full h-[600px] overflow-y-scroll">
          {/* .............single product */}
          <div className="productimg_Name flex justify-between w-full">
             <div className="flex justify-between gap-2 mt-2">
            <img className="w-[70px] h-[77px] bg-[#000]" src={cartimg} alt="" />
            <h3 className="text-xl text-primary font-normal font-poppins">{prodcutNm}</h3>
           </div>
             <h2 className="text-xl font-normal font-poppins"> {price}</h2>
          </div>
             {/* .............single product */}
          <div className="productimg_Name flex justify-between w-full">
             <div className="flex justify-between gap-2 mt-2">
            <img className="w-[70px] h-[77px] bg-[#000]" src={cartimg} alt="" />
            <h3 className="text-xl text-primary font-normal font-poppins">{prodcutNm}</h3>
           </div>
             <h2 className="text-xl font-normal font-poppins"> {price}</h2>
          </div>   {/* .............single product */}
          <div className="productimg_Name flex justify-between w-full">
             <div className="flex justify-between gap-2 mt-2">
            <img className="w-[70px] h-[77px] bg-[#000]" src={cartimg} alt="" />
            <h3 className="text-xl text-primary font-normal font-poppins">{prodcutNm}</h3>
           </div>
             <h2 className="text-xl font-normal font-poppins"> {price}</h2>
          </div>   {/* .............single product */}
          <div className="productimg_Name flex justify-between w-full">
             <div className="flex justify-between gap-2 mt-2">
            <img className="w-[70px] h-[77px] bg-[#000]" src={cartimg} alt="" />
            <h3 className="text-xl text-primary font-normal font-poppins">{prodcutNm}</h3>
           </div>
             <h2 className="text-xl font-normal font-poppins"> {price}</h2>
          </div>   {/* .............single product */}
          <div className="productimg_Name flex justify-between w-full">
             <div className="flex justify-between gap-2 mt-2">
            <img className="w-[70px] h-[77px] bg-[#000]" src={cartimg} alt="" />
            <h3 className="text-xl text-primary font-normal font-poppins">{prodcutNm}</h3>
           </div>
             <h2 className="text-xl font-normal font-poppins"> {price}</h2>
          </div>   {/* .............single product */}
          <div className="productimg_Name flex justify-between w-full">
             <div className="flex justify-between gap-2 mt-2">
            <img className="w-[70px] h-[77px] bg-[#000]" src={cartimg} alt="" />
            <h3 className="text-xl text-primary font-normal font-poppins">{prodcutNm}</h3>
           </div>
             <h2 className="text-xl font-normal font-poppins"> {price}</h2>
          </div>   {/* .............single product */}
          <div className="productimg_Name flex justify-between w-full">
             <div className="flex justify-between gap-2 mt-2">
            <img className="w-[70px] h-[77px] bg-[#000]" src={cartimg} alt="" />
            <h3 className="text-xl text-primary font-normal font-poppins">{prodcutNm}</h3>
           </div>
             <h2 className="text-xl font-normal font-poppins"> {price}</h2>
          </div>   {/* .............single product */}
          <div className="productimg_Name flex justify-between w-full">
             <div className="flex justify-between gap-2 mt-2">
            <img className="w-[70px] h-[77px] bg-[#000]" src={cartimg} alt="" />
            <h3 className="text-xl text-primary font-normal font-poppins">{prodcutNm}</h3>
           </div>
             <h2 className="text-xl font-normal font-poppins"> {price}</h2>
          </div>   {/* .............single product */}
          <div className="productimg_Name flex justify-between w-full">
             <div className="flex justify-between gap-2 mt-2">
            <img className="w-[70px] h-[77px] bg-[#000]" src={cartimg} alt="" />
            <h3 className="text-xl text-primary font-normal font-poppins">{prodcutNm}</h3>
           </div>
             <h2 className="text-xl font-normal font-poppins"> {price}</h2>
          </div>   {/* .............single product */}
          <div className="productimg_Name flex justify-between w-full">
             <div className="flex justify-between gap-2 mt-2">
            <img className="w-[70px] h-[77px] bg-[#000]" src={cartimg} alt="" />
            <h3 className="text-xl text-primary font-normal font-poppins">{prodcutNm}</h3>
           </div>
             <h2 className="text-xl font-normal font-poppins"> {price}</h2>
          </div>
          
        </div>
            <div className="flex items-center justify-between mb-5 mt-8">
               <h2 className="text-2xl text-secound font-poppins font-medium">{Totall}</h2>
               <h2  className="text-2xl text-secound font-poppins font-medium">{Amount}</h2>
            </div>
        <Link className="w-full text-center py-5 rounded-3xl bg-secound  text-white inline-block align-middle hover:scale-[1.1] duration-[.4s]">{CheckOut}</Link>
      </div>
    </div>
  );
};

export default AddToCart;
