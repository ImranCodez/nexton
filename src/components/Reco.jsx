import React, { useEffect, useState } from "react";
import Singleproduct from "./common/Singleproduct";
import axios from "axios";
import { Link } from "react-router";
import Recomondation from "../pages/Recomondation";

const Reco = () => {
  const [product, setproduct] = useState([]);
  const [product2, setproduct2] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


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
console.log(product2)
  return (
    <>
      <section id="Reco" className="mt-[88px]">
        <div className="container">
          <h1 className="text-[38px] text-secound font-semibold font-poppins mb-[40px]">
            Recommendations.{" "}
            <span className="text-[38px] text-[#4B5563] font-poppins font-semibold">
              {" "}
              Best matching products for you
            </span>
          </h1>
          <div className="flex justify-between flex-wrap mt-[10px]">
            {
            product.slice(0,4).map((items)=>(
              <Singleproduct proimg={items.category.image} proName={items.title} proprice={items.price} />))
          }
          </div>
          <div className="flex justify-center mt-10">
            <Link to={'/'}  onClick={()=>setproduct2(!product2)} className="p-4 bg-secound text-white text-xlm rounded-sm hover:bg-[aqua] hover:text-secound duration-75 scale-[1.07] " >See More</Link>
          </div>
            
                <Recomondation/> 
        </div>
      </section>
    </>
  );
};

export default Reco;
