import React from "react";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import WhoWeAre from "../components/WhoWeAre";
import CTA from "../components/CTA";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="font-mont">
      <Hero />
      <Banner />
      <WhoWeAre />
      <Services/>
      <Testimonials />
      <Stats />
      <Blogs />
      <CTA />
    </div>
  );
};

export default Home;
