import { Request, Response, NextFunction } from "express";
import { ValidationError } from "../errors/customErrors";

export const validateCreateTask = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.body;

  if (!title || typeof title !== "string") {
    throw new ValidationError("Title is required and must be a string");
  }

  next();
};

export const validateUpdateTask = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, completed, color } = req.body;

  if (title !== undefined && typeof title !== "string") {
    throw new ValidationError("Title must be a string");
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    throw new ValidationError("Completed must be a boolean");
  }

  if (color !== undefined && typeof color !== "string") {
    throw new ValidationError("Color must be a string");
  }

  next();
};
