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
  solid:
    "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:shadow-blue-500/30",
  outline: "border border-slate-200 bg-white/85 text-slate-700 hover:border-blue-300 hover:bg-white hover:text-blue-700",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
};

export function Button(props: ButtonProps | LinkProps) {
  if ("href" in props && props.href) {
    const { children, className, variant = "solid", href, ...rest } = props;
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
      styles[variant],
      className,
    );

    return (
      <Link {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { children, className, variant = "solid", ...rest } = props;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    styles[variant],
    className,
  );

  return (
    <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes}>
      {children}
    </button>
  );
}
