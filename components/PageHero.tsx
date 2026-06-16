import { ReactNode } from "react";

type HeroVariant =
  | "default"
  | "mesh"
  | "grid"
  | "radial"
  | "warm"
  | "minimal";

interface PageHeroProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  variant?: HeroVariant;
  children?: ReactNode;
  compact?: boolean;
}

/**
 * Reusable page hero section with multiple visual variants.
 * Replaces duplicated hero sections across all pages.
 *
 * Variants:
 * - default: Blue/indigo gradient orbs (original style)
 * - mesh: Animated CSS mesh gradient background
 * - grid: Technical grid pattern with glow
 * - radial: Radial gradient burst from center
 * - warm: Red/orange accent tones (for service/support pages)
 * - minimal: Clean, typography-focused with minimal decoration
 */
export default function PageHero({
  badge,
  title,
  titleAccent,
  subtitle,
  variant = "default",
  children,
  compact = false,
}: PageHeroProps) {
  const bgEffects: Record<HeroVariant, ReactNode> = {
    default: (
      <>
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] mix-blend-screen" />
        </div>
      </>
    ),
    mesh: (
      <>
        <div className="absolute inset-0 hero-mesh-bg opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.06] pointer-events-none" />
      </>
    ),
    grid: (
      <>
        <div className="absolute inset-0 hero-grid-bg opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      </>
    ),
    radial: (
      <>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.3),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.06] pointer-events-none" />
      </>
    ),
    warm: (
      <>
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-red-600 rounded-full blur-[120px] mix-blend-screen opacity-40" />
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] mix-blend-screen opacity-40" />
        </div>
      </>
    ),
    minimal: (
      <>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-600/20 blur-[120px] pointer-events-none z-0" />
      </>
    ),
  };

  return (
    <section
      className={`relative bg-slate-950 text-center text-white overflow-hidden ${
        compact ? "py-28 lg:py-36" : "py-32 lg:py-48"
      }`}
    >
      {/* Background Variant */}
      {bgEffects[variant]}

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-overlay pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {badge && (
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium tracking-wide backdrop-blur-md animate-fade-in-up">
            {badge}
          </div>
        )}

        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight animate-fade-in-up animation-delay-100">
          {titleAccent ? (
            <>
              {title} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-white">
                {titleAccent}
              </span>
            </>
          ) : (
            title
          )}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up animation-delay-200">
            {subtitle}
          </p>
        )}

        {/* Optional children for CTAs, links, etc. */}
        {children && (
          <div className="mt-12 animate-fade-in-up animation-delay-300">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
