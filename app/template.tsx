/**
 * Page transition using CSS animations instead of Framer Motion.
 * This keeps the template as a server component and avoids
 * pulling Framer Motion into every route's initial bundle.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-enter">{children}</div>;
}
