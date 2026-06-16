import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import TrustedManufacturers from "@/components/TrustedManufacturers";
import CtaSection from "@/components/CtaSection";

const FeaturesGrid = dynamic(() => import("@/components/FeaturesGrid"), {
  loading: () => <div className="h-[600px] bg-slate-50" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturesGrid />
      <TrustedManufacturers />
      <CtaSection />
    </>
  );
}
