import React from "react";
import { Parallax } from "react-parallax";
import CountUp from "react-countup";
import moneySeed from "../images/moneyseed.jpg";

const Stats = () => {
  return (
    <div className="flex items-center justify-center ">
      <Parallax
        className="w-screen h-full flex items-center justify-center "
        bgImage={moneySeed}
        bgImageAlt="the cat"
        strength={500}
      >
        <div className=" w-screen backdrop-blur-sm md:backdrop-grayscale bg-black/70 h-full grid grid-cols-1 md:grid-cols-3 relative">
          <div className="w-full h-[300px]  flex flex-col items-center justify-center">
            <div className="stat-title opacity-90 text-center text-2xl font-bold font-yanone text-orange-500">
              Serving
            </div>
            <div className="stat-value font-yanone text-orange-500 font-extrabold md:text-6xl ">
              <CountUp
                enableScrollSpy={true}
                scrollSpyDelay={100}
                scrollSpyOnce={false}
                duration={5}
                end={1500}
              />{" "}
              +
            </div>
            <div className="stat-desc opacity-90 text-center text-2xl font-bold font-yanone text-orange-500">
              Members
            </div>
          </div>

          <div className="w-full h-[300px]  flex flex-col items-center justify-center">
            <div className="stat-title opacity-90 text-center text-2xl font-bold font-yanone text-orange-500">
              Over
            </div>
            <div className="stat-value font-yanone text-orange-500 font-extrabold md:text-6xl ">
              <CountUp
                enableScrollSpy={true}
                scrollSpyDelay={100}
                scrollSpyOnce={false}
                duration={5}
                end={1000}
              />
            </div>
            <div className="stat-desc opacity-90 text-center text-2xl font-bold font-yanone text-orange-500">
              Loans Issued
            </div>
          </div>

          <div className="w-full h-[300px]  flex flex-col items-center justify-center">
            <div className="stat-title opacity-90 text-center text-2xl font-bold font-yanone text-orange-500">
              Years
            </div>
            <div className="stat-value font-yanone text-orange-500 font-extrabold md:text-6xl ">
              <CountUp
                enableScrollSpy={true}
                scrollSpyDelay={100}
                scrollSpyOnce={false}
                duration={2}
                end={10}
              />
            </div>
            <div className="stat-desc opacity-90 text-center text-2xl font-bold font-yanone text-orange-500">
              Serving
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Stats;
