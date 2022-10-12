import React from "react";
import { Carousel } from "react-responsive-carousel";

const WhoWeAre = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-2 mt-6">
      <section>
        <h1 className="text-4xl px-8">About Ostram Traders Sacco</h1>
        <p className="text-justify px-8 py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          similique ea porro expedita qui? Accusantium distinctio pariatur quo
          aliquid officiis rerum, debitis assumenda totam rem, perferendis
          molestiae, excepturi facere eum?
        </p>
        <p className="text-justify px-8 py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          similique ea porro expedita qui? Accusantium distinctio pariatur quo
          aliquid officiis rerum, debitis assumenda totam rem, perferendis
          molestiae, excepturi facere eum?
        </p>
        <a
          href="#_"
          className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
        >
          <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            Button Text
          </span>
        </a>
      </section>
      <section>
        <Carousel>
          <div className="relative">
            <img
              className=""
              src="https://taxplanningideas.com/wp-content/uploads/2021/12/4.png"
            />
          </div>
          <div className="relative">
            <img src="https://taxplanningideas.com/wp-content/uploads/2021/12/4.png" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://taxplanningideas.com/wp-content/uploads/2021/12/4.png" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default WhoWeAre;
