import React from "react";
import { Carousel } from "react-responsive-carousel";
import logo from "../images/moneygrow.jpg"
// import Swiper from 'react-id-swiper';

const Blogs = () => {

  return (
    <section className="py-6 bg-slate-200 sm:py-12  dark:bg-gray-800 dark:text-gray-100">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold font-play">Latest from the <span className="text-orange-500">blog</span> </h2>
          <p className=" text-lg md:text-2xl font-yanone dark:text-gray-400">
            Read the latest news on matters SACCOs and activities around Ostram
            Sacco
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 md:hidden">
          <Carousel showThumbs={false} showArrows={false} autoPlay={true} infiniteLoop={true}>
        
          
          <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src={logo}
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                  >
                    Info
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Why you should join a sacco
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 1, 2020</span>
                    <span>Read More</span>
                  </div>
                </div>
              </article>

         
              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src={logo}
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                  >
                    Meeting
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    5th Annual General Meeting
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 2, 2020</span>
                    <span>Read More</span>
                  </div>
                </div>
              </article>

              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src={logo}
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                  >
                    Loans
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    Launch of Wezesha Loan
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 3, 2020</span>
                    <span>Read More</span>
                  </div>
                </div>
              </article>
           
        
          </Carousel>
        </div>


        <div className="md:grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 hidden ">
          
        
          
              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src={logo}
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                  >
                    Info
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Why join Ostram Sacco
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 1, 2020</span>
                    <span>Read More</span>
                  </div>
                </div>
              </article>

         
              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src={logo}
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                  >
                    Meeting
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    5th Annual General Meeting
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 2, 2020</span>
                    <span>Read More</span>
                  </div>
                </div>
              </article>

              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src={logo}
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                  >
                    Loans
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    Launch of Wezesha Loan
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 3, 2020</span>
                    <span>Read More</span>
                  </div>
                </div>
              </article>

              {/* <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 dark:bg-gray-500"
                    src="https://source.unsplash.com/200x200/?fashion?4"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
                  >
                    Convenire
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    Te nulla oportere reprimique his dolorum
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 4, 2020</span>
                    <span>2.4K views</span>
                  </div>
                </div>
              </article> */}
           
        
          
        </div>
      </div>
    </section>
  );
};

export default Blogs;
