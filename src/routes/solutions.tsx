import { createFileRoute } from "@tanstack/react-router";
import { ProductPageShell } from "@/components/ProductPageShell";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Neurvyn Solutions — Implementation bridge" },
      {
        name: "description",
        content:
          "Websites, automation, workflow setup, AI integration — how operations actually transform.",
      },
      { property: "og:title", content: "Neurvyn Solutions" },
      {
        property: "og:description",
        content:
          "The implementation layer that brings operational intelligence into your business.",
      },
    ],
  }),
  component: () => (
    <ProductPageShell
      p={{
        index: "02",
        name: "Neurvyn Solutions",
        role: "Implementation bridge",
        headline: "How operational transformation actually happens.",
        subheadline:
          "Solutions is the operational team that brings Neurvyn into your business — websites, automation, workflow setup, AI integration. Real systems, real workflows, real outcomes.",
        ecosystemRole:
          "Solutions is the bridge between the ecosystem and the business. It turns operational intent into infrastructure that runs in production.",
        capabilities: [
          {
            title: "Website & digital surface",
            description:
              "Production websites tied to your operational stack, not a brochure built once and forgotten.",
          },
          {
            title: "Workflow automation",
            description:
              "Operational flows mapped, automated and connected — replacing manual handoffs and brittle integrations.",
          },
          {
            title: "Operational onboarding",
            description:
              "Migration, training and rollout designed around the way the business actually works.",
          },
          {
            title: "AI integration",
            description:
              "Intelligence wired into existing workflows — not chatbots bolted on the side.",
          },
        ],
        prev: { to: "/ledger", label: "Ledger" },
        next: { to: "/os", label: "OS" },
      }}
    />
  ),
});
