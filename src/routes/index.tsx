import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { AmbientMesh } from "@/components/AmbientMesh";
import { EcosystemStack } from "@/components/EcosystemStack";
import { EvolutionTimeline } from "@/components/EvolutionTimeline";
import { RoadmapFlow } from "@/components/RoadmapFlow";
import { SectionLabel } from "@/components/SectionLabel";
import { SignalButton } from "@/components/SignalButton";
import { SignalNetwork } from "@/components/SignalNetwork";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neurvyn — From business software to operational intelligence" },
      { name: "description", content: "Neurvyn connects operations, understands workflows, and builds the intelligence layer modern businesses will run on." },
      { property: "og:title", content: "Neurvyn — Operational intelligence for modern businesses" },
      { property: "og:description", content: "One ecosystem. Five layers. From daily utility to autonomous operations." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <AmbientMesh />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionLabel>The operational intelligence ecosystem</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-5xl font-display text-5xl font-medium leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]"
          >
            <span className="text-foreground">From business software to </span>
            <span className="text-gradient-signal">operational intelligence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Neurvyn connects operations, understands workflows, and builds the
            intelligence layer modern businesses will run on.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <SignalButton to="/ecosystem" variant="primary">Explore the ecosystem</SignalButton>
            <SignalButton to="/ledger" variant="ghost">View Neurvyn Ledger</SignalButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mt-20 rounded-3xl border border-border bg-surface/30 p-4 md:p-8"
          >
            <SignalNetwork />
          </motion.div>
        </div>
      </section>

      {/* THE SHIFT */}
      <section className="border-t border-border bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel>The shift</SectionLabel>
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight md:text-5xl">
                Every era redefines <span className="text-gradient-signal">what business runs on.</span>
              </h2>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Each generation of business tooling collapsed the previous one's friction. We are
              now at the inflection where disconnected systems give way to operational intelligence —
              software that understands workflows, not just records them.
            </p>
          </div>
          <div className="mt-16">
            <EvolutionTimeline />
          </div>
        </div>
      </section>

      {/* WHY CURRENT SOFTWARE BREAKS */}
      <section className="relative border-t border-border bg-surface/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Why current software breaks</SectionLabel>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Modern businesses run on <span className="text-foreground/60">tools that don't talk.</span>
          </h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Disconnected tools", d: "Twelve apps. Twelve sources of truth. Zero shared operational memory." },
              { t: "Reactive systems", d: "Dashboards show what happened, never what to do next." },
              { t: "Reports without action", d: "Insight ends in a PDF. Execution stays manual." },
              { t: "Data without intelligence", d: "Rows accumulate; understanding doesn't." },
            ].map((c, i) => (
              <div key={c.t} className="bg-background p-8">
                <div className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-4 font-display text-lg text-foreground">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM ARCHITECTURE */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-end gap-8 md:grid-cols-[2fr_1fr]">
            <div>
              <SectionLabel>Ecosystem architecture</SectionLabel>
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-tight md:text-5xl">
                Five layers. <span className="text-gradient-signal">One operational stack.</span>
              </h2>
            </div>
            <p className="text-base text-muted-foreground md:text-right">
              Each layer is independently useful and progressively more intelligent. Together they
              become the operational layer SMBs run on.
            </p>
          </div>
          <div className="mt-12">
            <EcosystemStack />
          </div>
        </div>
      </section>

      {/* OPERATIONAL INTELLIGENCE */}
      <section className="relative border-t border-border bg-surface/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Operational intelligence</SectionLabel>
          <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center">
            <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
              Software that <span className="text-gradient-signal">understands</span> the work, not just records it.
            </h2>
            <ul className="space-y-5 text-base text-muted-foreground md:text-lg">
              {[
                "Workflow understanding across the entire business.",
                "Business memory that compounds with every operation.",
                "Recommendations grounded in your actual operational context.",
                "Awareness of anomalies before they become incidents.",
              ].map((line) => (
                <li key={line} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary animate-signal-pulse" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TECH SOLUTIONS BRIDGE */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Tech Solutions — the implementation bridge</SectionLabel>
          <div className="mt-6 grid gap-12 md:grid-cols-[2fr_3fr]">
            <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
              Intelligence means nothing if it doesn't <span className="text-foreground/60">land in the business.</span>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Neurvyn Solutions is the operational team that brings the ecosystem into your
                business — websites, automation, workflow setup, AI integration.
              </p>
              <p>
                It is how operational transformation actually happens. Real systems. Real
                workflows. Real outcomes — not a deck.
              </p>
              <div className="pt-2">
                <Link to="/solutions" className="inline-flex items-center gap-2 text-sm text-primary hover:text-secondary">
                  See how Solutions works
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="border-t border-border bg-surface/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Future roadmap</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
            The arc of operational intelligence.
          </h2>
          <div className="mt-12">
            <RoadmapFlow />
          </div>
        </div>
      </section>

      {/* FINAL POSITIONING */}
      <section className="relative overflow-hidden border-t border-border py-32 md:py-40">
        <AmbientMesh />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <SectionLabel>The next era</SectionLabel>
          <h2 className="mt-8 font-display text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
            Businesses were <span className="text-foreground/50">digitized</span> in the last era.
            <br />
            The next era is <span className="text-gradient-signal">operational intelligence.</span>
            <br />
            <span className="text-foreground">Neurvyn is building that layer.</span>
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <SignalButton to="/ecosystem" variant="primary">Explore the ecosystem</SignalButton>
            <SignalButton to="/contact" variant="ghost">Talk to us</SignalButton>
          </div>
        </div>
      </section>
    </div>
  );
}
