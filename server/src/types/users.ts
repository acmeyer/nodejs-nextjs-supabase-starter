import { Users } from '../../db/types';

export type UserResponseData = {
  success: boolean;
  user: Users | null;
  errorMessage?: string | undefined;
};