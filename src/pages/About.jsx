import React from "react";

const About = () => {
  return (
    <div className="w-full h-full text-gray-800 dark:text-white">
      <div className="p-6 py-12 bg-orange-500">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Who We Are
            </h2>
          </div>
        </div>
      </div>
      <div className="container px-2 py-4 md:px-24 border-b-2">
        {/* <h1 className="text-4xl pb-4 md:text-5xl font-extrabold mt-4 text-center">Who We <span className="text-orange-500">Are</span></h1> */}
        <p className="">
          Ostram Traders Sacco was founded in 2015 after discovering a need to
          provide quality financial services for people and businesses operating
          in Kajiado Central. <br/><br/>Our services are top notch hence why over the
          years we have been able to gain the trust of people and businesses.
          Ostram started operating in Kajiado Town but demand grew and hence we
          expanded our services to Il-Bissil, Isinya, M-46, Sajiloni and
          Enkorika.
          <br />
          <br />
          Our Agents go to these towns in different days of the week to collect
          daily contributions from our members, please note that it is not
          mandatory to contribute, we do that as it is easier for members to
          save without having to come to the office.
          <br />
          Members can also use MPESA via Lipa na Family to contribute or pay
          their loans. Use{" "}<br/><br/>
          <span className="text-orange-500">
            *Paybill Number - 222111* *Account Number - 169986* *Business Name -
            Ostram Traders Sacco*
          </span>{" "}
          or Equity Paybill{" "}
          <span className="text-orange-500">
            *Paybill Number - 247247* *Account Number - 275010* *Business Name -
            Ostram Traders Saving Sacco*
          </span>{" "}
          or{" "}
          <span className="text-orange-500"> Mpesa Till Number - 955137</span>
        </p>
      </div>
      <div className="container  py-4 md:px-24  grid grid-cols-1 md:grid-cols-2">
        <div className="md:border-r-2 border-b-2 py-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 text-center pb-5">
            Our <span className="text-orange-500">Vision</span>
          </h1>
          <p className="px-2">
            To be a leading financial service provider for all people
          </p>
        </div>
        <div className="md:px-2 border-b-2 py-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 text-center pb-5">
            Our <span className="text-orange-500">Mission</span>
          </h1>
          <p className="text-left px-2">
            To improve our members' social and economic well-being through
            resource mobilization and the provision of accessible, affordable,
            and sustainable financial services
          </p>
        </div>
      </div>
      <div className="container px-12 py-4 md:px-24 border-b-2">
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 text-center pb-5">
          Our Core <span className="text-orange-500">Values</span>
        </h1>
        <div className="flex flex-col gap-6 justify-center">
          <p className="text-xl text-center text-orange-500">Integrity</p>
          <p className="text-xl text-center text-orange-500">Team Work</p>
          <p className="text-xl text-center text-orange-500">Nurturing</p>
          <p className="text-xl text-center text-orange-500">
            Customer Service
          </p>
          <p className="text-xl text-center text-orange-500">Reliability</p>
        </div>
      </div>
    </div>
  );
};

export default About;
