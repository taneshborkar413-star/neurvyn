import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SignalButton } from "./SignalButton";

const NAV = [
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/ledger", label: "Ledger" },
  { to: "/solutions", label: "Solutions" },
  { to: "/os", label: "OS" },
  { to: "/intelligence", label: "Intelligence" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.63 0.22 285)" />
                <stop offset="100%" stopColor="oklch(0.72 0.16 250)" />
              </linearGradient>
            </defs>
            <path d="M3 18V4l8 11V4M11 18l8-14v14" stroke="url(#logo-grad)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-display text-base font-semibold tracking-tight text-foreground">
            Neurvyn
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <SignalButton to="/contact" variant="primary">Talk to us</SignalButton>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
          aria-label="Toggle menu"
        >
          <span className="flex flex-col gap-1">
            <span className={`h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground">
              Talk to us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
