import { createFileRoute } from "@tanstack/react-router";
import { AmbientMesh } from "@/components/AmbientMesh";
import { SectionLabel } from "@/components/SectionLabel";
import { SignalButton } from "@/components/SignalButton";

const PLANS = [
  {
    name: "Foundation",
    price: "Pilot",
    description:
      "Map the business, connect core workflows, and prove operational intelligence on one critical process.",
    features: [
      "Operational discovery sprint",
      "Ledger configuration",
      "Two connected workflows",
      "Executive signal review",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    description:
      "Deploy the Neurvyn stack across teams with integrations, shared memory, and insight loops.",
    features: [
      "Multi-team rollout",
      "Systems integration plan",
      "Business memory model",
      "Governance and enablement",
    ],
    highlighted: true,
  },
  {
    name: "Autonomous",
    price: "Enterprise",
    description:
      "Move from recommendations to supervised autonomous execution with policy-based guardrails.",
    features: [
      "Autopilot workflow design",
      "Approval policies",
      "Audit and rollback controls",
      "Dedicated implementation lead",
    ],
  },
] as const;

const FAQS = [
  [
    "How is pricing determined?",
    "Pricing is scoped around operational complexity: number of workflows, systems, users, integrations, and autonomy requirements.",
  ],
  [
    "Can we start small?",
    "Yes. Most teams begin with one measurable workflow, then expand once the business memory and operating model are proven.",
  ],
  [
    "Do you replace our existing tools?",
    "No. Neurvyn connects and coordinates the tools you already use, then adds intelligence and execution layers above them.",
  ],
] as const;

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Neurvyn" },
      {
        name: "description",
        content:
          "Flexible implementation packages for operational intelligence, from pilot to autonomous operations.",
      },
      { property: "og:title", content: "Neurvyn pricing" },
      {
        property: "og:description",
        content:
          "Choose the operational intelligence rollout that matches your business complexity.",
      },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <AmbientMesh />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            Roll out operational intelligence{" "}
            <span className="text-gradient-signal">at the right depth.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Start with a focused pilot, scale into a connected operating layer, then activate
            autonomous execution when the business is ready.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-3xl border p-8 ${plan.highlighted ? "border-primary/50 bg-primary/10 ring-signal" : "border-border bg-surface/50"}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-display text-2xl text-foreground">{plan.name}</h2>
                  <span className="rounded-full border border-border-strong px-3 py-1 text-xs text-muted-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-foreground/85">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <SignalButton to="/contact" variant={plan.highlighted ? "primary" : "ghost"}>
                    Discuss this path
                  </SignalButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/30 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Common questions</SectionLabel>
            <h2 className="mt-6 font-display text-3xl text-foreground md:text-4xl">
              Built for a practical rollout.
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map(([question, answer]) => (
              <div key={question} className="rounded-2xl border border-border bg-background/70 p-6">
                <h3 className="font-display text-lg text-foreground">{question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
