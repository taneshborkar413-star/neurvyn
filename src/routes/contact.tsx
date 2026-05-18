import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AmbientMesh } from "@/components/AmbientMesh";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Neurvyn" },
      {
        name: "description",
        content: "Talk to the Neurvyn team about operational intelligence for your business.",
      },
      { property: "og:title", content: "Contact Neurvyn" },
      {
        property: "og:description",
        content: "Reach out about the operational intelligence ecosystem.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <AmbientMesh />
        <div className="relative mx-auto max-w-5xl px-6">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-8 font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Talk to the team building{" "}
            <span className="text-gradient-signal">the operational layer.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            For demos, implementation, partnerships and operational transformation.
          </p>
        </div>
      </section>

      <section className="border-t border-border pb-32">
        <div className="mx-auto max-w-3xl px-6 -mt-8">
          <div className="rounded-3xl border border-border bg-surface/60 p-8 md:p-12">
            {sent ? (
              <div className="text-center py-12">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Signal received
                </div>
                <h2 className="mt-4 font-display text-3xl text-gradient">Thank you.</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  The team will respond within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-6"
              >
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "you@business.com" },
                  { id: "company", label: "Company", type: "text", placeholder: "Company name" },
                ].map((f) => (
                  <div key={f.id}>
                    <label
                      htmlFor={f.id}
                      className="block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      className="mt-3 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Operational context
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your operations and what you're trying to solve."
                    className="mt-3 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground ring-signal"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 -z-10"
                    style={{ background: "var(--gradient-signal)" }}
                  />
                  Send signal
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7h8M7.5 3l3.5 4-3.5 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
