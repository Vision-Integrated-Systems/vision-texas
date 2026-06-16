"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, CpuChipIcon } from "@heroicons/react/24/outline";

export default function CtaSection() {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-950 z-10">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0 pointer-events-none" />

      {/* Ambient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className="relative max-w-5xl mx-auto bg-slate-900/50 backdrop-blur-2xl border border-slate-700/50 rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-2xl text-center overflow-hidden group"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Hover Sheen */}
          <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Tech Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 z-0" />

          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto bg-blue-500/10 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-pulse-glow">
              <CpuChipIcon className="w-8 h-8 text-blue-400" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Ready for Technology That <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-300 to-blue-200">
                Works For You?
              </span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Let&apos;s start by understanding your goals. Whether you need a
              simple update or a campus-wide deployment, we engineer solutions
              custom-built around your environment and your people.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                href="/contact-us"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-blue-600 border border-transparent rounded-full hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:-translate-y-1 overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start the Conversation
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-blue-400/30 z-0" />
              </Link>

              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 transition-all duration-300 bg-slate-800 border border-slate-700 rounded-full hover:bg-slate-700 hover:text-white hover:border-slate-500 hover:-translate-y-1 hover:shadow-xl w-full sm:w-auto"
              >
                Try Solution Finder
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
