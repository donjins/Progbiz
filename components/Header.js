import Hero from "./hero";

export default function Header() {
  return (
    <div className="relative text-white">
      <div className="absolute top-0 left-0 w-full h-[350px] -z-10 bg-[url('/herobg.png')] bg-cover bg-center bg-no-repeat scale-y-[-1]">
        <div className="absolute top-0 left-0 h-full w-32 md:w-64 bg-gradient-to-r from-black via-transparent to-transparent" />
        <div className="absolute top-0 right-0 h-full w-32 md:w-64 bg-gradient-to-l from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-black via-black/120 to-transparent" />
      </div>

      <header
        className="font-montserrat px-4 md:px-6 py-2 flex items-center justify-between md:justify-around h-[140px] relative z-10"
        role="banner"
        aria-label="Main navigation"
      >
        <img
          src="/Logo.png"
          alt="Company Logo"
          className="h-8 md:h-10 lg:h-12 w-auto transform hover:scale-105 transition-transform duration-200"
        />

        <nav
          className="hidden md:flex items-center gap-4 lg:gap-6 text-white"
          role="navigation"
          aria-label="Primary navigation"
        >
          <a
            href="#home"
            className="text-base hover:text-[#FFBE0D] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFBE0D] focus:ring-opacity-50 rounded px-2 py-1"
            aria-label="Go to Home section"
          >
            Home
          </a>
          <a
            href="#portfolio"
            className="text-base hover:text-[#FFBE0D] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFBE0D] focus:ring-opacity-50 rounded px-2 py-1"
            aria-label="Go to Portfolio section"
          >
            Portfolio
          </a>
          <a
            href="#benefits"
            className="text-base hover:text-[#FFBE0D] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFBE0D] focus:ring-opacity-50 rounded px-2 py-1"
            aria-label="Go to Benefits section"
          >
            Benefits
          </a>
          <a
            href="#services"
            className="text-base hover:text-[#FFBE0D] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFBE0D] focus:ring-opacity-50 rounded px-2 py-1"
            aria-label="Go to Services section"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-base hover:text-[#FFBE0D] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFBE0D] focus:ring-opacity-50 rounded px-2 py-1"
            aria-label="Go to Pricing section"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-base hover:text-[#FFBE0D] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFBE0D] focus:ring-opacity-50 rounded px-2 py-1"
            aria-label="Go to FAQ section"
          >
            FAQ
          </a>
        </nav>

        <button
          className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#FFBE0D] focus:ring-opacity-50 rounded"
          aria-label="Toggle mobile menu"
          aria-expanded="false"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden md:block">
          <img
            src="/Link.png"
            alt="Book a demo"
            className="h-6 md:h-8 lg:h-10 w-auto cursor-pointer transform hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFBE0D] focus:ring-opacity-50 rounded"
            tabIndex="0"
            role="button"
            aria-label="Book a demo"
          />
        </div>
      </header>

      <div className="-mt-[-70px]">
        <Hero partial={true} />
      </div>
    </div>
  );
}







