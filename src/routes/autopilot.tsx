import { createFileRoute } from "@tanstack/react-router";
import { ProductPageShell } from "@/components/ProductPageShell";

export const Route = createFileRoute("/autopilot")({
  head: () => ({
    meta: [
      { title: "Neurvyn Autopilot — Autonomous execution" },
      { name: "description", content: "Operations that run themselves. The destination of the operational intelligence curve." },
      { property: "og:title", content: "Neurvyn Autopilot" },
      { property: "og:description", content: "Autonomous operational execution — built on top of the full Neurvyn ecosystem." },
    ],
  }),
  component: () => (
    <ProductPageShell
      p={{
        index: "05",
        name: "Neurvyn Autopilot",
        role: "Autonomous execution",
        headline: "Operations that run themselves.",
        subheadline:
          "Autopilot closes the loop. Recommendations become actions; actions become operational outcomes — supervised, auditable and reversible.",
        ecosystemRole:
          "Autopilot is the execution layer. It only works because Ledger, Solutions, OS and Intelligence already exist — it is the destination of the whole arc.",
        capabilities: [
          { title: "Autonomous workflows", description: "Recurring operational sequences executed end-to-end without manual orchestration." },
          { title: "Supervised actions", description: "Every autonomous step is auditable, scoped and reversible — humans stay in command." },
          { title: "Adaptive execution", description: "Workflows adjust to operational context detected by Intelligence in real time." },
          { title: "Operational guardrails", description: "Policies, thresholds and approvals defined at the ecosystem level — not glued to each tool." },
        ],
        prev: { to: "/intelligence", label: "Intelligence" },
      }}
    />
  ),
});
