const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col border-t-[1px] border-[#0788FF] bg-[#0788ff1a]">
        <div className="flex items-center justify-center pt-[20px]">
          <img className="h-[46px]" src="/logo.png" alt="" />
        </div>
        <div className="flex items-center justify-center pt-[10px] pb-[30px] text-[20px] font-[400] leading-[30px] text-[#FFFFFF] tracking-[0.2px] text-center px-[60px]">
          Copyright ©2023. All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
