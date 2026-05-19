import { createFileRoute } from "@tanstack/react-router";
import { ProductPageShell } from "@/components/ProductPageShell";

export const Route = createFileRoute("/ledger")({
  head: () => ({
    meta: [
      { title: "Neurvyn Ledger — Daily operational utility" },
      {
        name: "description",
        content:
          "Billing, inventory, CRM. The operating habit that grounds the Neurvyn ecosystem in everyday work.",
      },
      { property: "og:title", content: "Neurvyn Ledger" },
      {
        property: "og:description",
        content: "The daily operational utility layer for modern businesses.",
      },
    ],
  }),
  component: () => (
    <ProductPageShell
      p={{
        index: "01",
        name: "Neurvyn Ledger",
        role: "Daily operational utility",
        headline: "The operating habit, not another app.",
        subheadline:
          "Billing, inventory, CRM and the daily operations that keep a business moving — captured in one operational layer that the rest of the ecosystem can read, learn from, and act on.",
        ecosystemRole:
          "Ledger is the entry point. It establishes the operational habit and seeds the business memory that OS, Intelligence and Autopilot later build on.",
        capabilities: [
          {
            title: "Billing & invoicing",
            description:
              "Quotes, invoices, recurring billing, payment reconciliation — built around real operational workflows.",
          },
          {
            title: "Inventory operations",
            description:
              "Stock, movements, variants and supplier flow modelled as operational signals, not spreadsheets.",
          },
          {
            title: "Customer relationships",
            description:
              "A CRM that knows the operation. Pipeline, history and context — shared across the ecosystem.",
          },
          {
            title: "Daily workflow",
            description:
              "Tasks, approvals and recurring operational rituals — the foundation of business memory.",
          },
        ],
        next: { to: "/solutions", label: "Solutions" },
      }}
    />
  ),
});
