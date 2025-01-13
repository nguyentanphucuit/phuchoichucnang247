import React from "react";
import Section from "./Section";
import Image from "next/image";
import vuongImage from "/public/assets/img/vuong-profile.png";
import datImage from "/public/assets/img/dat-profile.png";

const Hero = () => {
  return (
    <div className="mx-auto">
      <div className="hero-pattern">
        <Section />
      </div>
      <div className="relative w-full flex justify-center items-center">
        <Image width={1366} height={768} src={vuongImage} alt="vuong profile" />
      </div>
      <div className="relative w-full flex justify-center items-center">
        <Image width={1366} height={768} src={datImage} alt="dat profile" />
      </div>
      <div className="pt-12 w-full mx-auto max-w-7xl"></div>
      {/* <Stats /> */}
    </div>
  );
};

export default Hero;
