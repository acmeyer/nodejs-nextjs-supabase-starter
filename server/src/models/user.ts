import {Selectable, Insertable, Updateable} from 'kysely';
import {Users} from '../../db/types';
import { db } from '../../db/db';

export type User = Selectable<Users>;
export type InsertableUser = Insertable<Users>;
export type UpdateableUser = Updateable<Users>;

export const getUserById = async (userId: string) => {
  const user = await db
    .selectFrom('users')
    .where('users.id', '=', userId)
    .selectAll()
    .executeTakeFirst();
  return user;
};

export const updateUser = async (userId: string, user: UpdateableUser) => {
  const updatedUser = await db
    .updateTable('users')
    .set({
      ...user,
      updated_at: new Date(),
    })
    .where('id', '=', userId)
    .returningAll()
    .executeTakeFirst();
  return updatedUser;
};
