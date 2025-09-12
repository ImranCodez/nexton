import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { IoMdClose } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import axios from "axios";



const AddToCart = ({closeCart}) => {

const [close,setclose] = useState([])



const handleback =()=>{
   setclose(!close)
}

// ................cart data ...................//
  const [product, setproduct] = useState([]);
  const localids =JSON.parse(localStorage.getItem('productId')) 

useEffect(() => {
   // ...............localstorage id .............//
    
   axios
      .get(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => {
        setproduct(res.data)
    
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
   

      const Cartprduct=product.filter((item)=>{
         return localids.includes(item.id)  
  
      })
      // ................Reduce method  2 jinish niya kaj kore first is function and secound is initial number..............//
      const toalamount=Cartprduct.reduce((sum,item)=>{
        return sum + item.price
      },0)


      console.log(toalamount)

  return (

    <div className={`relative`}>
      {/* ..............shadow div................. */}
      <div onClick={closeCart}  className={`w-full h-screen  ${!close? 'invisible':'visisble'}  bg-[#00000080] top-0 left-0  fixed`}></div>

      <div className={` w-[500px] h-screen fixed ${!close? 'invisible':'visible'} bg-white top-0 right-0 p-3 z-40`}>
         {/* ...........add to Cart header part...... */}
       <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold font-poppins text-secound flex items-center gap-1">
            Cart <TiShoppingCart className="text-1xl"/>
        </h1>
            <IoMdClose onClick={handleback}  className="text-xl hover:bg-primary hover:text-white w-[33px] h-[33px] duration-[.3s] rounded-full"/>
       </div>
         {/* .............................cart items........................ */}
        <div className="Allproducts flex flex-col mt-[20px] w-full h-[600px]">
          {
            
            Cartprduct.map((item)=>(
              
              /* .............single product.................. */
          <div key={item.id} className="productimg_Name flex justify-between w-full  overflow-y-scroll">
             <div className="flex justify-between gap-2 mt-2">
            <img className="w-[70px] h-[77px] bg-[#000]" src={item.images} alt="cartimge" />
            <h3 className="text-xl text-primary font-normal font-poppins">{item.title}</h3>
           </div>
             <h2 className="text-xl font-normal font-poppins"> {item.price}$</h2>
          </div>
          ))

          }
             <div>

          <div className="flex items-center justify-between  mb-5 mt-8">
               <h2 className="text-2xl text-secound font-poppins  font-medium">Totall</h2>
               <h2  className="text-2xl text-secound font-poppins font-medium">{toalamount}$</h2>
            </div>
           

             <Link to={'/CheckOutpage'} className="w-full text-center  bg-secound text-white p-5  block rounded-2xl   duration-[.4s]">CheckOut</Link>

             </div>
        </div>
        
      </div>
    </div>
  );
};

export default AddToCart;
