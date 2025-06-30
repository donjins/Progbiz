"use client";

const faqData = [
  "Is it really unlimited?",
  "Why wouldn't I just hire a freelancer?",
  "Why wouldn't I just hire a full-time designer?",
  "Can I pause, renew or cancel at any time?",
  "Are there any contracts?",
  "How do we communicate?",
  "What if I only have one design task?",
  "What is an active Task?",
  "Who are designers?",
  "How many designs can be done in a single month?",
  "Are there any refunds if I don't like the designs?",
];

export default function Faq() {
  return (
    <section className="min-h-screen text-white px-6 py-20" aria-labelledby="faq-title">
      <div className="text-center mb-6">
        <span className="inline-block px-4 py-1 text-sm rounded-full bg-[#2f2f1b] text-yellow-300">
          Insights
        </span>
      </div>

      <h1
        id="faq-title"
        className="text-center text-[54px] font-thin font-montserrat mb-12 leading-[59.94px] text-gray-400"
      >
        Frequently asked<br />
        questions
      </h1>

      <ul className="max-w-3xl mx-auto space-y-4">
        {faqData.map((question, index) => (
          <li
            key={index}
            className="bg-[#1a1a1a] rounded-[14px] px-6 py-4 flex justify-between items-center hover:bg-[#222] transition"
          >
            <span className="text-base font-light">{question}</span>
            <span className="text-xl font-thin">+</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
