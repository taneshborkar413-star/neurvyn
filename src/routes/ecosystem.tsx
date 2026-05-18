import { createFileRoute } from "@tanstack/react-router";
import { AmbientMesh } from "@/components/AmbientMesh";
import { EcosystemStack } from "@/components/EcosystemStack";
import { SectionLabel } from "@/components/SectionLabel";
import { SignalNetwork } from "@/components/SignalNetwork";
import { SignalButton } from "@/components/SignalButton";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "Ecosystem — Neurvyn" },
      { name: "description", content: "The five-layer operational stack: Ledger, Solutions, OS, Intelligence, Autopilot." },
      { property: "og:title", content: "The Neurvyn Ecosystem" },
      { property: "og:description", content: "One connected operational intelligence stack — built for modern businesses." },
    ],
  }),
  component: Ecosystem,
});

function Ecosystem() {
  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <AmbientMesh />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionLabel>Ecosystem overview</SectionLabel>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            One connected <span className="text-gradient-signal">operational stack.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The Neurvyn ecosystem is built as a progression — each layer independently
            useful, and each one more intelligent than the last.
          </p>
          <div className="mt-16 rounded-3xl border border-border bg-surface/30 p-4 md:p-8">
            <SignalNetwork />
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>The five layers</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight tracking-tight md:text-5xl">
            Daily utility → connected operations → autonomous execution.
          </h2>
          <div className="mt-12">
            <EcosystemStack />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>How the layers connect</SectionLabel>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {[
              { t: "Operational continuity", d: "Each layer reads and writes into the same operational memory. Nothing is rebuilt twice." },
              { t: "Progressive intelligence", d: "Ledger captures. OS connects. Intelligence understands. Autopilot acts." },
              { t: "Single source of truth", d: "One ecosystem replaces a dozen disconnected tools — no integrations, no glue." },
            ].map((c) => (
              <div key={c.t} className="bg-background p-8">
                <h3 className="font-display text-lg text-foreground">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <SignalButton to="/contact" variant="primary">Talk to us</SignalButton>
            <SignalButton to="/ledger" variant="ghost">Start with Ledger</SignalButton>
          </div>
        </div>
      </section>
    </div>
  );
}
