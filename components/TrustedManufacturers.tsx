import Image from "next/image";

export default function TrustedManufacturers() {
  const manufacturers = [
    { name: "Panduit", src: "/logos/panduit2.png", width: 180, height: 60 },
    { name: "Crestron", src: "/logos/crestron1.png", width: 180, height: 60 },
    { name: "Extron", src: "/logos/extron-logo.png", width: 180, height: 60 },
    { name: "QSC", src: "/logos/qsc-logo.png", width: 180, height: 60 },
    { name: "Biamp", src: "/logos/biamp.jpg", width: 180, height: 60 },
    { name: "Genetec", src: "/logos/genetec_logo.png", width: 180, height: 60 },
    { name: "Axis", src: "/logos/axis.png", width: 180, height: 60 },
  ];

  // Tripling the array ensures a seamless infinite scroll loop
  const allLogos = [...manufacturers, ...manufacturers, ...manufacturers];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-y border-slate-800/50 z-10">
      {/* Ambient Dark Background Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center justify-center gap-4 mb-16">
          <span className="w-12 h-px bg-slate-800"></span>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em]">
            Powered By Industry Leaders
          </p>
          <span className="w-12 h-px bg-slate-800"></span>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Deep Dark Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-linear-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-linear-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused] items-center gap-6 py-4">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-none w-56 h-28 bg-white/95 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl flex items-center justify-center p-6 group transition-all duration-500 hover:bg-white hover:scale-105 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-full max-w-full object-contain filter transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
