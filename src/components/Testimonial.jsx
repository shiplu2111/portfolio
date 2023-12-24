"use client";
import Slider from "react-slick";
const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <button
        style={{
          background: "transparent",
          border: "1px solid #fff",
          borderRadius: "8px",
          cursor: "pointer",
          display: "inline-block",
          height: "10px",
          margin: "0 4px",
          overflow: "hidden",
          position: "relative",
          transition: "all .55s ease",
          verticalAlign: "top",
          width: "10px",
          top: "30px", // Adjust the top position to move the dots down
        }}
      >
        {/* You can customize the dot content here if needed */}
      </button>
    ),
  };

  return (
    <>
      <div className="bg-[#0788ff1a] overflow-hidden  flex flex-col items-center justify-center px-[22.5px] md:px-[83px] py-[70px] relative ">
        <div className="absolute top-[30%] left-[30px] animate-bounce">
          <img
            className="h-16 w-16 object-cover"
            src="/icons/Image.png"
            alt=""
          />
        </div>
        <div className="absolute top-[25%] md:right-[-250px] right-[-60px]">
          <img
            className="md:h-[400px]  h-[120px] object-cover opacity-50"
            src="/icons/Vector1.svg"
            alt=""
          />
        </div>
        <div className="text-[16px] font-[400] leading-[20px] tracking-[4px]  text-[#FFFFFF] bg-[#0788FF33] px-[15px] py-[5px] rounded-[4px]">
          Testimonial
        </div>

        <div className="text-[40px] font-[700] leading-[48px]  text-[#FFFFFF] pt-4">
          Over <span className="text-[#0788FF] animate-pulse ">50+</span>
        </div>
        <div className="text-[40px] font-[700] leading-[48px]  text-[#FFFFFF] pt-4">
          PEOPLE TRUST ME
        </div>

        <div className="w-[100%] pt-[30px]">
          <Slider {...settings}>
            <div>
              <div className="flex items-center justify-center flex-col ">
                <div className="pt-2">
                  <img
                    class="object-cover mx-2 rounded-full w-[100px] shrink-0 h-[100px] ring-8 ring-[#36495C] dark:ring-gray-700 "
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />
                </div>
                <div className="pt-5">
                  {" "}
                  <div className="pt-[20px] pr-8 flex items-center justify-center text-[20px] font-[400] leading-[30px] text-[#FFFFFF] tracking-[0.2px] text-center px-[60px]">
                    👋 I am a dedicated and experienced web developer with a
                    passion for crafting robust and efficient digital solutions.
                    With a strong academic foundation in Computer Science and
                    Engineering and over 6 years of professional experience,
                    I've honed my skills to become proficient in both backend
                    and frontend development.
                  </div>
                </div>
                <div className="pt-[33px]">
                  <div className="flex items-center justify-center text-[20px] font-[500] leading-[24px] text-[#FFFFFF] uppercase">
                    Pamela Anders
                  </div>
                </div>

                <div className="pt-[20px]">
                  <div className="flex items-center justify-center text-[16px] font-[400] leading-[20px] text-[#FFFFFF] opacity-50">
                    Company Name
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center flex-col ">
                <div className="pt-2">
                  <img
                    class="object-cover mx-2 rounded-full w-[100px] shrink-0 h-[100px] ring-8 ring-[#36495C] dark:ring-gray-700 "
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />
                </div>
                <div className="pt-5">
                  {" "}
                  <div className="pt-[20px] pr-8 flex items-center justify-center text-[20px] font-[400] leading-[30px] text-[#FFFFFF] tracking-[0.2px] text-center px-[60px]">
                    👋 I am a dedicated and experienced web developer with a
                    passion for crafting robust and efficient digital solutions.
                    With a strong academic foundation in Computer Science and
                    Engineering and over 6 years of professional experience,
                    I've honed my skills to become proficient in both backend
                    and frontend development.
                  </div>
                </div>
                <div className="pt-[33px]">
                  <div className="flex items-center justify-center text-[20px] font-[500] leading-[24px] text-[#FFFFFF] uppercase">
                    Pamela Anders
                  </div>
                </div>

                <div className="pt-[20px]">
                  <div className="flex items-center justify-center text-[16px] font-[400] leading-[20px] text-[#FFFFFF] opacity-50">
                    Company Name
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
