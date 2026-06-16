import PageHero from "@/components/PageHero";
import StatsSection from "@/components/StatsSection";
import CtaSection from "@/components/CtaSection";
import type { Metadata } from "next";
import {
  CheckCircleIcon,
  ArrowDownCircleIcon,
  VideoCameraIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SignalIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Vision Integrated Systems",
  description:
    "Explore our professional services: commercial audio/video, structured cabling (Cat6, Fiber), and integrated security & access control systems.",
};

export default function Services() {
  return (
    <>
      {/* Hero — grid variant for technical feel */}
      <PageHero
        badge="End-to-End Integration"
        title="Technology That"
        titleAccent="Works For You"
        subtitle="Technology should simplify operations, not complicate them. Explore our integrated solutions designed to remove friction, enhance security, and power your daily workflows."
        variant="grid"
      >
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          {[
            { id: "av", icon: VideoCameraIcon, text: "Audio & Video" },
            { id: "cabling", icon: ServerStackIcon, text: "Structured Cabling" },
            { id: "security", icon: ShieldCheckIcon, text: "Security" },
            { id: "data-center", icon: CpuChipIcon, text: "Data Center" },
          ].map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-md"
            >
              <link.icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
              <span className="text-slate-300 group-hover:text-white transition-colors">
                {link.text}
              </span>
              <ArrowDownCircleIcon className="w-4 h-4 text-slate-500 group-hover:text-blue-300 transition-colors ml-2" />
            </Link>
          ))}
        </div>
      </PageHero>

      <StatsSection />

      {/* Audio & Video */}
      <section id="av" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative group w-full max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-700" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 z-10">
                <Image
                  src="/services/audio_video_v2.webp"
                  alt="Modern conference room with integrated AV system"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white/90 backdrop-blur-xl border border-slate-200 p-6 rounded-2xl shadow-2xl z-20 flex items-center gap-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <SignalIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Systems Synced</p>
                  <p className="text-xs text-slate-500 font-medium">100% Uptime Active</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative z-10">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                <VideoCameraIcon className="w-5 h-5" /> Audio &amp; Video
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Collaboration Without the{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                  Friction
                </span>
              </h2>
              <p className="mb-8 text-lg text-slate-600 leading-relaxed">
                When AV systems don&apos;t talk to each other, meetings break
                down and users avoid the technology. We design and integrate
                audio, video, and control systems that remove the frustration
                from collaboration.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Conference Rooms", "Huddle Spaces", "Digital Signage", "Video Walls", "Sound Masking", "Zoom/Teams Rooms"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-colors group"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-blue-500 shrink-0 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="text-slate-700 font-semibold">{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Cabling */}
      <section id="cabling" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 hero-grid-bg opacity-[0.15]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 relative group w-full max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-700" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 z-10 bg-slate-800">
                <Image
                  src="/services/cabling.webp"
                  alt="Structured cabling installation in a server room"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-slate-800/90 backdrop-blur-xl border border-slate-600 p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                  <ServerStackIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Cat6A / Fiber</p>
                  <p className="text-xs text-slate-400 font-medium">Certified Backbone</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                <ServerStackIcon className="w-5 h-5" /> Structured Cabling
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The Foundation of <br />{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-teal-300">
                  True Integration
                </span>
              </h2>
              <p className="mb-8 text-lg text-slate-300 leading-relaxed font-light">
                Seamless integration requires a flawless physical foundation.
                Whether it&apos;s a server room cleanup or a campus-wide fiber
                optic backbone, we design and install structured cabling systems
                that ensure reliable communication today and effortless scaling
                tomorrow.
              </p>
              <ul className="space-y-5">
                {["Copper Cabling", "Fiber Optic Installation & Splicing", "Server Room & Rack Cleanups", "Certified Installations"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/30 transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-4 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                      <span className="font-medium">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-100/50 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative group w-full max-w-2xl mx-auto">
              <div className="absolute -inset-4 bg-dot-pattern z-0 transform translate-x-8 translate-y-8 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 opacity-30" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white z-10 bg-white">
                <Image
                  src="/services/security_cam.webp"
                  alt="High-definition security camera system"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white/90 backdrop-blur-xl border border-slate-200 p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Active Monitoring</p>
                  <p className="text-xs text-slate-500 font-medium">Facility Secured</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative z-10">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                <ShieldCheckIcon className="w-5 h-5" /> Security Solutions
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Unified Security That{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                  Simplifies Operations
                </span>
              </h2>
              <p className="mb-8 text-lg text-slate-600 leading-relaxed">
                Anyone can hang a camera, but true security comes from systems
                that work together. We engineer unified access control and video
                surveillance platforms that give you total visibility and
                control.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "IP Video Surveillance", desc: "Crystal clear visibility anywhere." },
                  { title: "Access Control", desc: "Manage permissions instantly." },
                  { title: "Intrusion Detection", desc: "Proactive alert systems." },
                  { title: "Unified Dashboards", desc: "One platform for everything." },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
                  >
                    <h4 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Center */}
      <section id="data-center" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 hero-grid-bg opacity-[0.15]" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative group w-full max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-700" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 z-10 bg-slate-800">
                <Image
                  src="/services/data_center.png"
                  alt="Data center with server racks and structured cabling"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-slate-800/90 backdrop-blur-xl border border-slate-600 p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Panduit</p>
                  <p className="text-xs text-slate-400 font-medium">Silver Partner</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                <CpuChipIcon className="w-5 h-5" /> Data Center
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Every Cable. Every Cabinet.{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-teal-300">
                  Zero Compromise.
                </span>
              </h2>
              <p className="mb-6 text-lg text-slate-300 leading-relaxed font-light">
                From the raised floor to the top of the rack, we design and build
                data centers engineered for reliability, density, and growth. Our
                team delivers complete infrastructure&mdash;structured cabling,
                power, cooling, racks, and cable management&mdash;so your critical
                systems stay online and ready to scale.
              </p>
              <p className="mb-8 text-lg text-slate-300 leading-relaxed font-light">
                As a certified{" "}
                <span className="font-semibold text-white">
                  Panduit Silver Partner
                </span>
                , we deliver industry-leading data center solutions backed by
                proven products, certified installations, and manufacturer-grade
                warranties you can trust.
              </p>
              <ul className="space-y-5">
                {["Data Center Design & Build", "Rack & Cabinet Deployment", "High-Density Structured Cabling", "Power & Cooling Infrastructure", "Panduit Silver Partner Solutions"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-slate-200 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800 hover:border-blue-500/30 transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-4 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                      <span className="font-medium">{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
