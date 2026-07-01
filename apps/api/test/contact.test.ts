import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "../src/app";

describe("contact API", () => {
  it("accepts a valid contact payload", async () => {
    const response = await request(createApp())
      .post("/contact")
      .send({
        name: "Ada Lovelace",
        email: "ada@example.com",
        company: "Analytical Engines Ltd",
        serviceInterest: "AI Solutions & Automation",
        budget: "$5k - $15k",
        timeline: "This month",
        message: "We need help designing a secure AI-assisted workflow for our team.",
        website: "",
      });

    expect(response.status).toBe(200);
    expect(response.body.ok).toBe(true);
  });

  it("rejects an invalid contact payload", async () => {
    const response = await request(createApp())
      .post("/contact")
      .send({
        name: "A",
        email: "bad",
        serviceInterest: "",
        budget: "",
        timeline: "",
        message: "short",
      });

    expect(response.status).toBe(400);
    expect(response.body.ok).toBe(false);
  });
});
