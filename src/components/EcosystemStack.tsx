import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const LAYERS = [
  {
    slug: "/ledger",
    name: "Neurvyn Ledger",
    role: "Daily operational utility",
    description:
      "Billing, inventory, CRM. The operating habit that grounds the ecosystem in everyday work.",
    accent: "oklch(0.72 0.16 250)",
  },
  {
    slug: "/solutions",
    name: "Neurvyn Solutions",
    role: "Implementation bridge",
    description:
      "Websites, automation, workflow setup, AI integration. How operations transform in practice.",
    accent: "oklch(0.7 0.18 270)",
  },
  {
    slug: "/os",
    name: "Neurvyn OS",
    role: "Connected operational layer",
    description:
      "Systems stop being silos. Operations gain visibility, memory, and shared context.",
    accent: "oklch(0.65 0.2 280)",
  },
  {
    slug: "/intelligence",
    name: "Neurvyn Intelligence",
    role: "Decisions & insight",
    description:
      "Pattern recognition across workflows. Anomalies become signals. Reports become recommendations.",
    accent: "oklch(0.63 0.22 285)",
  },
  {
    slug: "/autopilot",
    name: "Neurvyn Autopilot",
    role: "Autonomous execution",
    description:
      "Operations that run themselves. The destination of the operational intelligence curve.",
    accent: "oklch(0.74 0.17 295)",
  },
] as const;

export function EcosystemStack() {
  return (
    <div className="grid gap-3">
      {LAYERS.map((layer, i) => (
        <motion.div
          key={layer.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to={layer.slug}
            className="group relative block overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 transition-all duration-500 hover:border-primary/40 hover:bg-surface md:p-8"
          >
            <div
              aria-hidden
              className="absolute -left-px top-0 bottom-0 w-px opacity-60 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `linear-gradient(180deg, transparent, ${layer.accent}, transparent)`,
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(ellipse 50% 80% at 0% 50%, color-mix(in oklab, ${layer.accent} 18%, transparent), transparent 60%)`,
              }}
            />
            <div className="relative grid gap-4 md:grid-cols-[1fr_2fr_auto] md:items-center md:gap-8">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {layer.role}
                  </div>
                  <div className="mt-1 font-display text-xl text-foreground md:text-2xl">
                    {layer.name}
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {layer.description}
              </p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground/80 transition-colors group-hover:text-primary">
                Open
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M3 7h8M7.5 3l3.5 4-3.5 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
