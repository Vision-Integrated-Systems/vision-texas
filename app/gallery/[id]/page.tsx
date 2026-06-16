import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, CpuChipIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";
import { projects } from "@/app/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-slate-50">
      <section className="relative h-[70vh] min-h-[600px] flex items-end pb-16 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover opacity-60"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link href="/gallery" className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors text-sm font-medium tracking-wide uppercase">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Gallery
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                {project.title}
              </h1>
            </div>

            <div className="lg:mb-2">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <span className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Client</span>
                  <span className="block text-white font-semibold text-lg leading-tight">{project.client}</span>
                </div>
                <div>
                  <span className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Timeline</span>
                  <span className="block text-white font-semibold text-lg leading-tight">{project.duration}</span>
                </div>
                {project.stats?.map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-slate-400 text-xs uppercase tracking-wider mb-2">{stat.label}</span>
                    <span className="block text-white font-semibold text-lg leading-tight">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Challenge</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug">Identifying the Obstacles</h2>
            <div className="prose prose-lg prose-invert text-slate-300 leading-relaxed">
              <p>{project.challenge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">The Solution</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-snug">Delivering Excellence</h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed mb-16">
              <p>{project.solution}</p>
            </div>

            {/* Tech Stack Grid */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <CpuChipIcon className="w-8 h-8 text-blue-600" />
                Technology Deployed
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.gearList?.map((item, i) => (
                  <div key={i} className="flex items-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </div>
  );
}
