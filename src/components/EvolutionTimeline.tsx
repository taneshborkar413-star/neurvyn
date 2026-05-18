import { motion } from "motion/react";

const STAGES = [
  { era: "Past", label: "Paper bookkeeping", note: "Manual, isolated, opaque." },
  { era: "1990s", label: "Billing software", note: "Digital, but still siloed." },
  { era: "2010s", label: "Connected systems", note: "Apps talked. Data still fragmented." },
  { era: "Now", label: "Operational intelligence", note: "Systems understand workflows." },
  { era: "Next", label: "Autonomous business", note: "Operations that execute themselves." },
];

export function EvolutionTimeline() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-0 right-0 top-[34px] hidden h-px md:block"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 45%, transparent), transparent)",
        }}
      />
      <ol className="grid gap-8 md:grid-cols-5 md:gap-4">
        {STAGES.map((s, i) => (
          <motion.li
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            <div className="flex items-center gap-3 md:flex-col md:items-start">
              <div
                className="relative z-10 h-3 w-3 shrink-0 rounded-full"
                style={{
                  background:
                    i === STAGES.length - 1 ? "var(--gradient-signal)" : "oklch(1 0 0 / 0.25)",
                  boxShadow: i === STAGES.length - 1 ? "0 0 24px -2px var(--primary)" : "none",
                }}
              />
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.era}
              </div>
            </div>
            <div className="mt-4 font-display text-lg text-foreground">{s.label}</div>
            <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
