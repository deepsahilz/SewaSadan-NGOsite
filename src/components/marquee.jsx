import React from "react";
import Marquee from "react-fast-marquee";

const marquee = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-100 to-orange-300"> 
    <div className="rounded-xl bg-orange-500">
        <Marquee className="text-8xl py-5 uppercase font-neue text-white " speed="180" gradient={false}>
        Sri guru nanak dev sahib ji samaj sewa sanstha&nbsp;&nbsp;&nbsp;&nbsp;
        </Marquee>
    </div>
    </div>
  );
};

export default marquee;