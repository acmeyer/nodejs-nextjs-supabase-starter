'use client'

import { createContext } from "react";
import React, { useMemo } from "react";
import { Users } from "../../server/db/types";
import useSWR from "swr";
import { fetcher } from "@/lib/helpers";
import { UserResponseData } from "../../server/src/types/users";
import { API_SERVER_URL } from "@/lib/constants";
import { useAuth, MaybeSession } from "./authContext";

export interface UserContextType {
  user: Users | null | undefined;
  error: Error | null | undefined;
  isLoading: boolean;
}

const defaultUserContext = {
  user: null,
  error: null,
  isLoading: true,
};

const UserContext = createContext<UserContextType>(defaultUserContext);

interface UserProviderProps {
  children: React.ReactNode;
}

export const useUser = (session: MaybeSession) => {
  const { data, error, isLoading } = useSWR<UserResponseData, Error, any>(
    session ? [`${API_SERVER_URL}/users/me`, session.access_token] : null,
    fetcher
  );

  return {
    user: data?.user,
    isLoading,
    error,
  };
};


export default function UserProvider({ children }: UserProviderProps) {
  const { session } = useAuth();
  const { user, error, isLoading } = useUser(session);

  const value = useMemo(() => {
    const contextValue: UserContextType = {
      user,
      error,
      isLoading,
    };
    return contextValue;
  }, [user, error, isLoading]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};