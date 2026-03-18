import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";

export const globalErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: err.success,
      message: err.message,
      errorDetails: err.errorDetails,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  }

  // fallback unknown error
  return res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
};
