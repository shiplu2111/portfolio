"use client";
import { TypeAnimation } from "react-type-animation";
const AboutMe = () => {
  return (
    <>
      <div className="flex items-center justify-center px-[52px] py-[53px] relative">
        <div className="absolute bottom-[20px] left-[52px] animate-spin-medium">
          <img src="/icons/Vector1.svg" alt="" />
        </div>
        <div className="absolute top-[80px] right-[62px] animate-spin-medium ">
          <img className="h-[150px]" src="/icons/Vector1.svg" alt="" />
        </div>
        <div className="z-20 grid grid-cols-2 items-start justify-center gap-[60px] pt-[48px] px-[120px]">
          <div className="flex items-center justify-center border border-gray-500  rounded-[20px] bg-[#1E364C]">
            <img className="h-[554px] " src="/shiplu2.png" alt="" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="flex items-center justify-center bg-[#0788ff33] rounded-[4px]">
              <div className="px-5 py-1 text-[#FFF] text-[16px] font-[400] leading-[20px] tracking-[4px] uppercase">
                About Me
              </div>
            </div>
            <div className="flex items-start justify-start ">
              <div className="pt-5 text-[#FFF] text-[40px] font-[700] leading-[48px]  uppercase">
                I AM AVAILABLE FOR
              </div>
            </div>
            <div className="flex items-start justify-start ">
              <div className="pt-1 text-[#0788FF] text-[40px] font-[700] leading-[48px]  uppercase">
                <TypeAnimation
                  sequence={[
                    "Web Development",
                    3000,
                    "Web Design",
                    3000,
                    "Figma To Html",
                    3000,
                    "PSD To Html",
                    3000,
                    "XD To Html",
                    3000,
                  ]}
                  speed={0}
                  repeat={Infinity}
                />
              </div>
            </div>
            <div className="flex items-start justify-start ">
              <div className="pt-1 text-[#FFF] text-[40px] font-[700] leading-[48px]  uppercase">
                Projects
              </div>
            </div>
            <div className="flex items-start justify-start">
              <div className="pt-[25px] text-[#FFF] text-[16px] font-[400]   text-justify">
                I have successfully delivered web applications that not only
                meet clients' requirements but also provide exceptional user
                experiences. I'm a firm believer in staying up-to-date with the
                latest industry trends and technologies, which allows me to
                create cutting-edge and future-proof solutions. I am highly
                collaborative and enjoy working in diverse teams, whether it's
                with designers, other developers, or project managers.
              </div>
            </div>
            <div className="pt-[25px] flex items-center justify-between gap-6">
              <div className="flex flex-col items-center justify-center px-[21px] py-[20px] bg-[#112539]  rounded-[8px]">
                <div className="text-[28px] font-[500] leading-[33.6px] text-[#FFFFFF]">
                  40+
                </div>
                <div className="text-[13px] font-[400] pt-3 leading-[16.9px] text-[#FFFFFF]">
                  Happy Clients
                </div>
              </div>
              <div className="flex flex-col items-center justify-center px-[21px] py-[20px] bg-[#112539]  rounded-[8px]">
                <div className="text-[28px] font-[500] leading-[33.6px] text-[#FFFFFF]">
                  70+
                </div>
                <div className="text-[13px] font-[400] pt-3 leading-[16.9px] text-[#FFFFFF]">
                  Positive Reviews
                </div>
              </div>
              <div className="flex flex-col items-center justify-center px-[21px] py-[20px] bg-[#112539]  rounded-[8px]">
                <div className="text-[28px] font-[500] leading-[33.6px] text-[#FFFFFF]">
                  5+
                </div>
                <div className="text-[13px] font-[400] pt-3 leading-[16.9px] text-[#FFFFFF]">
                  Years Experience
                </div>
              </div>
            </div>
            <div className="pt-[35px] flex items-start justify-center">
              <div className="flex items-center justify-center">
                <button className="flex items-center justify-center gap-[10px] px-8 py-[14px] bg-[#0788FF] text-[#FFFFFF] rounded-[40px] border-[2px] border-[#0788FF] hover:bg-transparent hover:border-[#FFFFFF] transform duration-500">
                  Get in touch{" "}
                  <span>
                    <img src="/icons/icon.svg" alt="" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
