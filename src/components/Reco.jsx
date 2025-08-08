import React, { useEffect, useState } from "react";
import Singleproduct from "./common/Singleproduct";
import axios from "axios";

const Reco = () => {
  const [product, setproduct] = useState();

  // useEffect(() => {
  //   axios
  //     .get("https://api.escuelajs.co/api/v1/products")
  //     .then((res) => {
  //       setproduct(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);


      useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products");
        setproduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  console.log(product);

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
          {
            product.map()
          }
          <Singleproduct />
        </div>
      </section>
    </>
  );
};

export default Reco;
