import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-col pt-[90px]  md:pt-[150px]  px-[16px] md:px-[82.5px] ">
        <div className="grid grid-cols-3 bg-[#05294A] border border-b-0 border-[#0788ff33]">
          <div className=""></div>
          <div className="col-span-2  flex flex-col items-start justify-center py-[49px]">
            <h1 className="text-[#FFF] font-[700] text-[40px] ">
              Let’s Discuss Your Project
            </h1>
            <p className="text-[#FFF] font-[500] text-[18px] leading-7">
              Always available for freelancing if the right project comes along,
            </p>
            <p className="text-[#FFF] font-[500] text-[18px] leading-7">
              Feel free to contact me.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 bg-[#053057] border-[.5px] border-[#0788ff33]">
          <div className=""></div>
          <div className="col-span-2  flex flex-col items-start justify-center py-[49px]">
            <div className="grid grid-cols-2 items-start justify-between gap-4 w-full pr-[10%]">
              <div className="w-full">
                <label className="text-[#FFF] font-[400] text-[13px] leading-5 uppercase">
                  Your Name
                </label>
                <div className="pt-2 ">
                  <input
                    className="w-full h-[44px] border border-[#0788ff33] focus:border-0 text-gray-500 font-[500] text-[16px] leading-7 bg-[#ffffff0d] px-[15px]  placeholder:text-gray-500 placeholder:font-[500] placeholder:text-[16px] placeholder:leading-7  rounded-md"
                    placeholder="Name *"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="text-[#FFF] font-[400] text-[13px] leading-5">
                  YOUR EMAIL
                </label>
                <div className="pt-2 ">
                  <input
                    className="w-full h-[44px] border border-[#0788ff33] focus:border-0 text-gray-500 font-[500] text-[16px] leading-7 bg-[#ffffff0d] px-[15px]  placeholder:text-gray-500 placeholder:font-[500] placeholder:text-[16px] placeholder:leading-7  rounded-md"
                    placeholder=" Email *"
                  />
                </div>
              </div>
              <div className="w-full col-span-2">
                <label className="text-[#FFF] font-[400] text-[13px] leading-5 uppercase">
                  SUBJECT
                </label>
                <div className="pt-2 ">
                  <input
                    className="w-full h-[44px] border border-[#0788ff33] rounded-md focus:border-0 text-gray-500 font-[500] text-[16px] leading-7 bg-[#ffffff0d] px-[15px]  placeholder:text-gray-500 placeholder:font-[500] placeholder:text-[16px] placeholder:leading-7"
                    placeholder="Subject *"
                  />
                </div>
              </div>

              <div className="w-full col-span-2">
                <label className="text-[#FFF] font-[400] text-[13px] leading-5 uppercase">
                  SUBJECT
                </label>
                <div className="pt-2 ">
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    className="w-full  border border-[#0788ff33] rounded-md focus:border-0 text-gray-500 font-[500] text-[16px] leading-7 bg-[#ffffff0d] px-[15px]  placeholder:text-gray-500 placeholder:font-[500] placeholder:text-[16px] placeholder:leading-7"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
