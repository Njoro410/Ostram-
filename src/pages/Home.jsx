import React from "react";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import WhoWeAre from "../components/WhoWeAre";
import CTA from "../components/CTA";


const Home = () => {
  return (
    <div>
      <Details/>
      <Navbar />
      <Hero/>
      <Banner/>
      <WhoWeAre/>
      <Stats/>
      <Testimonials/>
      <Blogs/>
      <CTA/>
      <Footer/>
    </div>
  );
};

export default Home;
