export default function TeamSection() {
  return (
    <section
      className="relative mt-[-20px] max-w-[1750px] mx-auto bg-[#1a1a1a] rounded-3xl min-h-[350px] px-6 py-12 md:flex justify-between items-start gap-6 text-white animate-slide-up"
      aria-labelledby="team-heading"
    >
      {/* Left Column */}
      <div className="font-montserrat md:w-1/2 mb-10 md:mb-0 md:pl-6">
        <h2
          id="team-heading"
          className="text-3xl md:text-4xl lg:text-[54px] leading-tight tracking-wider font-medium animate-fade-in"
          style={{ fontSize: "clamp(1.75rem, 6vw, 54px)" }}
        >
          Your dedicated <br /> in-house design <br /> team
        </h2>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 font-montserrat md:pr-6">
        <p className="text-base text-white leading-relaxed mb-6 animate-fade-in-delayed">
          We are a global collective of diverse designers and developers,
          partnering with brands of all scales. What distinguishes us is our
          dedication to crafting memorable, user-friendly, and captivating
          experiences — it's what we excel at. The projects we deliver combine
          creative vision with practical execution, resulting in solutions that
          are both distinctive and impactful.
        </p>
        <div className="mt-8 animate-fade-in-delayed">
          <p className="text-lg font-medium text-white mb-1">Lorem Ipsum</p>
          <p className="text-sm text-gray-400">Founder and CEO</p>
        </div>
      </div>

      {/* Decorative Leaf Image */}
      <img
        src="/leafright.png"
        alt=""
        aria-hidden="true"
        className="absolute right-5 top-1/2 -translate-y-1/2 w-10 md:w-12 rotate-[20deg] opacity-100 pointer-events-none animate-pulse-subtle"
      />
    </section>
  );
}
