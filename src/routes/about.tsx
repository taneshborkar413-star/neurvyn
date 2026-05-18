import { createFileRoute } from "@tanstack/react-router";
import { AmbientMesh } from "@/components/AmbientMesh";
import { SectionLabel } from "@/components/SectionLabel";
import { SignalButton } from "@/components/SignalButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Neurvyn" },
      { name: "description", content: "Neurvyn is building the operational intelligence layer modern businesses will run on." },
      { property: "og:title", content: "About Neurvyn" },
      { property: "og:description", content: "Why we are building the operational intelligence ecosystem for SMBs." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <AmbientMesh />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            We are building the <span className="text-gradient-signal">operational layer</span> businesses will run on.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Businesses were digitized in the last era. The next era is operational intelligence —
            and Neurvyn exists to build that layer for modern SMBs.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-16 md:grid-cols-2">
          <div>
            <SectionLabel>Mission</SectionLabel>
            <p className="mt-6 font-display text-2xl leading-snug text-foreground md:text-3xl">
              Give modern businesses a connected operational ecosystem — one that
              understands the work, not just records it.
            </p>
          </div>
          <div>
            <SectionLabel>Belief</SectionLabel>
            <p className="mt-6 font-display text-2xl leading-snug text-foreground md:text-3xl">
              The next category of business software is not a tool. It is infrastructure —
              an operational layer that compounds with every workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Principles</SectionLabel>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Systems thinking", d: "We design ecosystems, not features. Every layer earns its place by making the others stronger." },
              { t: "Operational depth", d: "We build for how businesses actually run, not how they look in a screenshot." },
              { t: "Calm intelligence", d: "Intelligence should feel infrastructural — present, precise, never desperate for attention." },
              { t: "Long horizon", d: "We build for the operating layer of the next decade, not the launch metrics of this quarter." },
              { t: "Trust by default", d: "Autonomous workflows stay auditable, reversible, and under human command." },
              { t: "One ecosystem", d: "Five layers, one operational story. Neurvyn must feel like a single living system." },
            ].map((p) => (
              <div key={p.t} className="bg-background p-8">
                <h3 className="font-display text-lg text-foreground">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl">
            Talk to the team building <span className="text-gradient-signal">the operational layer.</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <SignalButton to="/contact" variant="primary">Talk to us</SignalButton>
            <SignalButton to="/ecosystem" variant="ghost">Explore the ecosystem</SignalButton>
          </div>
        </div>
      </section>
    </div>
  );
}
