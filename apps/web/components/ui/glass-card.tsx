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
        "rounded-[2rem] border border-white/65 bg-white/76 p-6 shadow-glass backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
