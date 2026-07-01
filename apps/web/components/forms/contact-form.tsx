"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const serviceOptions = [
  "Website Design & Development",
  "Custom Software Development",
  "Mobile App Development",
  "Database Design & Engineering",
  "Cloud & DevOps",
  "Security & Encryption Solutions",
  "AI Solutions & Automation",
  "Maintenance, Support & Optimisation",
];

const budgetOptions = ["Under $5k", "$5k - $15k", "$15k - $30k", "$30k+"];
const timelineOptions = ["ASAP", "This month", "Next 1-2 months", "Planning phase"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const apiBase = useMemo(
    () => (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000").replace(/\/$/, ""),
    [],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      serviceInterest: String(formData.get("serviceInterest") || ""),
      budget: String(formData.get("budget") || ""),
      timeline: String(formData.get("timeline") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch(`${apiBase}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to submit the form.");
      }
      form.reset();
      setStatus("success");
      setMessage(data.message || "Thanks. We’ll be in touch shortly.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit the form.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your name" required />
        <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" placeholder="Company name" />
        <label className="grid gap-2">
          <span className="text-sm font-medium text-ink">Service interest</span>
          <select name="serviceInterest" required className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200">
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-ink">Budget range</span>
          <select name="budget" required className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200">
            <option value="">Select a budget</option>
            {budgetOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-ink">Timeline</span>
          <select name="timeline" required className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200">
            <option value="">Select a timeline</option>
            {timelineOptions.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2">
        <span className="text-sm font-medium text-ink">Project brief</span>
        <textarea
          name="message"
          rows={6}
          required
          minLength={20}
          placeholder="Tell us what you want to build, improve, or explore."
          className="rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
        />
      </label>
      <input
        aria-hidden="true"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        name="website"
        placeholder="Leave this field blank"
      />
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send enquiry"}
        </Button>
        <p
          className={`text-sm ${status === "error" ? "text-red-600" : status === "success" ? "text-teal-700" : "text-slate-500"}`}
          aria-live="polite"
        >
          {message || "We usually reply within 1 business day."}
        </p>
      </div>
      <p className="text-xs text-slate-500">
        Protected by validation, a honeypot field, and server-side rate limiting.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
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
