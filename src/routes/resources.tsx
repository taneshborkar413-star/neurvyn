import { createFileRoute, Link } from "@tanstack/react-router";
import { AmbientMesh } from "@/components/AmbientMesh";
import { SectionLabel } from "@/components/SectionLabel";

const RESOURCES = [
  {
    type: "Guide",
    title: "How to map an operational workflow",
    description:
      "A practical framework for identifying handoffs, records, decisions, and automation candidates.",
  },
  {
    type: "Playbook",
    title: "From dashboards to business memory",
    description: "Why connected context matters more than another reporting surface.",
  },
  {
    type: "Checklist",
    title: "Autonomy readiness assessment",
    description: "Questions to answer before moving recommendations into supervised execution.",
  },
  {
    type: "Brief",
    title: "The five-layer operational stack",
    description:
      "Ledger, Solutions, OS, Intelligence, and Autopilot explained as one adoption curve.",
  },
] as const;

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Neurvyn" },
      {
        name: "description",
        content: "Guides, playbooks, and checklists for building operational intelligence.",
      },
      { property: "og:title", content: "Neurvyn resources" },
      {
        property: "og:description",
        content: "Learn how to plan, connect, and automate business operations.",
      },
    ],
  }),
  component: Resources,
});

function Resources() {
  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <AmbientMesh />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionLabel>Resources</SectionLabel>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            Learn the path from workflow software to{" "}
            <span className="text-gradient-signal">autonomous operations.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Strategy notes, implementation guides, and operating-model checklists for teams building
            the next layer of their business.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2">
            {RESOURCES.map((resource) => (
              <article
                key={resource.title}
                className="group rounded-3xl border border-border bg-surface/50 p-8 transition-colors hover:border-primary/50"
              >
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {resource.type}
                </div>
                <h2 className="mt-5 font-display text-2xl text-foreground">{resource.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {resource.description}
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground group-hover:text-primary"
                >
                  Request resource <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
