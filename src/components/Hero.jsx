"use client";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-center px-[16px] md:px-[82.5px] pt-[80px]  md:pt-[60px]">
        <div className="flex flex-col items-start  justify-center pb-[10px] md:pb-[50px]">
          <div className="flex rounded-[4px] px-[13px] py-[5px] bg-[#0788ff33] uppercase text-[16px] font-[400] leading-[20px] traking-[4px] text-[#fff]">
            Md Enzamamul Haque Shiplu
          </div>
          <div className="pt-2 text-[40px] md:text-[60px] font-[700]  leading-[40px] md:leading-[60px] uppercase text-[#FFFFFF]">
            Fullstake
          </div>
          <div className="pt-2 text-[40px] md:text-[60px]  font-[700]  leading-[40px] md:leading-[60px] uppercase text-[#FFFFFF]">
            Web Developer
          </div>
          <div className="flex rounded-[4px] px-[13px] mt-4 py-[5px] bg-[#0788ff33] uppercase text-[16px] font-[400] leading-[20px] traking-[4px] text-[#fff]">
            expertise
          </div>
          <div className="text-[40px] md:text-[60px]  font-[700] leading-[60px] uppercase text-[#0788FF]">
            <TypeAnimation
              sequence={[
                "Laravel",
                3000,
                "Next.js",
                3000,
                "React.js",
                3000,
                "Tailwind css",
                3000,
                "Bootstrap",
                3000,
              ]}
              speed={0}
              repeat={Infinity}
            />
          </div>
          <div className="pt-[31px] pr-8 flex items-start justify-center text-[16px] md:text-[20px] text-justify font-[400] leading-[30px] text-[#FFFFFF] tracking-[0.2px]">
            👋 I am a dedicated and experienced web developer with a passion for
            crafting robust and efficient digital solutions. With a strong
            academic foundation in Computer Science and Engineering and over 6
            years of professional experience, I've honed my skills to become
            proficient in both backend and frontend development.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full  pt-[33px] gap-6">
            <div className="flex items-center justify-center">
              <button className="flex items-center justify-center gap-[10px] px-3 md:px-8 py-2 md:py-[14px] bg-[#0788FF] text-[#FFFFFF] rounded-[40px] border-[2px] border-[#0788FF] hover:bg-transparent hover:border-[#FFFFFF] transform duration-500">
                Get in touch{" "}
                <span>
                  <img src="/icons/icon.svg" alt="" />
                </span>
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
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
        <div className="flex items-center justify-center">
          <img
            className="object-cover h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
            src="/shiplu1.webp"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
