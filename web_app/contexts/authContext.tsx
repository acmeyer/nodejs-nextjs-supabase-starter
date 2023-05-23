'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import { Session, createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';

export type MaybeSession = Session | null;

type AuthContext = {
  supabaseClient: SupabaseClient;
  session: MaybeSession;
};

const Context = createContext<AuthContext | undefined>(undefined);

export default function AuthProvider({
  children,
  session,
}: {
  children: React.ReactNode
  session: MaybeSession
}) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((event) => {
      router.refresh();
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router, supabaseClient]);

  return (
    <Context.Provider value={{ supabaseClient, session }}>
      <>{children}</>
    </Context.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}