// components/Brand.js
"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  "/bribbleicon.png",
  "/awwwards.png",
  "/behance.png",
  "/cssdesgin.png",
  "/bribbleicon.png",
];

export default function Brand() {
  return (
    <section
      className="relative py-12 flex flex-col items-center justify-center font-montserrat pt-20 animate-fade-in"
      aria-labelledby="brand-heading"
    >
      <h2
        id="brand-heading"
        className="text-[22px] font-thin text-gray-400 mb-6 text-center px-4 animate-slide-up"
      >
        As seen and loved on:
      </h2>

      <div className="relative w-full max-w-6xl overflow-hidden scrollbar-hide">
        <div className="pointer-events-none absolute top-0 left-0 h-full w-16 md:w-32 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-16 md:w-32 bg-gradient-to-l from-black/80 via-black/50 to-transparent z-10" />

        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          className="animate-fade-in-delayed"
        >
          {logos.map((logo, i) => (
            <figure
              key={i}
              className="relative w-32 md:w-50 h-16 mx-4 md:mx-6 flex-shrink-0 mt-6 md:mt-10  md:h-[120px] transform hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={logo}
                alt={`Partner logo ${i + 1}`}
                width={160}
                height={64}
                className="object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFBE0D] focus:ring-opacity-50 rounded"
                tabIndex={0}
                role="img"
              />
            </figure>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-12 md:h-20 bg-gradient-to-t from-gray-300/30 via-gray-300/10 to-transparent rounded-[200px/40px] blur-3xl opacity-90" />

      </div>
    </section>
  );
}






