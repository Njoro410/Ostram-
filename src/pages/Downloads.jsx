import React from "react";
import { Helmet } from "react-helmet";

const Downloads = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Downloads</title>
      </Helmet>
      <div className="p-6 py-12 bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-4xl md:text-6xl tracking-tighter font-bold">
              Downloads
            </h2>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Downloads;
