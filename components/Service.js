"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const ServiceBadge = ({ service }) => (
  <span
    className="min-w-[130px] h-[45px] px-6 py-2 ml-6 border border-white/30 bg-black backdrop-blur-sm rounded-xl text-sm font-medium text-white whitespace-nowrap shadow-sm hover:shadow-md transition flex items-center justify-center"
    style={{
      backgroundImage: "linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
    }}
  >
    {service}
  </span>
);

export default function Service() {
  return (
    <section className="w-full bg-neutral py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <img
            src="/Service.png"
            alt="Service"
            className="h-[50px] w-[100px] mb-6 mx-auto"
          />
          <h2 className="w-[465px] text-[44px] leading-[60px] font-thin text-gray-300 mx-auto font-montserrat">
            All you want,<br /> delivered on time
          </h2>
        </div>

        {/* Marquee Row 1 */}
        <div className="relative w-[680px] h-[68px] mx-auto overflow-hidden mb-6">
          <div className="absolute top-0 left-0 w-24 h-full z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 h-full z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
          <Marquee speed={40} gradient={false}>
            {["UX design", "Graphic design", "Logo design", "Branding", "Animation"].map(
              (service, idx) => (
                <ServiceBadge service={service} key={`row1-${idx}`} />
              )
            )}
          </Marquee>
        </div>

        {/* Marquee Row 2 */}
        <div className="relative w-[680px] h-[68px] mx-auto overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-full z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 h-full z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
          <Marquee speed={40} direction="right" gradient={false}>
            {["UI/UX", "Animation", "Branding", "Logo design", "Graphic design"].map(
              (service, idx) => (
                <ServiceBadge service={service} key={`row2-${idx}`} />
              )
            )}
          </Marquee>
        </div>
      </div>
    </section>
  );
}



