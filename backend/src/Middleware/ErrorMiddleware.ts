import { ZodError } from "zod";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import CustomError from "../Error/CustomError";

export default class MiddleError {
  static errorMiddleware: ErrorRequestHandler = (
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) => {

    if (err instanceof ZodError) {
      const message = err.issues.map((err) => err.message);
      return res.status(400).json({ message });
    }

    // PostgreSQL unique constraint violation
    if (err.code === "23505") {
      const detail: string = err.detail || "";
      if (detail.includes("email")) {
        return res.status(409).json({ message: "Email is already registered. Please use a different email or login." });
      }
      if (detail.includes("phone")) {
        return res.status(409).json({ message: "Phone number is already registered. Please use a different number." });
      }
      return res.status(409).json({ message: "This information is already in use." });
    }

    return res.status(err.status || 500).json({ message: err.message || "Internal server error" });
  };
}
