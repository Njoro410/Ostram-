import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   className: "w-screen",
  // };
  return (
    <section className="mt-8 h-[700px] md:h-full dark:bg-gray-400 md:bg-white text-gray-800">
      <div className=" pb-6 mb-4 p-10 px-12">
        <h1 className="text-2xl md:text-4xl font-semibold drop-shadow-lg font-play text-center">
          What our <span className="text-orange-500">members</span> are saying
          about <span className="text-orange-500">us</span>
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        <div className="flex flex-col items-center px-2">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute top-0 left-7 md:left-0 w-4 h-8 md:w-8 text-orange-500"
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>
            <p className="px-6 py-1 text-lg italic ">
              Since I joined Ostram Sacco, I developed a saving culture that has
              benefited me in many ways. I was able to purchase my first car
              with their assistance. I highly recommend to everyone
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute bottom-0 right-7 md:right-0 w-4 h-8 md:w-8 text-orange-500"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </div>

          <span className="w-12 h-1 mb-1 mt-3 rounded-lg bg-orange-400"></span>

          <p className="text-lg md:text-2xl font-yanone">Jane Wangui</p>
        </div>
        <div className="flex flex-col items-center max-w-lg px-2 ">
          <div className="relative text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute top-0 md:left-0 left-4 w-4 h-8 md:w-8 text-orange-500"
            >
              <path
                fill="currentColor"
                d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
              ></path>
              <path
                fill="currentColor"
                d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
              ></path>
            </svg>
            <p className="px-6 py-1 text-lg italic ">
              Ostram sacco has stood with me in different times, after covid
              struck, my business almost closed but Ostram came knocking with
              solutions that saw my business stand and continue operating
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute bottom-0 md:right-0 right-12 w-4 h-8 md:w-8 text-orange-500"
            >
              <path
                fill="currentColor"
                d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
              ></path>
              <path
                fill="currentColor"
                d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
              ></path>
            </svg>
          </div>
          <span className="w-12 h-1 mb-1 mt-3 rounded-lg bg-orange-400"></span>
          <p className="text-lg md:text-2xl font-yanone">James Musau</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
