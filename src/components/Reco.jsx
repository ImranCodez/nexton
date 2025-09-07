import React, { useEffect, useState } from "react";
import Singleproduct from "./common/Singleproduct";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import BredCrum from "./common/BredCrum";




const Reco = () => {
  const [product, setproduct] = useState([]);
  const [product2, setproduct2] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => {
        setproduct(res.data)
    
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(product)

  //     useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await axios.get("https://api.escuelajs.co/api/v1/products");
  //       setproduct(res.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // console.log(product);


// ..navigate...................//

const Navigate=useNavigate()

const handledetailse=(proinfo)=>{
  Navigate(`Details/${proinfo.id}`)
}


  return (
    <>
      <section id="Reco" className="mt-[88px]">
        <div className="container">
         
          <div className="flex justify-between">
            <h1 className="text-[38px] text-secound font-semibold font-poppins mb-[40px]">Recommendations.<span className="text-[38px] text-[#4B5563] font-poppins font-semibold">Best matching products for you</span></h1>
            <Link to={'Productpage'}  className=" w-[100px] h-[40px] rounded-sm flex text-secound text-base justify-center items-center bg-amber-700 hover:bg-primary duration-[.4s] scale-[1.07]  hover:text-[#fff]" > Explore now</Link>       

           </div>         
             <div className="flex justify-between flex-wrap mt-[10px]">
            {
            product.slice(0,4).map((items)=>(
              <Singleproduct Detailseclick={()=>handledetailse(items)} proimg={items.category.image} proName={items.title} proprice={items.price} />))
          }
          </div>
          </div>
        
          <div className="flex justify-center mt-10">
          
      
            
        </div>
      </section> 
    </>
  );
};

export default Reco;
