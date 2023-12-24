"use client";
import Slider from "react-slick";

const Brands = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className=" bg-[#0788ff1a] py-3 md:py-6 ">
        <div className="px-[30px] md:px-[100px] ">
          <Slider {...settings}>
            <div>
              <img
                className="object-cover h-[30px] md:h-[50px] w-[90%]"
                src="/icons/brand1.svg"
                alt="sddf"
              />
            </div>
            <div>
              <img
                className="object-cover h-[30px] md:h-[50px] w-[90%]"
                src="/icons/brand2.svg"
                alt="sddf"
              />
            </div>
            <div>
              <img
                className="object-cover h-[30px] md:h-[50px] w-[90%]"
                src="/icons/brand1.svg"
                alt="sddf"
              />
            </div>
            <div>
              <img
                className="object-cover h-[30px] md:h-[50px] w-[90%]"
                src="/icons/brand2.svg"
                alt="sddf"
              />
            </div>
            <div>
              <img
                className="object-cover h-[30px] md:h-[50px] w-[90%]"
                src="/icons/brand1.svg"
                alt="sddf"
              />
            </div>
            <div>
              <img
                className="object-cover h-[30px] md:h-[50px] w-[90%]"
                src="/icons/brand2.svg"
                alt="sddf"
              />
            </div>
            <div>
              <img
                className=" h-[30px] md:h-[50px] w-[90%]"
                src="/icons/Icon.svg"
                alt="sddf"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Brands;
