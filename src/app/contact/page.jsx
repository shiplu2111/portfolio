import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="flex flex-col pt-[120px]  md:pt-[180px]  px-[16px] md:px-[82.5px] relative">
        <div>
          <div className="grid grid-cols-3 bg-[#05294A] border border-b-0 border-[#0788ff33] ">
            <div className="relative">
              <div className="absolute top-[50px] hidden xl:block  left-[45px] w-[300px] h-[320px] border border-gray-500 overflow-hidden bg-[#062949]">
                <img src="/shiplu1.png" className="object-cover " alt="" />
              </div>
            </div>
            <div className="col-span-3 xl:col-span-2   flex flex-col items-start justify-center py-[30px] xl:py-[49px]">
              <h1 className="text-[#FFF] font-[700] text-[30px] md:text-[36px] xl:text-[40px] px-4 xl:px-0">
                Let’s Discuss Your Project
              </h1>
              <p className="text-[#FFF] font-[500]  text-[14px] md:text-[16px] xl:text-[18px] leading-7  px-4 xl:px-0">
                Always available for freelancing if the right project comes
                along,
              </p>
              <p className="text-[#FFF] font-[500]  text-[14px] md:text-[16px] xl:text-[18px]  leading-7  px-4 xl:px-0">
                Feel free to contact me.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 bg-[#053057] border-[.5px] border-[#0788ff33] items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center px-12 col-span-3 xl:col-span-1">
              <div className="w-full flex flex-col items-start justify-start gap-2 pt-10 xl:pt-[190px]">
                <div className="flex items-start justify-start gap-2">
                  <div className="text-[#FFF] opacity-80 font-[600] text-[16px] leading-5 pt-2">
                    <FaEnvelope />
                  </div>
                  <div className="text-[#FFF] opacity-80 font-[600] text-[20px] leading-7">
                    shiplukst@gmail.com
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2">
                  <div className="text-[#FFF] opacity-80 font-[600] text-[16px] leading-5 pt-4 uppercase">
                    <FaPhoneAlt />
                  </div>
                  <div className="text-[#FFF] opacity-80 font-[600] text-[20px] leading-7 pt-2">
                    +8801711002919
                  </div>
                </div>
                <div className="flex items-start justify-start gap-2">
                  <div className="text-[#FFF] opacity-80 font-[600] text-[16px] leading-5 pt-4 uppercase">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="text-[#FFF] opacity-80 font-[600] text-[20px] leading-7 pt-2">
                    Shantidanga, Islamic University, Kushtia-7003 Bangladesh
                  </div>
                </div>

                <div className="pt-12 flex items-start justify-start gap-2 w-full">
                  <div className="w-[36px] h-[36px] md:w-[46px] md:h-[46px]  bg-[#3B5999] rounded-full border-2 border-[#FFFFFF] flex items-center justify-center hover:bg-transparent">
                    <FaFacebookF className="w-[14px] h-[14px] text-[#FFFFFF] hover:teansform duration-500 hover:scale-150 " />
                  </div>
                  <div className="w-[36px] h-[36px] md:w-[46px] md:h-[46px]  bg-[#0073B2] rounded-full border-2 border-[#FFFFFF] flex items-center justify-center hover:bg-transparent">
                    <FaLinkedinIn className="w-[14px] h-[14px] text-[#FFFFFF] hover:teansform duration-500 hover:scale-150 " />
                  </div>
                  <div className="w-[36px] h-[36px] md:w-[46px] md:h-[46px]  bg-[#5c94e7] rounded-full border-2 border-[#FFFFFF] flex items-center justify-center hover:bg-transparent">
                    <FaInstagram className="w-[14px] h-[14px] text-[#FFFFFF] hover:teansform duration-500 hover:scale-150 " />
                  </div>
                  <a href="https://github.com" target="_blank">
                    <div className="w-[36px] h-[36px] md:w-[46px] md:h-[46px]  bg-[#272727] rounded-full border-2 border-[#FFFFFF] flex items-center justify-center hover:bg-transparent">
                      <FaGithub className="w-[14px] h-[14px] text-[#FFFFFF] hover:teansform duration-500 hover:scale-150 " />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-3 xl:col-span-2   flex flex-col items-start justify-center py-[49px]">
              <div className="grid grid-cols-2 items-start justify-between gap-4 w-full px-5 xl:px-0 xl:pr-[10%]">
                <div className="w-full col-span-2 xl:col-span-1">
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
                <div className="w-full  col-span-2 xl:col-span-1">
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
                <div className="w-full col-span-2 flex items-center justify-center">
                  <button className="px-7 py-[10px] rounded-[40px] hover:bg-transparent border-2  w-full border-[#0788FF] hover:border-white hover:transform  duration-1000 bg-[#0788FF]  text-white text-[16px] font-[500] leading-[25.6px] tracking-[1px] uppercase">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-20 ">
          <iframe
            className="px-5 py-5 bg-[#05294A] w-full h-[300px] md:h-[500px] rounded-[20px]"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2171.753623070967!2d89.15081352860436!3d23.73169574738602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQzJzUxLjciTiA4OcKwMDgnNTkuNyJF!5e0!3m2!1sen!2sbd!4v1704041807041!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default page;
