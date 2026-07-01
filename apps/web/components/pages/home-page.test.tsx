import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/components/sections/hero-3d", () => ({
  Hero3D: () => <div>hero</div>,
}));

import { HomePage } from "./home-page";

describe("HomePage", () => {
  it("renders the core hero message and CTA", () => {
    render(<HomePage />);

    expect(screen.getByText(/Secure intelligence for modern digital products/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Book a discovery call/i })).toBeInTheDocument();
  });
});
