import React from "react";


const Membership = () => {
  return (
    <div className="dark: dark:bg-gray-800 dark:text-white">
      <div className="p-6 py-12  dark:bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-4xl md:text-6xl tracking-tighter font-bold">
              Membership
            </h2>
          </div>
        </div>
      </div>
      <div className="container flex justify-center ">
        <p className="text-xl py-8 text-center w-3/4">
          At Ostram Sacco, we believe that every individual should be encouraged
          to develop a saving habit. We believe that you can take charge of your
          money and help it grow.
        </p>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2">
        <div className="md:border-r-2 md:px-5">
          <p>
            An application for membership has to be made in writing or filling
            the form on the right. You can also opt to download the form from
            here or walk into our office for a one to one session where all your
            questions will be answered.
            <br />
            <br />
            Alternatively, this process can be done by our agents who visit
            various sub-counties within Kajiado County.
            <br />
            <br />A non-refundable fee of 300 shillings is charged for
            membership, one is required to provide two (2) passport sized
            photographs and a photocopy of the National Identity Card.
          </p>
          <ul className="steps steps-vertical">
            <li className="step step-neutral">Fill the registration form</li>
            <li className="step step-neutral">
              Avail 2 passport photographs
            </li>
            <li className="step step-neutral">
              Photocopy of your National ID
            </li>
            <li className="step step-neutral">
              Pay a Kshs.300/= registration fee
            </li>
            <li className="step step-neutral">Receive a member saving book</li>
            <li className="step step-neutral">Start saving</li>
          </ul>
        </div>

        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[1050px] dark: dark:bg-gray-800">
            <p className="text-center text-lg underline underline-offset-4">Fill details below</p>
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#753636] dark:bg-white py-3 px-6 text-base font-medium text-orange-500 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#753636]  dark:bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#753636]  dark:bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#753636]  dark:bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-6 pt-4">
                <label className="mb-5 block text-xl font-semibold text-orange-500">
                  Upload File
                </label>

                <div className="mb-8">
                  <input type="file" name="file" id="file" className="sr-only" />
                  <label
                    for="file"
                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#753636] p-12 text-center"
                  >
                    <div>
                      <span className="mb-2 block text-xl font-semibold text-orange-500">
                        Drop files here
                      </span>
                      <span className="mb-2 block text-base font-medium text-orange-500">
                        Or
                      </span>
                      <span className="inline-flex rounded border border-[#753636] py-2 px-7 text-base font-medium text-orange-500">
                        Browse
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  Next of Kin Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#753636]  dark:bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  Relationship with next of kin
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#753636]  dark:bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label
                  for="name"
                  className="mb-3 block text-base font-medium text-orange-500"
                >
                  Next of Kin number
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#753636]  dark:bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>

              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-orange-500">
                  Type of account
                </label>
                <div className="flex items-center flex-col md:flex-row space-x-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="radio1"
                      id="radioButton1"
                      className="h-5 w-5"
                    />
                    <label
                      for="radioButton1"
                      className="pl-3 text-base font-medium text-orange-500"
                    >
                      Individual 
                    </label>
                  </div>
                  <div className="flex items-center ">
                    <input
                      type="radio"
                      name="radio1"
                      id="radioButton2"
                      className="h-5 w-5"
                    />
                    <label
                      for="radioButton2"
                      className="pl-3 text-base font-medium text-orange-500"
                    >
                      Joint Group(Chama)
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="radio1"
                      id="radioButton2"
                      className="h-5 w-5"
                    />
                    <label
                      for="radioButton2"
                      className="pl-3 text-base font-medium text-orange-500"
                    >
                      Minor/Child Membership
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <button className="hover:shadow-form rounded-md  dark:bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
