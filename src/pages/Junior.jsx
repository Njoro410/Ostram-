import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import piggy from "../images/piggymoney.jpg"

const Junior = () => {
  return (
    <div>
      <div className="p-6 py-12 bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-4xl md:text-6xl tracking-tighter font-bold">
              Junior Membership(Child)
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  container mx-auto">
        <div className="px-8 mt-12 mx-auto">
          <p className="text-justify">
            This account offers a practical and adaptable method for sending and
            receiving payments, enhancing both private and professional
            interactions. It may be opened under the name of a single person, a
            couple, a registered group, or a registered business.
          </p>

          <Link
            className="btn px-5 w-full mt-4 lg:mt-12 py-3 rounded-md border block bg-gray-900 text-yellow-400 border-gray-400 text-center"
            to="/membership"
          >
            Become a Member
          </Link>
        </div>
        <div className="mt-12 ">
          <Carousel showIndicators={false} showThumbs={false}>
            <div>
              <img
                alt="saving money"
                src={piggy}
                className="mb-5 h-52"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Junior;