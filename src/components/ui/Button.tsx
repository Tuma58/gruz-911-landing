import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-contrast hover:bg-accent-hover border border-transparent",
  secondary:
    "bg-transparent text-text border border-border-control hover:bg-surface-raised",
  ghost: "bg-transparent text-text hover:bg-surface-raised border border-transparent",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  fullWidth?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  fullWidth,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <button
      className={[
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius)] px-5 text-base font-bold transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50",
        styles[variant],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}

type LinkProps = {
  href: string;
  variant?: Variant;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  fullWidth,
  className = "",
  children,
}: LinkProps) {
  return (
    <a
      href={href}
      className={[
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius)] px-5 text-base font-bold no-underline transition-colors duration-150",
        styles[variant],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
    >
      {children}
    </a>
  );
}
