import React from "react";
import { Helmet } from "react-helmet";

const Guarantorship = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Loan Guarantorship</title>
      </Helmet>
      <div className="p-6 py-12 bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-white text-4xl md:text-6xl tracking-tighter font-bold">
              Guarantorship
            </h2>
          </div>
        </div>
      </div>

      <section className="dark:bg-gray-800 dark:text-gray-100 text-gray-800">
        <div className="container flex flex-col justify -center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            <span className="text-orange-500">Everything </span> you need to
            know
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold text-xl text-orange-500">
                Who is a guarantor?
              </h3>
              <p className="mt-1 text-justify  ">
                A guarantor is someone who consents to pay another person's debt
                on their behalf if the latter defaults on loan payments. The
                guarantor is equally liable for repaying the loan, so being one
                is not just a formality to assist the borrower.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-orange-500">
                Loan guarantor is not a co-borower.
              </h3>
              <p className="mt-1 text-justify  ">
                The terms "loan guarantor" and "co-borrower" are frequently used
                interchangeably, but this is incorrect. Only when both the
                borrower and co-borrower are unable to repay the loan and the
                sacco believes that recovery is impossible due to certain
                circumstances does a loan guarantor enter the picture.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-orange-500">
                What if guarantor refuses to pay a loan?
              </h3>
              <p className="mt-1 text-justify  ">
                Banks and Saccos have the right to ask the guarantor to repay
                the loan balance in the event of the main borrower's disability
                or death. If you are a home loan guarantor, you can ask to have
                the money paid back by selling the property.
                <br /> The sacco has the right to file a lawsuit if the borrower
                refuses to pay back the loan. In extreme circumstances, the
                sacco might try to seize your possession in order to recoup its
                debt.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-orange-500">
                Whithdrawing from guarantor role.
              </h3>
              <p className="mt-1 text-justify  ">
                It would be challenging to back out of your commitment to serve
                as a loan guarantor after you have already said yes. Both the
                lending institution and the borrower must consent before the
                withdrawal process can be started. If another loan guarantor is
                available, the lending authority will typically approve this
                change.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" flex flex-col justify-center p-4 mx-auto md:p-8 dark:bg-gray-800 w-screen">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Ostram's <span className="text-orange-500">Guarantorship</span>{" "}
            Terms
          </h2>
          <div className="grid md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32 ">
            <div>
              <div className="flex py-2 md:py-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify -center w-12 h-12 rounded-md  text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7 text-orange-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="mt-2 text-gray-800 dark:text-white">
                    2/3 of the loan{" "}
                    <span className="text-orange-500">MUST</span> be guaranteed
                    for by active members of the Sacco
                  </p>
                </div>
              </div>

              <div className="flex py-2 md:py-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify -center w-12 h-12 rounded-md  text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7 text-orange-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="mt-2 text-gray-800 dark:text-white">
                    Members with new loans will not be allowed to guarantee any
                    loanie while in grace period.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex py-2 md:py-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify -center w-12 h-12 rounded-md  text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7 text-orange-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="mt-2 text-gray-800 dark:text-white">
                    No defaulters or members with loan arrears will be allowed
                    to guarantee a loan
                  </p>
                </div>
              </div>

              <div className="flex py-2 md:py-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify -center w-12 h-12 rounded-md  text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7 text-orange-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="mt-2 text-gray-800 dark:text-white">
                    Members who have guaranteed defaulters will not be given
                    loan services until the default has cleared.
                  </p>
                </div>
              </div>

              {/* //final */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guarantorship;
