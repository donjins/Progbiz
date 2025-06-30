"use client";

export default function Price() {
  return (
    <section
      className="min-h-screen bg-neutral text-white px-6 py-20"
      aria-labelledby="pricing-heading"
    >
      <header className="text-center mb-16">
        <div className="inline-block px-4 py-1 mb-6 text-sm rounded-full bg-[#2f2f1b] text-yellow-300">
          Pricing
        </div>
        <h1
          id="pricing-heading"
          className="w-[886px] pb-[0.97px] text-5xl font-thin text-gray-400 mx-auto text-center"
        >
          Choose the relevant plan to build,<br /> grow and fasten your team
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] max-w-[1240px] mx-auto">
        <article className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
          <p className="uppercase text-sm text-gray-400 mb-4">STANDARD</p>
          <h2 className="text-6xl font-thin text-white">
            $2,150 <span className="text-base font-light text-gray-300 mr-1">/month</span>
          </h2>
          <p className="underline text-sm text-gray-300 mt-2 mb-10">
            One request at a time
          </p>
          <p className="text-gray-400 mb-2">What’s included:</p>
          <ul className="space-y-2 text-white/90 text-lg">
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> Unlimited requests</li>
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> ~48 hour delivery</li>
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> Unlimited brands</li>
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> Weekly meetings</li>
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> Pause or cancel anytime</li>
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> Managed via Slack and Trello</li>
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> All service except webflow</li>
          </ul>
          <img src="/subscribe.png" alt="subscribe" className="w-[340px] h-[60px] mt-9" />
          <img src="/bookdemo.png" alt="book demo" className="w-[340px] h-[60px] mt-5" />
        </article>

        <article className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 relative">
          <div className="absolute top-0 right-0 m-4 px-3 py-1 text-sm rounded-md bg-yellow-700/30 text-yellow-300 font-medium">
            Faster ⚡
          </div>
          <p className="uppercase text-sm text-gray-400 mb-4">PRO</p>
          <h2 className="text-6xl font-thin text-white">
            $3,150 <span className="text-base font-light text-gray-300">/month</span>
          </h2>
          <p className="underline text-sm text-gray-300 mt-2 mb-10">
            Double the requests
          </p>
          <p className="text-gray-400 mb-2">What’s included:</p>
          <ul className="space-y-2 text-white/90 text-lg">
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> Unlimited requests</li>
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> ~48 hour delivery</li>
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> Unlimited brands</li>
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> Weekly meetings</li>
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> Pause or cancel anytime</li>
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> Managed via Slack and Trello</li>
            <li className="flex gap-2 items-start"><span className="text-amber-300">✓</span> All service except webflow</li>
          </ul>
          <img src="/subscribe.png" alt="subscribe" className="w-[340px] h-[60px] mt-9" />
          <img src="/bookdemo.png" alt="book demo" className="w-[340px] h-[60px] mt-5" />
        </article>

        <div className="flex flex-col gap-6">
          <article className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 flex flex-col justify-between h-full">
            <div>
              <p className="uppercase text-sm text-gray-400 mb-4">PROJECT-BASED</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                For a custom fee delivered in milestones. Ideal for specific goals.<br />
                Custom project scope.
              </p>
              <p className="text-gray-400 mb-2 text-sm">What’s included:</p>
              <ul className="space-y-1 text-white/90 text-lg">
                <li className="flex items-start gap-2"><span className="text-amber-300">✓</span> Fixed scope of work</li>
                <li className="flex items-start gap-2"><span className="text-amber-300">✓</span> Delivered in milestones</li>
              </ul>
            </div>
            <button className="mt-10 pb-11 pt-22 h-[80px] w-full border border-gray-700 rounded-[40px] text-white text-sm font-medium transition">
              Send email
            </button>
          </article>

          <article className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 flex flex-col justify-between text-center">
            <div>
              <h4 className="text-4xl font-thin text-white mb-2">Refer & earn</h4>
              <p className="text-sm text-gray-400">
                Receive $150 for each referral!
              </p>
            </div>
            <button className="mt-6 h-[60px] w-full border border-gray-700 text-white text-sm font-medium rounded-[40px] hover:text-black transition">
              Join now
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}

