import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="">
      <section class="bg-gray-800 dark:bg-gray-900">
        <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 class="text-3xl font-bold font-play tracking-tight text-gray-200 dark:text-white">
            JOIN US TO <span className="text-orange-500">UNLOCK YOUR FUTURE</span> 
          </h2>

          <p class="block max-w-2xl mt-4 text-xl text-gray-200 dark:text-gray-300 font-yanone">
            At Ostram Sacco Society Limited we offer top-notch banking services to
            ensure that we meet all our customers’ needs.
          </p>

          <div class="mt-6">
            <Link to='/membership' className="btn text-orange-200">Become a Member</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
