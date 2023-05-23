import { Request, Response, NextFunction } from 'express';

export const loggingHandler = (req: Request, res: Response, next: NextFunction) => {
  console.log('req', req.method, req.url, req.body);
  next();
}