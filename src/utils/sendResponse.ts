import type { Response } from "express";
import { ApiResponse } from "./ApiResponse";

export const sendResponse = <T>(
  res: Response,
  statusCode: number,
  message: string,
  data: T,
  meta?: Record<string, unknown>,
) => {
  return res.status(statusCode).json(new ApiResponse(message, data, meta));
};
