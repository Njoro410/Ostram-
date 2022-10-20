import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import putMoney from "../images/putmoney.jpg"
import piggyMoney from "../images/piggymoney.jpg"
import moneyGrow from "../images/moneygrow.jpg"

const WhoWeAre = () => {
  return (
    <div className=" bg-slate-100 text-gray-800 dark:bg-gray-800 dark:text-slate-100 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  container mx-auto">
        <div className="px-8 mt-12 text-justify">
          <h3 className="font-bold font-play text-2xl md:text-4xl group">
            ABOUT <span className="text-orange-500">US</span>
          </h3>
          <div className="flex">
            <span className="w-12 h-1 mb-6 rounded-lg bg-orange-400"></span>
          </div>
          <p className="font-light">
            Ostram Traders Sacco Society is a leading sacco based in Kajiado
            Central. We provide quality financial services to individuals, chamas and
            businesses operating in kajiado town and other sub-counties within Kajiado
            central.
            <br />
            <br/>
            Ostram Sacco was founded in 2015 to address the financial needs of
            people and business at a smaller, quicker and reliable scale. Since
            then, Ostram Sacco has grown to become the most reliable sacco in Kajiado central and it environs.
          </p>
          <Link
            className="btn flex gap-3  group px-5 w-full mt-4 lg:mt-12 py-3  border bg-gray-800 text-yellow-400  text-center"
            to="/about"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 group-hover:translate-x-5 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
        <div className="mt-12 mb-20 px-4">
          <Carousel
            showThumbs={false}
            swipeable={true}
            emulateTouch={true}
            autoPlay={true}
            infiniteLoop={true}
          >
            <div>
              <img
                alt="img"
                src={piggyMoney}
                className="h-[22rem]"
              />
            </div>
            <div>
              <img
                alt="img"
                src={moneyGrow}
                className="h-[22rem]"
              />
            </div>
            <div>
              <img
                alt="img"
                src={putMoney}
                className="h-[22rem]"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
