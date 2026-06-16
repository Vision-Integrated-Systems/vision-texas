"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const features = [
  {
    title: "Concept & Design",
    desc: "Expert consultation for Audio, Video, and Security infrastructure tailored to your floorplan.",
    link: "/services",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
      />
    ),
  },
  {
    title: "Custom A/V Integration",
    desc: "Seamless, reliable, and flexible systems designed for modern conference rooms and campuses.",
    link: "/services#av",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
      />
    ),
  },
  {
    title: "Rapid Support",
    desc: "Dependable technicians available 24/7 to ensure your systems remain operational.",
    link: "/service-ticket",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    ),
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "-50px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative group h-full card-glow"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${index * 150}ms`,
      }}
    >
      {/* Main Card */}
      <div className="relative h-full bg-white rounded-3xl p-10 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-2 z-10 overflow-hidden">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100 group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-500" />

        {/* Ghost Icon Background */}
        <div className="absolute -top-6 -right-6 text-slate-50 group-hover:text-blue-50/50 transition-colors duration-500 z-0 transform group-hover:scale-110 group-hover:-rotate-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-40 h-40"
          >
            {feature.icon}
          </svg>
        </div>

        {/* Primary Icon */}
        <div className="relative w-16 h-16 mb-8 bg-slate-50 border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-500"
          >
            {feature.icon}
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 z-10 relative">
          {feature.title}
        </h3>
        <p className="text-slate-600 leading-relaxed font-light z-10 relative grow">
          {feature.desc}
        </p>

        {/* Bottom CTA */}
        <div className="mt-8 pt-6 border-t border-slate-100 z-10 relative overflow-hidden">
          <Link
            href={feature.link}
            className="flex items-center text-sm font-bold text-blue-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 cursor-pointer hover:underline w-fit"
          >
            Discover How
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative z-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-blue-100/40 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            The Vision Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            We partner with the best manufacturers to deliver fully{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              integrated solutions
            </span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            Anyone can sell equipment. We start by understanding how you work,
            designing solutions that remove friction and ensure your systems talk
            to each other effortlessly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.title} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
