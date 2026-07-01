"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function JobApplicationForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Portfolio / GitHub" name="portfolio" />
        <Field label="Role interest" name="role" placeholder="Full-stack engineer" />
      </div>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-ink">Why Encryvia Labs?</span>
        <textarea
          name="message"
          rows={5}
          className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
          placeholder="Tell us what type of work you enjoy and what you’d like to build."
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit">Submit application</Button>
        {sent ? <p className="text-sm text-teal-700">Application sent. This is a starter form placeholder.</p> : null}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
      />
    </label>
  );
}
