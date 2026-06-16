import SolutionFinder from "@/components/SolutionFinder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solution Finder | Vision Integrated Systems",
  description:
    "Answer a few questions to find the perfect technology solution for your business.",
};

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-slate-900 pt-32 pb-20 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-white">
              Perfect Solution
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">
            Not sure where to start? Tell us a bit about your project, and
            we&apos;ll point you in the right direction.
          </p>
        </div>

        <SolutionFinder />
      </div>
    </div>
  );
}
