import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type Variant = "primary" | "ghost";

type LinkBase = ComponentProps<typeof Link>;

type Props = {
  variant?: Variant;
  children: React.ReactNode;
} & Partial<LinkBase> & { href?: string };

export function SignalButton({ variant = "primary", children, href, to, ...rest }: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300";
  const styles =
    variant === "primary"
      ? "text-primary-foreground ring-signal hover:brightness-110"
      : "border border-border-strong text-foreground hover:border-primary/60 hover:bg-surface/60";

  const inner = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -z-10 rounded-full"
          style={{ background: "var(--gradient-signal)" }}
        />
      )}
      <span className="relative">{children}</span>
      <svg width="14" height="14" viewBox="0 0 14 14" className="relative transition-transform duration-300 group-hover:translate-x-0.5" fill="none">
        <path d="M3 7h8M7.5 3l3.5 4-3.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );

  if (to) {
    return (
      <Link to={to} {...(rest as LinkBase)} className={`${base} ${styles}`}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={`${base} ${styles}`}>
        {inner}
      </a>
    );
  }
  return <button className={`${base} ${styles}`}>{inner}</button>;
}
