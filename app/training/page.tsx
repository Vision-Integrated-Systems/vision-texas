import PageHero from "@/components/PageHero";
import TrainingContent from "@/components/TrainingContent";
import CtaSection from "@/components/CtaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Library | Vision Integrated Systems",
  description:
    "Master your systems with our curated collection of how-to videos and tutorials for Genetec, Axis, Crestron, and more.",
};

export default function TrainingPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero
        badge="Knowledge Base"
        title=""
        titleAccent="Training Library"
        subtitle="Master your systems with our curated collection of how-to videos and tutorials."
        variant="mesh"
        compact
      />

      <TrainingContent />
      <CtaSection />
    </div>
  );
}
