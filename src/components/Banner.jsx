import React from "react";

const Banner = () => {
  return (
    <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracking-tighter font-bold">
            Try our new wezesha loan
          </h2>
          <a
            href="#"
            rel="noreferrer noopener"
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
