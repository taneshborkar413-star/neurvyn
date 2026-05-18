import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { AmbientMesh } from "./AmbientMesh";
import { SectionLabel } from "./SectionLabel";
import { SignalButton } from "./SignalButton";

export type ProductDef = {
  index: string;
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  capabilities: { title: string; description: string }[];
  ecosystemRole: string;
  prev?: { to: string; label: string };
  next?: { to: string; label: string };
};

export function ProductPageShell({ p }: { p: ProductDef }) {
  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <AmbientMesh />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>{p.index}</span>
            <span className="h-px w-8 bg-border-strong" />
            <span>{p.role}</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl"
          >
            <span className="text-gradient">{p.name}</span>
            <br />
            <span className="text-foreground/80">{p.headline}</span>
          </motion.h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {p.subheadline}
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-surface/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Role in the ecosystem</SectionLabel>
          <p className="mt-6 max-w-3xl font-display text-2xl leading-snug text-foreground md:text-3xl">
            {p.ecosystemRole}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Capabilities</SectionLabel>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {p.capabilities.map((c, i) => (
              <div key={c.title} className="bg-background p-8">
                <div className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-xl text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <SectionLabel>Continue</SectionLabel>
              <h2 className="mt-6 font-display text-3xl text-foreground md:text-4xl">
                Move through the operational stack.
              </h2>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              {p.prev && (
                <Link
                  to={p.prev.to}
                  className="group inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  <span>←</span> Previous layer ·{" "}
                  <span className="text-foreground">{p.prev.label}</span>
                </Link>
              )}
              {p.next && (
                <Link
                  to={p.next.to}
                  className="group inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  Next layer · <span className="text-foreground">{p.next.label}</span>{" "}
                  <span>→</span>
                </Link>
              )}
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <SignalButton to="/contact" variant="primary">
              Talk to us
            </SignalButton>
            <SignalButton to="/ecosystem" variant="ghost">
              View the ecosystem
            </SignalButton>
          </div>
        </div>
      </section>
    </div>
  );
}
