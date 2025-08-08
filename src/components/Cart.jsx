import React from "react";
import { Link } from "react-router";

const cart = (cartimg ,Cart,prodcutNm,price,Totall,Amount,CheckOut) => {
  return (

    <div className={`relative`}>
      <div className="w-full h-screen absolute bg-[#00000048] left-0 top-[20%]"></div>
      <div className="w-[500px] h-screen absolute bg-white top-0 right-0 p-3">
        <h1 className="text-3xl font-semibold font-poppins text-primary">
        {  Cart}
        </h1>
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

export default cart;
