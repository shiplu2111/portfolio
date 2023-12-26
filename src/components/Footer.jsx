const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col border-t-[1px] border-[#0788FF] bg-[#0788ff1a]">
        <div className="flex items-center justify-center pt-[15px] md:pt-5">
          <img
            className="h-6 sm:h-7 md:h-8 lg:h-9    object-cover"
            src="/logo.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center pt-[6px] md:pt-2 pb-[15px] md:pb-5 lg:pb-7 text-[12px] sm:text-[14px] md:text-[16px]   font-[400] leading-[30px] text-[#FFFFFF] tracking-[0.2px] text-center px-[60px]">
          Copyright ©2023. All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
