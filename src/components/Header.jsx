"use client";
import { useState, useEffect } from "react";
const Header = () => {
  //   const [mobileToggle, setMobileToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${
          scrolled
            ? "fixed top-0 left-0  flex items-center justify-between px-[16px] md:px-[82.5px] py-5 z-50 bg-slate-900 w-screen transform duration-1500"
            : "fixed top-0 left-0 w-screen transform duration-1500 flex items-center justify-between  px-[16px] md:px-[82.5px]  py-5 bg-gradient-to-r from-[#07233b] from-10% via-[#04192d] via-58%  to-[#050c16] to-90%"
        }`}
      >
        <div>
          <img className="h-[36px]" src="/logo.png" alt="" />
        </div>
        <div className="lg:flex gap-[39.672px] items-center justify-center hidden">
          <div className="text-[#FFFFFF] text-[14px] font-[500] leading-[22.4px] tracking-[1px] uppercase pb-[3px] relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FFFFFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-right">
            Home
          </div>
          <div className="text-[#FFFFFF] text-[14px] font-[500] leading-[22.4px] tracking-[1px] uppercase pb-[3px] relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FFFFFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-right">
            About Me
          </div>
          <div className="text-[#FFFFFF] text-[14px] font-[500] leading-[22.4px] tracking-[1px] uppercase pb-[3px] relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FFFFFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-right">
            Projects
          </div>

          <div className="text-[#FFFFFF] text-[14px] font-[500] leading-[22.4px] tracking-[1px] uppercase pb-[3px] relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FFFFFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-right">
            Services
          </div>

          <div className="text-[#FFFFFF] text-[14px] font-[500] leading-[22.4px] tracking-[1px] uppercase pb-[3px] relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FFFFFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-right">
            Contact
          </div>
        </div>
        <div className="md:flex hidden items-center justify-center">
          <button className="px-7 py-[10px] rounded-[40px] hover:bg-transparent border-2 border-[#0788FF] hover:border-white hover:transform  duration-1000 bg-[#0788FF]  text-white text-[16px] font-[500] leading-[25.6px] tracking-[1px] uppercase">
            Lets' Talk
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
