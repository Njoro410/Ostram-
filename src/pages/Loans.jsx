import React from "react";
import { Helmet } from "react-helmet";

const Loans = () => {
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Loans</title>
      </Helmet>
      <div className="p-6 py-12 bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-4xl md:text-6xl tracking-tighter font-bold">
              Loans
            </h2>
          </div>
        </div>
      </div>
      <div className="container flex justify-center">
        <p className="text-xl py-8 text-center w-3/4">
          We understand that every individual or business requires financial
          assistance from time to time, which is why we at Ostram Sacco are
          eager to help you at a lower interest rate.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="border-r-2 border-b-2 px-6">
          <p className="text-4xl text-center py-6">
            Self
            <span className="text-orange-500"> Guaranteed</span> Loans
          </p>
          <ul className="steps steps-vertical">
            <li data-content="✓" className="step step-neutral">
              Given up to 90% of a members savings
            </li>
            <li data-content="✓" className="step step-neutral">
              Guaranteed by your savings
            </li>
            <li data-content="✓" className="step step-neutral">
              Maximum repayment period of 1 year
            </li>
            <li data-content="✓" className="step step-neutral">
              Processed within 7 working days
            </li>
            <li data-content="✓" className="step step-neutral">
              There will be a grace period of 1 month
            </li>
          </ul>
        </div>
        <div className="px-6 border-b-2">
          <p className="text-4xl text-center py-6">
            <span className="text-orange-500">Development</span> Loans
          </p>
          <ul className="steps steps-vertical">
            <li data-content="✓" className="step step-neutral">
              Eligible after saving consistently for 6 months
            </li>
            <li data-content="✓" className="step step-neutral">
              Amount given is 3 times your savings
            </li>
            <li data-content="✓" className="step step-neutral">
              Your savings guaranteed ⅓ of loans
            </li>
            <li data-content="✓" className="step step-neutral">
              Maximum repayment period of 1 year
            </li>
            <li data-content="✓" className="step step-neutral">
              Maximum processing period of 21 days
            </li>
            <li data-content="✓" className="step step-neutral">
              ⅔ of the loan must be guaranteed for
            </li>
            <li data-content="✓" className="step step-neutral">
              There will be a grace period of 1 month
            </li>
          </ul>
        </div>

        <div className="px-6 border-r-2">
          <p className="text-4xl text-center py-6">
            Savings
            <span className="text-orange-500"> Promotion</span> Loans
          </p>
          <ul className="steps steps-vertical">
            <li data-content="✓" className="step step-neutral">
              This loan must be used to promote savings
            </li>
            <li data-content="✓" className="step step-neutral">
              Given 3 times of your savings
            </li>
            <li data-content="✓" className="step step-neutral">
              No guarantors needed
            </li>
            <li data-content="✓" className="step step-neutral">
              Given to members with no pending loans
            </li>
            <li data-content="✓" className="step step-neutral">
              Processed within 7 working days
            </li>
            <li data-content="✓" className="step step-neutral">
              Repayment period of 1 year
            </li>
          </ul>
        </div>

        <div className="px-6">
          <p className="text-4xl text-center py-6">
            <span className="text-orange-500">Wezesha</span> Loan
          </p>
          <ul className="steps steps-vertical invisible">
            <li data-content="✓" className="step step-neutral">
              This loan must be used to promote savings
            </li>
            <li data-content="✓" className="step step-neutral">
              Given 3 times of your savings
            </li>
            <li data-content="✓" className="step step-neutral">
              No guarantors needed
            </li>
            <li data-content="✓" className="step step-neutral">
              Given to members with no pending loans
            </li>
            <li data-content="✓" className="step step-neutral">
              Processed within 7 working days
            </li>
            <li data-content="✓" className="step step-neutral">
              Repayment period of 1 year
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Loans;
