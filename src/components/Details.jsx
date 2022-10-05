import React from "react";


const Details = () => {
  return (
    <div className="w-full h-12 hidden md:grid grid-cols-3  border divide-x divide-slate-300 border-slate-300">
      <div className="flex items-center justify-center text-sm font-extralight">
        sacco@safaricom.co.ke
      </div>
      <div className="flex items-center justify-center">
        {" "}
        (+254) 0111 222 226 |(+254) 0111 222 227
      </div>
      <div className="flex items-center justify-center">social icons</div>
    </div>
  );
};

export default Details;
