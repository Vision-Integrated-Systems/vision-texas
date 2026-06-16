import { Suspense } from "react";
import ApplicationForm from "@/components/ApplicationForm";

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden pt-32 pb-24">
      {/* Background Noise & Gradients */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply"></div>
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[100px] mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Suspense
          fallback={
            <div className="flex flex-col justify-center items-center min-h-[500px] text-slate-400">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-sm font-medium tracking-wide uppercase">
                Loading Application...
              </p>
            </div>
          }
        >
          <ApplicationForm />
        </Suspense>
      </div>
    </div>
  );
}
