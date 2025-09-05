import React from "react";

const DetailsProduct = ({ mainimg }) => {
  return (
    <>
      <div className="h-[804px] w-[690px]  ">
        <div className="w-full h-[690px] bg-amber-200 ">
          <img src={mainimg[0]} alt="" />
        </div>
        <div className="flex justify-between">
          <div className="w-[140px] h-full bg-red-600">
            <img
              className="w-full h-[155px] bg-[#0EA5E9] rounded-[16px] mb-[16px]"
              src={mainimg[1]}
              alt=""
            />
            <div className="w-full h-[155px] bg-[#0EA5E9] rounded-[16px] mb-[16px]">
              tgert
            </div>
            <div className="w-full h-[155px] bg-[#0EA5E9] rounded-[16px] mb-[16px]">
              tgert
            </div>
            <div className="w-full h-[155px] bg-[#0EA5E9] rounded-[16px] mb-[16px]">
              tgert
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsProduct;
