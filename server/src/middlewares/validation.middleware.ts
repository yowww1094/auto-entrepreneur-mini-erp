import type { NextFunction, Request, Response } from "express";


export const validate =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      next();
    } catch (error: any) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.errors,
      });
    }
  };