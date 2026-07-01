import { Router } from "express";
import { contactLimiter } from "../middleware/rateLimit";
import { contactSchema, type ContactPayload } from "../validators/contactSchema";
import { logInfo } from "../utils/logger";

const router = Router();

async function sendContactEmail(payload: ContactPayload) {
  logInfo("Placeholder email/CRM hook invoked", { serviceInterest: payload.serviceInterest, email: payload.email });
}

router.post("/contact", contactLimiter, async (req, res) => {
  if (req.body?.website) {
    return res.status(200).json({
      ok: true,
      message: "Thanks. Your message has been received.",
    });
  }

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      error: "Validation failed",
      details: parsed.error.flatten(),
    });
  }

  try {
    await sendContactEmail(parsed.data);
    return res.status(200).json({
      ok: true,
      message: "Your enquiry has been received. We will get back to you soon.",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: "Something went wrong while submitting the form.",
    });
  }
});

export default router;
