"use client";
import { useState, useEffect } from "react";
import { FiAlignRight } from "react-icons/fi";
import { MdCall, MdEmail } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import StickyNav from "./StickyNav";
const Header = () => {
  //   const [mobileToggle, setMobileToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 10) {
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
            ? "fixed top-0 left-0  flex items-center justify-between px-[16px] md:px-[82.5px] py-5 z-50 bg-slate-900 w-screen transform duration-1500 shadow-md shadow-slate-800"
            : "fixed top-0 left-0 w-screen transform duration-1500 flex items-center justify-between  px-[16px] md:px-[82.5px]  py-5 bg-gradient-to-r from-[#07233b] from-10% via-[#04192d] via-58%  to-[#050c16] to-90%"
        }`}
      >
        <div>
          <img className="h-[36px]" src="/logo.png" alt="" />
        </div>
        <div className="lg:flex gap-[39.672px] items-center justify-center hidden">
          <div className="text-[#FFFFFF] text-[14px] font-[500] leading-[22.4px] tracking-[1px] uppercase pb-[3px] relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FFFFFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-right">
            <Link href="/">Home</Link>
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
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="lg:flex hidden items-center justify-center">
          <button className="px-7 py-[10px] rounded-[40px] hover:bg-transparent border-2 border-[#0788FF] hover:border-white hover:transform  duration-1000 bg-[#0788FF]  text-white text-[16px] font-[500] leading-[25.6px] tracking-[1px] uppercase">
            Lets' Talk
          </button>
        </div>
        <div className="flex lg:hidden items-center justify-center">
          <div
            onClick={() => setShowNav(!showNav)}
            className=" lg:hidden px-[8px] py-[8px] rounded-full hover:bg-transparent border-2  border-[#0788FF] cursor-pointer text-[#0788FF] text-[20px] font-[500] leading-[25.6px] tracking-[1px] hover:transection duration-2000  z-[1600]"
          >
            {showNav ? <AiOutlineClose /> : <FiAlignRight />}
          </div>
        </div>
        <div
          className={`${
            showNav ? "right-0" : "right-[-200vw] "
          } border-t-[.5px]  border-[#3b3f42] z-100 fixed top-[80px] block lg:hidden transform duration-700 w-[100%]  h-screen  bg-gradient-to-r  from-gray-800 from-10% via-gray-900 via-58%  to-gray-950 to-90% `}
        >
          <div>
            <div className="flex items-center justify-center flex-col gap-5 pt-5">
              <div className="text-[#FFFFFF] text-[14px] font-[700] leading-[22.4px] tracking-[1px] uppercase pb-[3px] relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FFFFFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-700 after:origin-right">
                <Link href="/" onClick={() => setShowNav(false)}>
                  Home
                </Link>
              </div>
              <div className="text-[#FFFFFF] text-[14px] font-[700] leading-[22.4px] tracking-[1px] uppercase pb-[3px] relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FFFFFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-700 after:origin-right">
                About Me
              </div>
              <div className="text-[#FFFFFF] text-[14px] font-[700] leading-[22.4px] tracking-[1px] uppercase pb-[3px] relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FFFFFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-right">
                Projects
              </div>

              <div className="text-[#FFFFFF] text-[14px] font-[700] leading-[22.4px] tracking-[1px] uppercase pb-[3px] relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FFFFFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-right">
                Services
              </div>

              <div className="text-[#FFFFFF] text-[14px] font-[700] leading-[22.4px] tracking-[1px] uppercase pb-[3px] relative  block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FFFFFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-right">
                <Link href="/contact" onClick={() => setShowNav(false)}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-8 flex items-center justify-center gap-5 flex-col">
            <div className="flex items-center justify-center text-[20px]  font-[500] leading-[28px]  uppercase text-[#FFFFFF] bg-[#0788FF33] px-[15px] py-[3px] rounded-[4px]">
              Follow Me
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
            <div className="flex items-center justify-center gap-2 pt-3">
              <div className=" md:h-[46px]  rounded-full  flex items-center justify-center hover:bg-transparent">
                <MdCall className="w-[24px] h-[24px] text-[#FFFFFF] hover:teansform duration-500 hover:scale-150 " />
              </div>
              <div className="text-[#FFFFFF] text-[14px] font-[700] leading-[22.4px] tracking-[1px] uppercase pb-[3px] relative  block ">
                +8801711002919
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className=" md:h-[46px]  rounded-full  flex items-center justify-center hover:bg-transparent">
                <MdEmail className="w-[24px] h-[24px] text-[#FFFFFF] hover:teansform duration-500 hover:scale-150 " />
              </div>
              <div className="text-[#FFFFFF] text-[14px] font-[700] leading-[22.4px] tracking-[1px] lowercase pb-[3px] relative  block ">
                shiplukst@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
