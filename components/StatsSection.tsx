"use client";

import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Years of Combined Experience", value: "30+", numericValue: 30 },
  { label: "Projects Completed", value: "1k+", numericValue: 1000 },
  { label: "Certified Technicians", value: "100%", numericValue: 100 },
  { label: "Texas Clients", value: "100+", numericValue: 100 },
];

/** Animated counter that counts up when visible */
function AnimatedStat({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="p-4 group cursor-default"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 100}ms`,
      }}
    >
      <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 mb-4 group-hover:from-blue-400 group-hover:to-indigo-400 transition-all duration-500 transform group-hover:scale-110 inline-block drop-shadow-lg">
        {value}
      </div>
      <div className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] group-hover:text-blue-200 transition-colors duration-500">
        {label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden z-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-1/2 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Glowing Borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group/container">
          <div className="absolute inset-0 bg-linear-to-tr from-blue-500/5 via-transparent to-transparent opacity-0 group-hover/container:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 text-center md:divide-x divide-slate-700/50">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
