import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import happyFamily from "../images/happyfamily.jpg";
import medicPiggy from "../images/medicpiggy.jpg";
import moneyGain from "../images/moneygain.jpg";

const Hero = () => {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div className="relative">
        <img alt="money" className="h-[18rem] md:h-[30rem] w-screen bg-cover bg-center" src={moneyGain} />
      
        <div class="absolute top-0 left-0  px-6 py-4 bg-black/70 h-[18rem] md:h-[30rem] w-screen">
          <h4 class="mt-16 md:mt-32 text-4xl md:text-6xl  font-extrabold  text-orange-500 font-yanone ">
            Grow your money by saving it
          </h4>
          <p class="leading-normal font-bold text-lg md:text-2xl text-amber-400 font-yanone">
            Knowing how to secure your financial well-being is one of the most
            important things you'll ever need in life.
          </p>
        </div>
      </div>

      <div className="relative">
        <img alt="money" className="h-[18rem] md:h-[30rem] w-screen" src={medicPiggy} />
      
        <div class="absolute top-0 left-0  px-6 py-4 bg-black/70 h-[18rem] md:h-[30rem] w-screen">
          <h4 class="mt-16 md:mt-32 text-4xl md:text-6xl font-extrabold  text-orange-500 font-yanone">
            Avoid rush and stress when emergency strikes.
          </h4>
          <p class="leading-normal text-amber-400 font-yanone text-lg md:text-2xl">
            Knowing how to secure your financial well-being is one of the most
            important things you'll ever need in life.
          </p>
        </div>
      </div>

      <div className="relative">
        <img alt="money" className="h-[18rem] md:h-[30rem] w-screen" src={happyFamily} />
      
        <div class="absolute top-0 left-0  px-6 py-4 bg-black/50 h-[18rem] md:h-[30rem] w-screen">
          <h4 class="mt-10 md:mt-32 text-4xl md:text-6xl font-extrabold  text-orange-500 font-yanone">
            Saving equates to Happy Families
          </h4>
          <p class="leading-normal text-amber-400 font-yanone text-lg md:text-2xl">
          Having a financial back-up comes a long way in ensuring a happy family.
          </p>
        </div>
      </div>

    </Carousel>
  );
};

export default Hero;
