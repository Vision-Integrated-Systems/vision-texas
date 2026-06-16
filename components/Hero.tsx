"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* ─── Layer 1: Base Noise Texture ─── */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay z-0 pointer-events-none" />

      {/* ─── Layer 2: Animated Grid Lines ─── */}
      <div className="absolute inset-0 hero-grid-bg opacity-[0.12] pointer-events-none z-0" />

      {/* ─── Layer 3: Animated Glowing Orbs ─── */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[15%] -right-[5%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-blue-600/25 rounded-full blur-[100px] mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-[15%] -left-[5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-indigo-600/25 rounded-full blur-[100px] mix-blend-screen"
        />
        {/* Third subtle orb for depth */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-cyan-600/15 rounded-full blur-[80px] mix-blend-screen"
        />
      </div>

      {/* ─── Layer 4: Radial Vignette ─── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,6,23,0.6))] pointer-events-none z-[1]" />

      {/* ─── Content ─── */}
      <div className="relative z-10 text-center text-white px-4 container mx-auto flex flex-col items-center mt-10">
        {/* Badge */}
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-widest uppercase backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.12)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            <span>Next-Generation Integration</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-8 drop-shadow-2xl max-w-5xl mx-auto leading-[1.08] animate-fade-in-up animation-delay-100">
          One Vision for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-300 to-white">
            Integrated Solutions
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-fade-in-up animation-delay-200">
          We don&apos;t force solutions into spaces. We engineer systems that
          fit.{" "}
          <br className="hidden md:block" />
          <span className="font-medium text-blue-400">
            Reliable. Scalable. Secure. Easy to use.
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto animate-fade-in-up animation-delay-300">
          <Link
            href="/services"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-blue-600 border border-transparent rounded-full hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">Explore Services</span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-blue-400/30 z-0" />
          </Link>

          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-white/5 border border-white/20 rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
            Scroll
          </span>
          <ChevronDownIcon className="w-5 h-5 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
