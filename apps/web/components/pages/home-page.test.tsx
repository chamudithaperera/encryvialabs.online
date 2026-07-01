import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/components/sections/hero-3d", () => ({
  Hero3D: () => (
    <section>
      <h1>Secure intelligence for modern digital products.</h1>
      <a href="/contact">Book a discovery call</a>
    </section>
  ),
}));

import { HomePage } from "./home-page";

describe("HomePage", () => {
  it("renders the core hero message and CTA", () => {
    render(<HomePage />);

    expect(screen.getByText(/Secure intelligence for modern digital products/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /Book a discovery call/i })[0]).toBeInTheDocument();
  });
});
