import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <Carousel showThumbs={false}>
      <div className="relative">
        <img
          className="h-[38rem]"
          src="https://taxplanningideas.com/wp-content/uploads/2021/12/4.png"
        />
        <div class="absolute top-0 left-0 px-6 py-4 bg-gradient-to-r from-black h-[38rem]">
          <h4 class="mt-48 text-xl font-semibold tracking-tight text-white">
            This is the title
          </h4>
          <p class="leading-normal text-gray-100">
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
            tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          className="h-[38rem]"
          src="https://taxplanningideas.com/wp-content/uploads/2021/12/4.png"
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img
          className="h-[38rem]"
          src="https://taxplanningideas.com/wp-content/uploads/2021/12/4.png"
        />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Hero;
