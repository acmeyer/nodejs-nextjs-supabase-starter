import { Request, Response, NextFunction } from 'express';
import { createClient } from '@supabase/supabase-js';
import { ERROR_MESSAGE } from '../lib/constants';
import assert from 'assert';

assert(process.env.SUPABASE_URL, 'Missing env var: SUPABASE_URL');
assert(process.env.SUPABASE_ANON_KEY, 'Missing env var: SUPABASE_ANON_KEY');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

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