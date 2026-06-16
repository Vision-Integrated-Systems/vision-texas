import PageHero from "@/components/PageHero";
import StatsSection from "@/components/StatsSection";
import TrustedManufacturers from "@/components/TrustedManufacturers";
import CtaSection from "@/components/CtaSection";
import type { Metadata } from "next";
import {
  ShieldCheckIcon,
  LightBulbIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Vision Integrated Systems",
  description:
    "Learn about Vision's 30+ years of excellence in providing audio, video, cabling, and security solutions as a trusted partner for businesses across Texas.",
};

const leaders = [
  {
    name: "Bo Barron",
    title: "Managing Director",
    bio: "Leading Vision Integrated Systems with a focus on strategy and customer satisfaction.",
    imageSrc: "/bo.webp",
  },
  {
    name: "Zack Spelz",
    title: "Director of Business Development",
    bio: "Ensuring operational excellence and efficient project delivery across all sectors.",
    imageSrc: "/zack.jpeg",
  },
  {
    name: "Josh Schulze",
    title: "Director of Operations",
    bio: "Overseeing technical standards and driving innovation in AV and security solutions.",
    imageSrc: "/josh.webp",
  },
];

const values = [
  {
    name: "Integrity",
    description:
      "We build trust through honest communication and unwavering commitment to our clients.",
    icon: <ShieldCheckIcon className="w-8 h-8" />,
  },
  {
    name: "Innovation",
    description:
      "We constantly explore new technologies to deliver cutting-edge, reliable solutions.",
    icon: <LightBulbIcon className="w-8 h-8" />,
  },
  {
    name: "Collaboration",
    description:
      "We work as a unified team with our clients and partners to achieve shared goals.",
    icon: <UsersIcon className="w-8 h-8" />,
  },
];

