import { Request, Response, NextFunction } from 'express';
import { ERROR_MESSAGE } from '../lib/constants';
import { supabase } from '../lib/supabase';

export const authHandler = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const { authorization } = req.headers;
    if (!authorization) {
      const error = new Error(ERROR_MESSAGE.INVALID_API_KEY);
      error.name = 'UnauthorizedError';
      throw error;
    }
    const accessToken = authorization.split('Bearer ').pop();
    const { data: { user } } = await supabase.auth.getUser(accessToken);
    if (!user) {
      const error = new Error(ERROR_MESSAGE.INVALID_API_KEY);
      error.name = 'UnauthorizedError';
      throw error;
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};