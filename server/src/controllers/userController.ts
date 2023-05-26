import { NextFunction, Request, Response } from 'express';
import { ERROR_MESSAGE } from '../lib/constants';
import { getUserById } from '../models/user';

export const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await getUserById(req.user.id);
    if (!user) {
      const error = new Error(ERROR_MESSAGE.USER_NOT_FOUND);
      error.name = 'NotFoundError';
      throw error;
    }
    return res.status(200).json({
      success: true,
      user
    });
  } catch (error: any) {
    next(error);
  }
};