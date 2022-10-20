import React from "react";
import { Carousel } from "react-responsive-carousel";
import piggy from "../images/piggysave.jpg"
import seed from "../images/moneyseed.jpg"

const Savings = () => {
  return (
    <div>
      <div className="p-6 py-12 bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-4xl md:text-6xl tracking-tighter font-bold">
              Savings Accounts
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  container mx-auto">
        <div className="px-8 mt-12 text-justify">
          <p className="text-justify">
            This account gives a member access to loans, contribution should be
            made on a regular basis. If lump sum amount is deposited, a member
            qualifies to get a loan for six months after the date of deposit.
            The monthly minimum savings contribution is one hundred
            shillings(Kshs.100).
            <br />
            <br />
          </p>
          <p className="text-justify pb-4">
            Money deposited in the savings account cannot be withdrawn unless
            one is denouncing membership from the Sacco. If thats the case, one
            is required to give a two (2) month written notice. A fee of Kshs,
            500/= and other charges will be incurred.
            <br />
            <br /> If one must withdraw from this account, a fee of Kshs.100/=
            will be charged and no dividends will be awarded for that financial
            year.
          </p>
          <button className="btn px-5 w-full mt-4 lg:mt-12 py-3 rounded-md border block bg-gray-900 text-yellow-400 border-gray-400">
            Become a Member
          </button>
        </div>
        <div className="mt-12 ">
          <Carousel>
            <div>
              <img
                alt="saving money"
                src={piggy}
              />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img
                alt="saving money"
                src={seed}
              />
              <p className="legend">Legend 2</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Savings;
