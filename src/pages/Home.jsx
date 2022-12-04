import React from "react";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import WhoWeAre from "../components/WhoWeAre";
import CTA from "../components/CTA";
import Services from "../components/Services";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="font-mont">
            <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
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
