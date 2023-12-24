import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <>
      <div className="flex items-center justify-start">
        <div className="px-[10px] xl:px-[82.5px] py-[100px] flex flex-col items-start justify-start">
          <div className="flex items-start justify-start bg-[#0788FF33] rounded-[4px]">
            <div className="px-4 py-1 text-[#FFF] text-[16px] font-[400] leading-[20px] tracking-[4px] uppercase ">
              Blogs
            </div>
          </div>
          <div className="flex items-center justify-center pt-3 text-[40px] font-[700] leading-[48px]  uppercase text-[#FFFFFF]">
            Our Latest <span className="text-[#0788FF] pl-2">{" Blogs"} </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center justify-between pt-[48px] w-full ">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
