export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
        <span className="text-sm font-medium tracking-widest uppercase text-slate-400">
          Loading...
        </span>
      </div>
    </div>
  );
}
