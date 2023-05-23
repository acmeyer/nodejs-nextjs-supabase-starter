import { Request, Response, NextFunction } from 'express';

class BadRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BadRequestError';
  }
}

class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof BadRequestError) {
    return res.status(400).json({ success: false, errorMessage: err.message });
  }
  if (err instanceof UnauthorizedError) {
    return res.status(401).json({ success: false, errorMessage: err.message });
  }
  if (err instanceof NotFoundError) {
    return res.status(404).json({ success: false, errorMessage: err.message });
  }
  console.error(err.stack);
  res.status(500).json({ success: false, errorMessage: 'Internal server error' });
};