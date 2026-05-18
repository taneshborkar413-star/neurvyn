import { Link } from "@tanstack/react-router";

const GROUPS = [
  {
    title: "Ecosystem",
    links: [
      { to: "/ecosystem", label: "Overview" },
      { to: "/ledger", label: "Ledger" },
      { to: "/solutions", label: "Solutions" },
      { to: "/os", label: "OS" },
      { to: "/intelligence", label: "Intelligence" },
      { to: "/autopilot", label: "Autopilot" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <svg width="22" height="22" viewBox="0 0 22 22">
                <path d="M3 18V4l8 11V4M11 18l8-14v14" stroke="oklch(0.63 0.22 285)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-display text-base font-semibold">Neurvyn</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The operational intelligence ecosystem for modern businesses. Connected systems, business memory, autonomous workflows.
            </p>
          </div>
          {GROUPS.map((g) => (
            <div key={g.title}>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {g.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-foreground/80 transition-colors hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Neurvyn. Building the operational layer.</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-signal-pulse" />
            <span>Systems online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
