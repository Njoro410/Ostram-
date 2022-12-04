import { Disclosure } from "@headlessui/react";
import React from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const FAQ = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>F.A.Qs</title>
      </Helmet>
      <div className="p-6 py-12 bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-4xl md:text-6xl tracking-tighter font-bold">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full px-4 py-5">
        <div className="mx-auto w-full  rounded-xl bg-white p-6">
          <Disclosure as="div" className="py-1">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-6 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus ">
                  <span>What is loan recovery from savings?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel
                  as={motion.div}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  }}
                  initial={{ opacity: 0, y: -5 }}
                  className="px-4 pt-4 pb-2 text-sm text-gray-500"
                >
                  When a lendee fails to repay a loan in the stipulated time,
                  the sacco can deduct money from the savings account and repay
                  the loan. A fee of Kshs.500/= is charged.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="py-1">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-6 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus ">
                  <span>What is the charge for withdrawals?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel
                  as={motion.div}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  }}
                  initial={{ opacity: 0, y: -5 }}
                  className="px-4 pt-4 pb-2 text-sm text-gray-500"
                >
                  We charge a standard fee of Kshs.100/= for withdrawals.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="py-1">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-6 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus ">
                  <span>What if my passbook gets filed?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel
                  as={motion.div}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  }}
                  initial={{ opacity: 0, y: -5 }}
                  className="px-4 pt-4 pb-2 text-sm text-gray-500"
                >
                  When a members passbook gets filled, he or she can have it
                  replaced at a fee of Kshs.150/=.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="py-1">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-6 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus ">
                  <span>What other secondary costs are there?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel
                  as={motion.div}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  }}
                  initial={{ opacity: 0, y: -5 }}
                  className="px-4 pt-4 pb-2 text-sm text-gray-500"
                >
                  Office maintenance fee is Kshs.20/= per member per month. In
                  circumstances where an affidavit is required a fee of
                  Kshs.150/= is charged.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="py-1">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-6 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus ">
                  <span>What are the loan interests?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>

                <Disclosure.Panel
                  as={motion.div}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  }}
                  initial={{ opacity: 0, y: -5 }}
                  className="px-4 pt-4 pb-2 text-sm text-gray-500"
                >
                  Loan interest for all loans except Wezesha Loan is 1.2% per
                  month. Wezesha loan attracts an interest of 1%.
                  <br />
                  The loan processing fee is 1.2% of the total amount requested.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
