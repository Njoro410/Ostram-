import React from "react";
import Banner from "../components/Banner";
import Details from "../components/Details";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Details/>
      <Navbar />
      <Hero/>
      <Banner/>
    </div>
  );
};

export default Home;
