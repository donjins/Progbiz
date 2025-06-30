export default function Testimonial() {
  return (
    <div className="relative bg-[#1a1a1a] rounded-3xl px-6 py-12 w-full max-w-[750px] mx-auto text-white overflow-hidden">
      {/* Left Leaf */}
      <img
        src="/leafleft.png"
        alt="Decorative left leaf"
        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 md:w-12 pointer-events-none opacity-80"
      />

      {/* Right Leaf (flipped) */}
      <img
        src="/leafright.png"
        alt="Decorative right leaf"
        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 md:w-12 rotate-180 pointer-events-none opacity-80"
      />

      {/* Testimonial Content */}
      <div className="relative z-10 text-center space-y-6">
        <p className="text-base md:text-[16px] font-montserrat leading-relaxed">
          “An absolute professional who consistently delivers exceptional work,
          even under the most demanding deadlines. I appreciated the insightful
          feedback and innovative ideas introduced throughout the design
          process, which greatly enhanced the final product.”
        </p>
        <p className="text-sm text-gray-400">
          Wade Warren — Founder @Lorem Ipsum
        </p>
      </div>
    </div>
  );
}
