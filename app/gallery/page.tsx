import PageHero from "@/components/PageHero";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/app/lib/projects";

export const metadata: Metadata = {
  title: "Project Gallery | Vision Integrated Systems",
  description: "Explore our portfolio of AV integration, structured cabling, and security projects across Texas.",
};

export default function Gallery() {
  return (
    <>
      <PageHero
        badge="Proven Excellence"
        title="Project"
        titleAccent="Gallery"
        subtitle="See the quality and scope of our work across industries."
        variant="radial"
      />

      <section className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Link
                  href={`/gallery/${project.id}`}
                  className="block relative overflow-hidden h-72"
                >
                  <div className="absolute inset-0 bg-slate-900/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Case Study <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>

                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm border border-slate-200/50">
                      {project.category}
                    </span>
                  </div>
                </Link>

                <div className="p-8 flex flex-col flex-1 relative">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 pr-8">
                    <Link href={`/gallery/${project.id}`}>{project.title}</Link>
                  </h3>
                  <div className="w-12 h-1 bg-blue-100 mb-4 rounded-full group-hover:bg-blue-600 transition-colors duration-500" />
                  <p className="text-slate-600 leading-relaxed flex-1 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-sm text-slate-400 font-medium">
                    <span>{project.client}</span>
                    <Link
                      href={`/gallery/${project.id}`}
                      className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline cursor-pointer"
                    >
                      Read More <ArrowRightIcon className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
