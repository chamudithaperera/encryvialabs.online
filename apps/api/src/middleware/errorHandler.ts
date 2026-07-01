import type { ErrorRequestHandler } from "express";
import { logError } from "../utils/logger";

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  logError("Unhandled API error", error);
  res.status(500).json({
    ok: false,
    error: "Something went wrong while handling the request.",
  });
};
