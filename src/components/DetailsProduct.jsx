import React from "react";

const DetailsProduct = ({ mainimg }) => {
  console.log(mainimg)
  return (
    <> rounded-[7px]
      <div className="h-[804px] w-[690px] gap-1.5  flex  ">
    
          <div className="w-[140px] h-[600px] mt-1.5 ">
            <div className="w-full h-[155px]  rounded-[16px] mb-[16px]">
               <img className=" h-full rounded-[7px] w-fit " src={mainimg[0]} alt="subiamge" />
            </div>
           
            <div className="w-full h-[155px]  mb-[16px]">
              <img className="w-fit h-full rounded-[7px]" src={mainimg[1]} alt="subiamge" />
            </div>
            <div className="w-full h-[155px] mb-[16px]">
              <img className="w-full h-full rounded-[7px]" src={mainimg[2]} alt="subiamge" />
            </div>
            <div className="w-full h-[155px]   mb-[16px]">
              <img className="w-full h-full  rounded-[7px]" src={mainimg[0]} alt="subiamge" />
            </div>
        </div>
        <div className="w-full h-[690px]   ">
          <img className="w-full h-full   rounded-[7px]" src={mainimg} alt="subiamge" />
           
        </div>
      </div>
    </>
  );
};

export default DetailsProduct;
