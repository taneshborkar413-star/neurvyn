import { createFileRoute } from "@tanstack/react-router";
import { ProductPageShell } from "@/components/ProductPageShell";

export const Route = createFileRoute("/os")({
  head: () => ({
    meta: [
      { title: "Neurvyn OS — Connected operational layer" },
      {
        name: "description",
        content:
          "Systems stop being silos. Operations gain visibility, memory, and shared context.",
      },
      { property: "og:title", content: "Neurvyn OS" },
      {
        property: "og:description",
        content:
          "The connected operational layer that gives businesses a single source of operational truth.",
      },
    ],
  }),
  component: () => (
    <ProductPageShell
      p={{
        index: "03",
        name: "Neurvyn OS",
        role: "Connected operational layer",
        headline: "Where every system finally talks.",
        subheadline:
          "OS connects the operational surfaces of the business into one coherent layer. Visibility, memory and shared context — not another dashboard.",
        ecosystemRole:
          "OS is the connective tissue. It is what allows Intelligence to understand the whole business and Autopilot to act with full operational context.",
        capabilities: [
          {
            title: "Operational visibility",
            description:
              "Real-time view of how the business is actually operating, across every connected surface.",
          },
          {
            title: "Business memory",
            description:
              "A persistent operational memory that every other layer reads from and writes to.",
          },
          {
            title: "Shared context",
            description:
              "Customers, inventory, workflows and decisions seen the same way across the entire ecosystem.",
          },
          {
            title: "Workflow coordination",
            description:
              "Cross-team operational flows orchestrated as first-class objects, not Slack threads.",
          },
        ],
        prev: { to: "/solutions", label: "Solutions" },
        next: { to: "/intelligence", label: "Intelligence" },
      }}
    />
  ),
});
