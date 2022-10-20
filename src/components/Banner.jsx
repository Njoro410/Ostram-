import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="p-6 md:py-12 bg-orange-500">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-4xl md:text-7xl tracking-tighter font-extrabold font-yanone dark:text-gray-800">
            Try our new wezesha loan
          </h2>
          <Link
            to="/loans"
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md btn"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
