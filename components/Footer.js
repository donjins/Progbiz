"use client";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[300px] text-white bg-gray/50 flex flex-col justify-center items-center px-4 sm:px-[100px] py-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/herobg.png')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />

      <section className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-light leading-tight mb-4">
          Need more clarity?
        </h1>

        <h2 className="text-4xl sm:text-6xl font-light leading-tight mb-8 sm:mb-12">
          Get in touch!
        </h2>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2">
          Book a demo
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </section>

      <div className="relative z-10 w-full mt-auto pt-8 flex justify-between items-center">
        <p className="text-gray-400 text-sm">
          © 2024 All Rights Reserved
        </p>

        <nav className="flex flex-row gap-2.5" aria-label="Social media">
          <img src="/linkedin.png" alt="LinkedIn icon" />
          <img src="/icon2.png" alt="social icon" />
          <img src="/icon3.png" alt="social icon" />
          <img src="/icon4.png" alt="social icon" />
          <img src="/icon5.png" alt="social icon" />
        </nav>
      </div>

      <img src="/herobg.png" className="w-full h-14 mb-[-40px]" alt="footer background" />
    </footer>
  );
}
