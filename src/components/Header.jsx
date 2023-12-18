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
            ? "fixed top-0 left-0  flex items-center justify-between px-[82.5px] py-5 z-30 bg-slate-900 w-screen transform duration-1500"
            : "fixed top-0 left-0 w-screen transform duration-1500 flex items-center justify-between px-[82.5px] py-5"
        }`}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="157"
            height="36"
            viewBox="0 0 157 36"
            fill="none"
          >
            <g clipPath="url(#clip0_1_898)">
              <path
                d="M48.3762 31.8194C45.6497 31.8194 43.4786 31.0745 41.863 29.5846C40.2725 28.0947 39.4773 26.0113 39.4773 23.3346V20.8346H44.4758V23.3346C44.4758 24.5214 44.804 25.4558 45.4604 26.1376C46.1168 26.7942 47.0382 27.1224 48.2247 27.1224C49.3355 27.1224 50.1938 26.7942 50.7997 26.1376C51.4309 25.481 51.7464 24.5467 51.7464 23.3346V9.31939H47.2023V4.77393H59.7744V9.31939H56.745V23.3346C56.745 26.0871 56.0002 28.1957 54.5108 29.6603C53.0213 31.0997 50.9764 31.8194 48.3762 31.8194Z"
                fill="white"
              />
              <path
                d="M63.8774 31.2891V4.77393H80.9178V9.31939H68.8759V15.6452H79.8575V20.1906H68.8759V26.7436H81.145V31.2891H63.8774Z"
                fill="white"
              />
              <path
                d="M84.8451 31.2891V4.77393H94.3499L99.6135 27.88H100.295V4.77393H105.218V31.2891H95.7131L90.4495 8.18302H89.7679V31.2891H84.8451Z"
                fill="white"
              />
              <path
                d="M110.214 31.2891V4.77393H119.718L124.982 27.88H125.664V4.77393H130.586V31.2891H121.082L115.818 8.18302H115.136V31.2891H110.214Z"
                fill="white"
              />
              <path
                d="M133.764 31.2891L140.732 4.77393H149.441L156.409 31.2891H151.259L149.82 25.4558H140.353L138.914 31.2891H133.764ZM141.527 20.8346H148.646L145.427 7.91787H144.746L141.527 20.8346Z"
                fill="white"
              />
              <path
                d="M32.5 0.796875H3.5C1.84315 0.796875 0.5 2.14002 0.5 3.79688V32.7969C0.5 34.4537 1.84315 35.7969 3.5 35.7969H32.5C34.1569 35.7969 35.5 34.4537 35.5 32.7969V3.79688C35.5 2.14002 34.1569 0.796875 32.5 0.796875Z"
                fill="#0788FF"
              />
              <path
                d="M19.4419 31.8194C22.1684 31.8194 24.3395 31.0745 25.9552 29.5846C27.5456 28.0947 28.3408 26.0113 28.3408 23.3346V20.8346H23.3423V23.3346C23.3423 24.5214 23.0141 25.4558 22.3577 26.1376C21.7014 26.7942 20.7799 27.1224 19.5934 27.1224C18.4826 27.1224 17.6243 26.7942 17.0184 26.1376C16.3873 25.481 16.0717 24.5467 16.0717 23.3346V9.31939L22.2067 19.6603L17.434 4.77393H8.04376V9.31939H11.0732V23.3346C11.0732 26.0871 11.8179 28.1957 13.3074 29.6603C14.7968 31.0997 16.8417 31.8194 19.4419 31.8194Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_898">
                <rect
                  width="156"
                  height="35"
                  fill="white"
                  transform="translate(0.5 0.796875)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex gap-[39.672px] items-center justify-center ">
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
        <div className="flex items-center justify-center">
          <button className="px-7 py-[10px] rounded-[40px] hover:bg-transparent border-2 border-[#0788FF] hover:border-white hover:transform  duration-1000 bg-[#0788FF]  text-white text-[16px] font-[500] leading-[25.6px] tracking-[1px] uppercase">
            Lets' Talk
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
