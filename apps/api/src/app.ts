import express from "express";
import { applySecurity } from "./middleware/security";
import { errorHandler } from "./middleware/errorHandler";
import contactRouter from "./routes/contact";

export function createApp() {
  const app = express();
  applySecurity(app);
  app.use(express.json({ limit: "100kb" }));

  app.get("/health", (_req, res) => {
    res.json({ ok: true, service: "encryvia-api" });
  });

  app.use(contactRouter);
  app.use(errorHandler);
  return app;
}
