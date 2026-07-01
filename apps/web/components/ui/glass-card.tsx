import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/50 bg-white/70 p-6 shadow-glass backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
