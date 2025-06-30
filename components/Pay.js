export default function Pay() {
  return (
    <section 
      className="max-w-full mx-auto px-4 md:px-8 lg:px-[100px] py-12 relative font-montserrat animate-fade-in"
      aria-labelledby="pay-heading"
    >
      <div className="flex justify-center pb-[18px] animate-slide-up">
        <img
          src="./howitworks.png"
          alt="How it works illustration"
          className="w-[100px] md:w-[135px] h-[45px] md:h-[61px] transform hover:scale-105 transition-transform duration-200"
        />
      </div>

      <header className="text-center mb-12 animate-fade-in-delayed">
        <h2 
          id="pay-heading"
          className="font-montserrat font-light text-3xl md:text-4xl lg:text-[54px] leading-tight lg:leading-[60px] tracking-tight mx-auto mb-6 max-w-[519px] text-white"
          style={{ fontSize: 'clamp(2rem, 6vw, 54px)' }}
        >
          Pay and get started <br className="hidden md:block" /> the same day
        </h2>
        <h3 className="text-[22px] font-montserrat text-gray-600 max-w-2xl mx-auto px-4">
          No unnecessary bureaucracy. We focus on getting your ideas and <br className="hidden md:block" />
          problems solved.
        </h3>
      </header>

      <ul className="w-full max-w-[1240px] flex flex-col md:flex-row md:flex-wrap justify-center md:justify-between gap-4 md:gap-[22px] mx-auto">
        <li className="w-full md:w-[398.66px] h-auto md:h-[209.31px] rounded-[25px] border border-[#303030] px-6 py-6 bg-black/20 hover:bg-black/40 hover:border-[#FFBE0D]/30 transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up" aria-label="Step 1">
          <div className="w-[47px] h-[47px] flex items-center justify-center rounded-full border border-[#FFBE0D] bg-[#FFBE0D]/10 text-[#FFBE0D] text-lg font-bold mb-4 animate-pulse-subtle">
            1
          </div>
          <h4 className="text-[20px] font-montserrat font-semibold leading-tight mb-3 mt-6 text-start text-white">
            Subscribe to a plan
          </h4>
          <p className="text-[16px] text-gray-400 text-start leading-relaxed">
            Select a plan that fits your needs and jump on an onboarding call.
          </p>
        </li>

        <li className="w-full md:w-[398.66px] h-auto md:h-[209.31px] rounded-[25px] border border-[#303030] px-6 py-6 bg-black/20 hover:bg-black/40 hover:border-[#FFBE0D]/30 transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }} aria-label="Step 2">
          <div className="w-[47px] h-[47px] flex items-center justify-center rounded-full border border-[#FFBE0D] bg-[#FFBE0D]/10 text-[#FFBE0D] text-lg font-bold mb-4 animate-pulse-subtle">
            2
          </div>
          <h4 className="text-[20px] font-montserrat font-semibold leading-tight mb-3 mt-6 text-start text-white">
            Add a task
          </h4>
          <p className="text-[16px] text-gray-400 text-start leading-relaxed">
            List your first task on our shared Trello board by specifying the requirements.
          </p>
        </li>

        <li className="w-full md:w-[398.66px] h-auto md:h-[209.31px] rounded-[25px] border border-[#303030] px-6 py-6 bg-black/20 hover:bg-black/40 hover:border-[#FFBE0D]/30 transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }} aria-label="Step 3">
          <div className="w-[47px] h-[47px] flex items-center justify-center rounded-full border border-[#FFBE0D] bg-[#FFBE0D]/10 text-[#FFBE0D] text-lg font-bold mb-4 animate-pulse-subtle">
            3
          </div>
          <h4 className="text-[20px] font-montserrat font-semibold leading-tight mb-3 mt-6 text-start text-white">
            Enjoy results
          </h4>
          <p className="text-[16px] text-gray-400 text-start leading-relaxed">
            Receive your completed tasks in 2–4 business days.
          </p>
        </li>
      </ul>
    </section>
  );
}
