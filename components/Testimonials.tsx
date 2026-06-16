"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Facilities Manager, TechCorp",
    content:
      "Vision Integrated Systems transformed our conference rooms. The video clarity is amazing and the system is so easy to use.",
  },
  {
    name: "Michael Ross",
    role: "Director of IT, EduCampus",
    content:
      "The fiber backbone installation was flawless. Their team worked around our schedule and finished ahead of time.",
  },
  {
    name: "David Chen",
    role: "Owner, Chen Logistics",
    content:
      "Security is vital for our warehouses. Vision provided a robust camera system that we can access from anywhere.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden z-10">
      {/* Dynamic Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-bold tracking-widest uppercase mb-6 shadow-inner">
            <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
            Client Success
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
              Partners
            </span>{" "}
            Say
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Don&apos;t just take our word for it. Hear from the businesses that
            rely on our integrated systems every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="group relative h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            >
              {/* Hover Glow Behind Card */}
              <div className="absolute inset-0 bg-linear-to-b from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Glassmorphism Card */}
              <div className="relative h-full bg-slate-900/60 backdrop-blur-2xl p-10 rounded-3xl border border-slate-700/50 hover:border-blue-500/40 shadow-2xl transition-all duration-500 flex flex-col hover:-translate-y-2 z-10 overflow-hidden">
                {/* Decorative Top Accent Line */}
                <div className="absolute top-0 left-8 w-20 h-1.5 bg-linear-to-r from-blue-500 to-indigo-500 rounded-b-full opacity-50 group-hover:opacity-100 group-hover:w-32 transition-all duration-500"></div>

                {/* Giant Background Quote Icon */}
                <div className="absolute -top-4 -right-2 text-8xl text-slate-800/50 font-serif leading-none select-none group-hover:text-blue-900/20 transition-colors duration-500 z-0">
                  &quot;
                </div>

                {/* Glowing Stars */}
                <div className="flex text-yellow-400/90 mb-8 gap-1 relative z-10">
                  {[...Array(5)].map((_, idx) => (
                    <StarIcon
                      key={idx}
                      className="w-5 h-5 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
                    />
                  ))}
                </div>

                {/* Review Content */}
                <p className="text-slate-300 mb-10 leading-relaxed italic text-lg relative z-10 grow">
                  &quot;{t.content}&quot;
                </p>

                {/* Author Block */}
                <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-slate-700/50 group-hover:border-slate-600 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-500">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white group-hover:text-blue-300 transition-colors">
                      {t.name}
                    </p>
                    <p className="text-sm text-indigo-300/80 font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
