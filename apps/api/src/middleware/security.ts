import type { Express } from "express";
import cors from "cors";
import helmet from "helmet";

export function applySecurity(app: Express) {
  app.use(
    helmet({
      contentSecurityPolicy: false,
    }),
  );

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN || "http://localhost:3000",
      credentials: true,
    }),
  );
}
