export function AnimatedBackgroundOrbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-8%] top-24 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl motion-safe:animate-float-slow" />
      <div className="absolute right-[-10%] top-10 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl motion-safe:animate-float-slow [animation-delay:1.5s]" />
      <div className="absolute bottom-[-10%] left-1/3 h-64 w-64 rounded-full bg-slate-100/80 blur-3xl motion-safe:animate-pulse-soft" />
    </div>
  );
}