export default function About() {
  return (
    <>
      {/* Hero — mesh variant for visual variety */}
      <PageHero
        badge="Since 2018"
        title="About"
        titleAccent="Vision Integrated Systems"
        subtitle="Building the infrastructure that powers modern business."
        variant="mesh"
      />

      <StatsSection />

      {/* Our Story */}
      <section
        id="our-story"
        className="py-24 md:py-32 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-50 skew-x-12 -ml-20 z-0 opacity-50 pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] z-0 pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative z-10">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-blue-600" />
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                Engineering Systems <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                  That Actually Work
                </span>
              </h2>

              <div className="prose prose-lg text-slate-600 leading-relaxed max-w-none">
                <p className="text-xl text-slate-800 font-medium mb-6 leading-snug">
                  At Vision Integrated Systems, we believe technology should
                  simplify operations — not complicate them.
                </p>
                <p className="mb-6">
                  Anyone can sell cameras, access control, cabling, or AV
                  equipment. But when systems don&apos;t talk to each other,
                  when workflows break down, or when users avoid the technology
                  altogether, the problem isn&apos;t the hardware — it&apos;s
                  the integration.{" "}
                  <strong className="text-blue-600 font-semibold">
                    That&apos;s where Vision comes in.
                  </strong>
                </p>
                <p>
                  We start by understanding how you work, what matters most, and
                  where technology can remove friction instead of adding it.
                  From access control and video surveillance to structured
                  cabling and audiovisual systems, we design solutions that are
                  custom-built around your environment, your people, and your
                  goals.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 relative group w-full max-w-2xl mx-auto mt-10 lg:mt-0">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-2xl transform scale-95 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 border-2 border-blue-100 rounded-3xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 bg-white border border-slate-100">
                <Image
                  src="/vision-team.jpg"
                  alt="The Vision Integrated Systems team"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-tr from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              <div className="absolute -bottom-8 -left-4 lg:-left-12 bg-white/90 backdrop-blur-xl border border-slate-200 p-6 rounded-2xl shadow-2xl z-20 flex items-center gap-5 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-14 h-14 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  30+
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Years of
                  </p>
                  <p className="text-lg text-blue-600 font-bold">Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 relative overflow-hidden bg-blue-900 text-white">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 to-slate-900 z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light z-0" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-sm font-bold text-blue-300 mb-8 uppercase tracking-[0.2em]">
            Our Mission
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-3xl md:text-5xl font-serif leading-tight text-transparent bg-clip-text bg-linear-to-b from-white to-blue-200">
              &quot;To engineer integrated systems that remove friction and
              simplify operations—delivering technology that truly works for
              your people.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-blue-100/40 to-transparent pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-linear-to-tr from-indigo-100/40 to-transparent pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 flex justify-center items-center gap-4">
              <span className="w-12 h-px bg-blue-600/30" />
              Our DNA
              <span className="w-12 h-px bg-blue-600/30" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              The Principles We Build On
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-light">
              The core values that guide every decision we make, every system we
              design, and every cable we pull.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div key={value.name} className="relative group h-full card-glow">
                <div className="relative h-full p-10 bg-white rounded-3xl border border-slate-200/60 shadow-xl flex flex-col hover:-translate-y-2 transition-all duration-500 z-10 overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-40 h-40 bg-blue-50 rounded-full group-hover:bg-blue-600 transition-colors duration-500 ease-in-out" />

                  <div className="absolute top-6 right-6 text-blue-100/50 group-hover:text-white/20 transition-colors duration-500 z-0">
                    <div className="w-16 h-16">{value.icon}</div>
                  </div>

                  <div className="relative w-16 h-16 mb-8 bg-white border border-slate-100 shadow-md text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-500 z-10">
                    {value.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 z-10 relative group-hover:text-blue-600 transition-colors duration-300">
                    {value.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed z-10 relative grow">
                    {value.description}
                  </p>

                  <div className="mt-8 z-10 relative">
                    <div className="w-12 h-1 bg-slate-200 rounded-full group-hover:w-full group-hover:bg-linear-to-r group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-500 ease-out" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay z-0" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 flex justify-center items-center gap-4">
              <span className="w-8 h-px bg-blue-500/50" />
              Our Leadership
              <span className="w-8 h-px bg-blue-500/50" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              The Team Driving{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
                Innovation
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Decades of combined experience ensuring every system we design
              meets the highest standard of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {leaders.map((leader, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-linear-to-b from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-2 overflow-hidden z-10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-linear-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-full" />

                  <div className="relative mb-8 mt-4">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-10 group-hover:opacity-40 transition-opacity duration-500" />

                    <div className="relative w-44 h-44 rounded-full p-1 bg-linear-to-br from-slate-700 to-slate-800 group-hover:from-blue-500 group-hover:to-indigo-500 transition-colors duration-500 z-10 shadow-2xl">
                      <div className="w-full h-full rounded-full border-4 border-slate-900 overflow-hidden relative">
                        <Image
                          src={leader.imageSrc}
                          alt={`Head shot of ${leader.name}`}
                          fill
                          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-slate-800 rounded-full border border-slate-600 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-400 transition-all duration-500 shadow-xl z-20">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-blue-400 font-bold mb-6 text-xs uppercase tracking-widest">
                    {leader.title}
                  </p>

                  <div className="w-12 h-px bg-slate-700 mb-6 group-hover:bg-blue-500/50 transition-colors duration-500" />

                  <p className="text-slate-400 leading-relaxed font-light grow">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security License */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] z-0 pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 flex justify-center items-center gap-4">
              <span className="w-12 h-px bg-blue-600/30" />
              Licensed &amp; Certified
              <span className="w-12 h-px bg-blue-600/30" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Security License
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              Vision Integrated Systems is a fully licensed security contractor,
              meeting all state requirements to design, install, and service
              security systems across Texas.
            </p>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="flex flex-col items-center gap-6 bg-slate-50 border border-slate-200 rounded-3xl p-10 shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">
                  Texas DPS License Number
                </p>
                <p className="text-3xl font-bold text-slate-900 tracking-wider">
                  B20960901
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedManufacturers />
      <CtaSection />
    </>
  );
}
