import React from "react";
import { Parallax } from "react-parallax";

const Stats = () => {
  return (
    <div>
      <Parallax
        className="h-32"
        blur={1}
        bgImage="https://taxplanningideas.com/wp-content/uploads/2021/12/4.png"
        bgImageAlt="the cat"
        strength={800}
      >
        <p className="text-5xl text-center font-extrabold">hello you mr jerry springer</p>
      </Parallax>
    </div>
  );
};

export default Stats;
