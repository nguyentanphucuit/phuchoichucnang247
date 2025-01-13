import React from "react";
import Section from "./Section";
import Stats from "./Stats";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="mx-auto">
      <div className="hero-pattern">
        <Section />
      </div>
      <div className="pt-12 w-full mx-auto max-w-7xl"></div>
      {/* <Stats /> */}
    </div>
  );
};

export default Hero;
