"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const testimonials = [
  {
    name: "Milos Vidic",
    title: "CEO @goatmarketing",
    review: "Thanks to Handmade, we experienced a significant boost in website traffic...",
    platform: "Clutch",
    rating: 5,
  },
  {
    name: "Rasesh Seth",
    title: "CEO @nextyn",
    review: "Vas was extremely easy to work with...",
    platform: "Upwork",
    rating: 5,
  },
  {
    name: "Goran Markovic",
    title: "Founder @viziya",
    review: "Working with Handmade on our website design was an exceptional experience...",
    platform: "Clutch",
    rating: 5,
  },
  {
    name: "Chris Hjort",
    title: "PM @host",
    review: "I highly recommend Vasilije. He is a hard working guy...",
    platform: "Clutch",
    rating: 5,
  },
  {
    name: "Borgar Erlendsson",
    title: "CEO @kozmoz",
    review: "True professional capable of delivering quality work...",
    platform: "Clutch",
    rating: 5,
  },
  {
    name: "Jasper Zhang",
    title: "CEO @hyperbolic",
    review: "Vasilije did an outstanding job designing our website...",
    platform: "Clutch",
    rating: 5,
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const scrollContentRef = useRef(null);
  const isInView = useInView(scrollRef, { once: false });
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    const content = scrollContentRef.current;

    if (!el || !content) return;

    // Clone content for infinite loop
    const clone = content.cloneNode(true);
    clone.classList.add("scroll-clone");
    el.appendChild(clone);

    let animationFrame;

    const scroll = () => {
      if (!scrolling) return;

      el.scrollTop += 0.5; // adjust speed

      if (el.scrollTop >= content.scrollHeight) {
        el.scrollTop = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    if (isInView) {
      setScrolling(true);
      animationFrame = requestAnimationFrame(scroll);
    } else {
      setScrolling(false);
      cancelAnimationFrame(animationFrame);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      const cloneEl = el.querySelector(".scroll-clone");
      if (cloneEl) el.removeChild(cloneEl);
    };
  }, [isInView, scrolling]);

  return (
    <section className="min-h-screen text-white px-6 py-20 relative">
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-2 text-sm rounded-full bg-zinc-800 text-yellow-400 border border-zinc-700">
          Testimonials
        </span>
      </div>

      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-light mb-12 leading-tight max-w-4xl mx-auto">
        Read what our clients are
        <br /> saying about us
      </h2>

      <div
        ref={scrollRef}
        className="relative mx-auto w-full max-w-6xl h-[600px] overflow-y-scroll no-scrollbar"
      >
        <div
          ref={scrollContentRef}
          className="scroll-content columns-1 md:columns-2 lg:columns-3 gap-[22px] space-y-[22px]"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="break-inside-avoid bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-800/50"
            >
              <header className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-700" />
                <div>
                  <h3 className="font-medium text-sm">{testimonial.name}</h3>
                  <p className="text-zinc-400 text-sm">{testimonial.title}</p>
                </div>
              </header>
              <blockquote className="text-zinc-300 text-sm leading-relaxed mb-6">
                “{testimonial.review}”
              </blockquote>
              <footer className="flex items-center gap-3">
                <span className="font-semibold text-sm">{testimonial.platform}</span>
                <span className="text-yellow-400 font-medium text-sm">{testimonial.rating}.0</span>
                <div className="flex text-yellow-400 text-sm">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



