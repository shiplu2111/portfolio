const Services = () => {
  return (
    <>
      <div className="flex items-center justify-start  ">
        <div className="px-[82.5px] py-[100px] flex flex-col items-start justify-start">
          <div className="flex items-start justify-start bg-[#0788FF33] rounded-[4px]">
            <div className="px-4 py-1 text-[#FFF] text-[16px] font-[400] leading-[20px] tracking-[4px] uppercase ">
              SERVICES
            </div>
          </div>
          <div className="flex items-center justify-center pt-3 text-[40px] font-[700] leading-[48px]  uppercase text-[#FFFFFF]">
            <span className="text-[#0788FF]">SERVICES-</span> I AM PROVIDING
          </div>
          <div className="grid grid-cols-4 gap-6 items-center justify-center pt-[52px] w-full">
            <div className="bg-[#FFF] rounded-[10px] px-[14px] py-[14px] flex flex-col items-start justify-center">
              <div>
                <img
                  className=" w-full object-cover rounded-[10px]"
                  src="/projects/project1.png"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-between w-full pr-1">
                <div className="flex flex-col ">
                  <div className="pt-5 flex items-start justify-start">
                    <div className="text-[20px] font-[700] leading-[24px] tracking-[1px]  text-[#040C16]">
                      Website Design
                    </div>
                  </div>
                  <div className="pt-[6.8px] flex items-start justify-center">
                    <div className="text-[14px] font-[400] leading-[22.4px] tracking-[1px]  text-[#707476]">
                      Web Design, App Design
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-items-end p-3 rounded-[50px] border-2 border-[#040C16] bg-[#0788FF] ">
                  <img src="/icons/icon.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
