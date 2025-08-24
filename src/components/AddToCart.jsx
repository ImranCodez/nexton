import React, { useState } from "react";
import { Link } from "react-router";
import { IoMdClose } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";



const AddToCart = ({closeCart,cartimg,prodcutNm,price,Totall,Amount,CheckOut}) => {

const [close,setclose] = useState([])



const handleback =()=>{
   setclose(!close)
}



console.log(close)
  return (

    <div className={`relative`}>
      {/* ..............shadow div................. */}
      <div onClick={closeCart}  className={`w-full h-screen visible ${!close? 'invisible':'visible'}  bg-[#00000080] top-0 left-0  fixed`}></div>

      <div className={`ar w-[500px] h-screen fixed ${!close? 'invisible':'visible'} bg-white top-0 right-0 p-3`}>
         {/* ...........add to Cart header part...... */}
       <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold font-poppins text-secound flex items-center gap-1">
        Cart <TiShoppingCart className="text-1xl"/>
        </h1>
            <IoMdClose onClick={handleback}  className="text-xl hover:bg-primary hover:text-white w-[33px] h-[33px] duration-[.3s] rounded-full"/>
       </div>
         {/* .............................cart items........................ */}
        <div className="Allproducts flex flex-col mt-[20px] w-full h-[600px] overflow-y-scroll">
          {/* .............single product */}
          <div className="productimg_Name flex justify-between w-full">
             <div className="flex justify-between gap-2 mt-2">
            <img className="w-[70px] h-[77px] bg-[#000]" src={cartimg} alt="" />
            <h3 className="text-xl text-primary font-normal font-poppins">{prodcutNm}pants</h3>
           </div>
             <h2 className="text-xl font-normal font-poppins"> {price}$66</h2>
          </div>
             {/* .............single product */}
          <div className="productimg_Name flex justify-between w-full">
             <div className="flex justify-between gap-2 mt-2">
            <img className="w-[70px] h-[77px] bg-[#000]" src={cartimg} alt="" />
            <h3 className="text-xl text-primary font-normal font-poppins">yufyuf{prodcutNm}</h3>
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
