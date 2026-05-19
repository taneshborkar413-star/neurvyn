import { createFileRoute } from "@tanstack/react-router";
import { AmbientMesh } from "@/components/AmbientMesh";
import { SectionLabel } from "@/components/SectionLabel";
import { SignalButton } from "@/components/SignalButton";

const CONTROLS = [
  {
    title: "Scoped access",
    description:
      "Roles, workflow boundaries, and least-privilege permissions keep operational context available only where it belongs.",
  },
  {
    title: "Auditable actions",
    description:
      "Every recommendation, approval, autonomous step, and rollback is captured as part of the operational record.",
  },
  {
    title: "Human supervision",
    description:
      "Autonomy is introduced through approval policies, thresholds, and reversible execution paths.",
  },
  {
    title: "Data minimization",
    description:
      "Implementations define the specific operational fields needed to coordinate work and avoid unnecessary exposure.",
  },
  {
    title: "Integration governance",
    description:
      "Connections to source systems are mapped, documented, and reviewed before operational workflows depend on them.",
  },
  {
    title: "Operational continuity",
    description:
      "Fallback plans and escalation paths keep teams in command when a connected system or workflow changes.",
  },
] as const;

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — Neurvyn" },
      {
        name: "description",
        content:
          "How Neurvyn approaches security, governance, auditability, and supervised autonomy.",
      },
      { property: "og:title", content: "Neurvyn security and governance" },
      {
        property: "og:description",
        content: "Security controls for connected operational intelligence.",
      },
    ],
  }),
  component: Security,
});

function Security() {
  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <AmbientMesh />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionLabel>Security & governance</SectionLabel>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            Operational intelligence that stays{" "}
            <span className="text-gradient-signal">controlled, auditable, and reversible.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Neurvyn is designed for real business operations: sensitive workflows, connected
            systems, accountable decisions, and supervised automation.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Control model</SectionLabel>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {CONTROLS.map((control, index) => (
              <article key={control.title} className="bg-background p-7">
                <div className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-4 font-display text-xl text-foreground">{control.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {control.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/30 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <SectionLabel>Implementation readiness</SectionLabel>
            <h2 className="mt-6 font-display text-3xl text-foreground md:text-4xl">
              Security is part of the rollout, not a final review.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Each engagement defines data flows, decision rights, approval thresholds, escalation
              routes, and audit requirements before autonomy is enabled.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-8">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Readiness checklist
            </div>
            <ul className="mt-6 space-y-4 text-sm text-foreground/85">
              {[
                "Source-system inventory",
                "Workflow risk classification",
                "Access model",
                "Approval and rollback policy",
                "Audit event requirements",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <SignalButton to="/contact" variant="primary">
                Request a security review
              </SignalButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
