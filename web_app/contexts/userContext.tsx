'use client'

import { createContext, useContext } from "react";
import React from "react";
import { Users } from "../../server/db/types";

export interface UserContextType {
  user: Users | null | undefined;
}

const Context = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
  user: Users;
}

export default function UserProvider({ 
  children,
  user
}: UserProviderProps) {
  return <Context.Provider value={{user}}>{children}</Context.Provider>;
};

export const useUser = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}