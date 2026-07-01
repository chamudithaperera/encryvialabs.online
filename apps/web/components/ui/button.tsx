import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    variant?: "solid" | "ghost" | "outline";
  };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    variant?: "solid" | "ghost" | "outline";
  };

const styles = {
  solid: "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
  outline: "border border-border bg-white text-ink hover:border-brand-300 hover:bg-brand-50",
  ghost: "bg-transparent text-ink hover:bg-slate-100",
};

export function Button(props: ButtonProps | LinkProps) {
  const { children, className, variant = "solid", ...rest } = props as ButtonProps & LinkProps;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
    styles[variant],
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link {...rest} href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
