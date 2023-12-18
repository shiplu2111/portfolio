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
      <div className="grid grid-cols-2  items-center justify-center px-[82.5px] pt-[60px]">
        <div className="flex flex-col items-start justify-center">
          <div className="flex rounded-[4px] px-[13px] py-[5px] bg-[#0788ff33] uppercase text-[16px] font-[400] leading-[20px] traking-[4px] text-[#fff]">
            Md Enzamamul Haque Shiplu
          </div>
          <div className="pt-2 text-[60px] font-[700] leading-[60px] uppercase text-[#FFFFFF]">
            Fullstake
          </div>
          <div className="pt-2 text-[60px] font-[700] leading-[60px] uppercase text-[#FFFFFF]">
            Web Developer
          </div>
          <div className="flex rounded-[4px] px-[13px] mt-4 py-[5px] bg-[#0788ff33] uppercase text-[16px] font-[400] leading-[20px] traking-[4px] text-[#fff]">
            expertise
          </div>
          <div className="text-[60px] font-[700] leading-[60px] uppercase text-[#0788FF]">
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
          <div className="pt-[31px] pr-8 flex items-start justify-center text-[20px] font-[400] leading-[30px] text-[#FFFFFF] tracking-[0.2px]">
            👋 I am a dedicated and experienced web developer with a passion for
            crafting robust and efficient digital solutions. With a strong
            academic foundation in Computer Science and Engineering and over 6
            years of professional experience, I've honed my skills to become
            proficient in both backend and frontend development.
          </div>
          <div className="flex items-center justify-between pt-[33px] gap-6">
            <div className="flex items-center justify-center">
              <button className="flex items-center justify-center gap-[10px] px-8 py-[14px] bg-[#0788FF] text-[#FFFFFF] rounded-[40px] border-[2px] border-[#0788FF] hover:bg-transparent hover:border-[#FFFFFF] transform duration-500">
                Get in touch{" "}
                <span>
                  <img src="/icons/icon.svg" alt="" />
                </span>
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-[46px] h-[46px]  bg-[#3B5999] rounded-full border-2 border-[#FFFFFF] flex items-center justify-center hover:bg-transparent">
                <FaFacebookF className="w-[14px] h-[14px] text-[#FFFFFF] hover:teansform duration-500 hover:scale-150 " />
              </div>
              <div className="w-[46px] h-[46px]  bg-[#0073B2] rounded-full border-2 border-[#FFFFFF] flex items-center justify-center hover:bg-transparent">
                <FaLinkedinIn className="w-[14px] h-[14px] text-[#FFFFFF] hover:teansform duration-500 hover:scale-150 " />
              </div>
              <div className="w-[46px] h-[46px]  bg-[#5c94e7] rounded-full border-2 border-[#FFFFFF] flex items-center justify-center hover:bg-transparent">
                <FaInstagram className="w-[14px] h-[14px] text-[#FFFFFF] hover:teansform duration-500 hover:scale-150 " />
              </div>
              <a href="https://github.com" target="_blank">
                <div className="w-[46px] h-[46px]  bg-[#272727] rounded-full border-2 border-[#FFFFFF] flex items-center justify-center hover:bg-transparent">
                  <FaGithub className="w-[14px] h-[14px] text-[#FFFFFF] hover:teansform duration-500 hover:scale-150 " />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img className="h-[677.19] z-10" src="/shiplu1.png" />
        </div>
      </div>
    </>
  );
};

export default Hero;
