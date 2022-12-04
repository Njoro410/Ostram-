import React from "react";
import { Helmet } from "react-helmet";

const Accounts = () => {
  return (
    <div className="dark:bg-gray-800 dark:text-white text-gray-800">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Accounts</title>
        <meta
          name="description"
          content="The various types of accounts we have at Ostram Sacco"
        />
      </Helmet>
      <div className="p-6 py-12 bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-4xl md:text-6xl tracking-tighter font-bold">
              Accounts
            </h2>
          </div>
        </div>
      </div>
      <div className="container flex justify-center">
        <p className="text-xl py-8 text-center w-3/4">
          There are various accounts which our members can opt to have once
          registered as members of Ostram Sacco. These accounts vary in one way
          or the other and each have their own benefits.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="border-r-2 px-6">
          <p className="text-4xl text-center py-6">
            <span className="text-orange-500">Savings</span> Account
          </p>
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
        </div>
        <div className="px-6">
          <p className="text-4xl text-center py-6">
            <span className="text-orange-500">Deposits</span> Account
          </p>
          <p>
            This account gives you access to unlimited withdrawals, withdrawals
            can be made at any time without prior notice. No interest is offered
            for the deposits account. <br />
            <br />
            The sacco charges a fee of Kshs.50/= for all withdrawals partaining
            to this account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
