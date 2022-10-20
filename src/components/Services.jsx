import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { FaPiggyBank, FaHandshake } from "react-icons/fa";
import { RiHandCoinFill } from "react-icons/ri";
import svg from "../images/glamorous.svg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="w-full h-full bg-transparent">
      <div className="w-full h-[1485px] md:h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={svg}
          alt="svghome"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          {/* <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center ">
            Our Services
          </h2> */}
          <h3 className="text-2xl md:text-5xl font-bold py-6 text-center font-play">
            What <span className="text-orange-500">Ostram</span> Offers To <span className="text-orange-500">You</span> 
          </h3>
          <p className="py-4 text-xl md:text-3xl italic text-slate-300 font-yanone text-center">
            Financial freedom usually means having enough savings, financial
            investments, and cash on hand to afford the kind of life we desire
            for ourselves and our families.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 md:mt-12 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <p className="w-16 p-4 bg-orange-500 text-white rounded-lg mt-[-4rem]">
                <FaPiggyBank fontSize="2rem" />
              </p>
              <h3 className="font-bold text-2xl my-6 font-play">Savings</h3>
              <p className="text-gray-500 text-2xl font-yanone">
                Need a convinient and reliable way to save and track your money?
                We provide various savings account that helps you organize your
                finances.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 rounded-lg">
              <Link className="flex items-center text-orange-500" to="/contact">
                Contact Us <HiArrowRight className="w-5 ml-2" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl ">
            <div className="p-8">
              <p className="w-16 p-4 bg-orange-500 text-white rounded-lg mt-[-4rem]">
                <RiHandCoinFill fontSize="2rem" />
              </p>
              <h3 className="font-bold text-2xl my-6 font-play">Loans</h3>
              <p className="text-gray-500 text-2xl font-yanone">
                Need a loan to finance a project, medical bill, school fees? Be
                a member today and get loans upto 3x your savings at very low
                interest lates.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 rounded-lg">
              <Link className="flex items-center text-orange-500" to="/contact">
                Contact Us <HiArrowRight className="w-5 ml-2" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <p className="w-16 p-4 bg-orange-500 text-white rounded-lg mt-[-4rem]">
                <FaHandshake fontSize="2rem" />
              </p>
              <h3 className="font-bold text-2xl my-6 font-play">Membership</h3>
              <p className="text-gray-500 text-2xl font-yanone">
                Become a member today and enjoy the various financial services
                we offer, get yearly dividends and quality service and much
                more.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 md:mt-8 rounded-lg">
              <Link className="flex items-center text-orange-500" to="/contact">
                Contact Us <HiArrowRight className="w-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
