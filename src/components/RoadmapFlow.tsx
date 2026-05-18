const STEPS = ["Data", "Insights", "Decisions", "Actions", "Autopilot"];

export function RoadmapFlow() {
  return (
    <div className="rounded-3xl border border-border bg-surface/40 p-8 md:p-12">
      <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
        {STEPS.map((step, i) => (
          <div key={step} className="flex flex-1 items-center gap-4 md:flex-col md:gap-3">
            <div className="flex items-center gap-3 md:flex-col md:gap-3">
              <div
                className="grid h-12 w-12 place-items-center rounded-full border border-border-strong bg-background font-mono text-xs text-muted-foreground"
                style={i === STEPS.length - 1 ? { borderColor: "color-mix(in oklab, var(--primary) 60%, transparent)", color: "var(--foreground)" } : undefined}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-base text-foreground md:text-center">
                {step}
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <div className="hidden flex-1 md:block">
                <div
                  className="h-px w-full"
                  style={{ background: "linear-gradient(90deg, color-mix(in oklab, var(--primary) 35%, transparent), transparent)" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
