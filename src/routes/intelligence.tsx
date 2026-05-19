import { createFileRoute } from "@tanstack/react-router";
import { ProductPageShell } from "@/components/ProductPageShell";

export const Route = createFileRoute("/intelligence")({
  head: () => ({
    meta: [
      { title: "Neurvyn Intelligence — Decisions & insight" },
      {
        name: "description",
        content:
          "Pattern recognition across workflows. Anomalies become signals. Reports become recommendations.",
      },
      { property: "og:title", content: "Neurvyn Intelligence" },
      {
        property: "og:description",
        content: "The intelligence layer that understands operations — not just records them.",
      },
    ],
  }),
  component: () => (
    <ProductPageShell
      p={{
        index: "04",
        name: "Neurvyn Intelligence",
        role: "Decisions & insight",
        headline: "Software that understands the work.",
        subheadline:
          "Intelligence reads across the operational stack to surface what matters — anomalies, opportunities, recommendations — grounded in your actual business context.",
        ecosystemRole:
          "Intelligence is the cognition layer. It turns operational memory into recommendations Autopilot can execute and people can trust.",
        capabilities: [
          {
            title: "Operational pattern recognition",
            description:
              "Detects how the business actually behaves over time — not just what got logged.",
          },
          {
            title: "Anomaly detection",
            description:
              "Surfaces operational outliers as signals, before they show up as problems.",
          },
          {
            title: "Workflow recommendations",
            description:
              "Suggests next-best actions inside the workflow, with the operational reasoning attached.",
          },
          {
            title: "Insight → action",
            description:
              "Every recommendation maps to a concrete operational step — never ends in a PDF.",
          },
        ],
        prev: { to: "/os", label: "OS" },
        next: { to: "/autopilot", label: "Autopilot" },
      }}
    />
  ),
});
