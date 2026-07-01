import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function StatCard({
  label,
  value,
  icon,
  className,
}: {
  label: string;
  value: string;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-3xl border border-border bg-white p-5 shadow-soft", className)}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="mt-2 text-xl font-semibold text-ink">{value}</p>
        </div>
        {icon ? (
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-3 text-brand-700">{icon}</div>
        ) : null}
      </div>
    </div>
  );
}
