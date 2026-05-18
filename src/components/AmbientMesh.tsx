export function AmbientMesh({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute -top-40 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl opacity-40 animate-ambient-drift"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 35%, transparent), transparent 60%)" }}
      />
      <div className="absolute bottom-0 right-0 h-[30rem] w-[40rem] rounded-full blur-3xl opacity-30 animate-ambient-drift"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--secondary) 35%, transparent), transparent 60%)", animationDelay: "-12s" }}
      />
    </div>
  );
}
