import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(120).optional().or(z.literal("")),
  serviceInterest: z.string().min(2).max(120),
  budget: z.string().min(1).max(50),
  timeline: z.string().min(1).max(50),
  message: z.string().min(20).max(4000),
  website: z.string().optional().or(z.literal("")),
});

export type ContactPayload = z.infer<typeof contactSchema>;
