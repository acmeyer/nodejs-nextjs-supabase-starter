'use client';

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/authContext";
import Image from "next/image";
import { Auth } from "@supabase/auth-ui-react";
import { useRouter } from "next/navigation";
import { darkLoginStyles, lightLoginStyles } from "@/styles/authStyles";
import { getURL } from "@/lib/helpers";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { session, supabaseClient } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    setIsDarkMode(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    if (session?.user) {
      router.replace('/');
    }
  }, [session, router]);

  if (isLoading) return null;

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          className="mx-auto h-14 w-14"
          src="/logo.svg"
          alt="Logo"
          width={60}
          height={60}
        />
        <div className="bg-white dark:bg-zinc-900 px-6 py-8 sm:px-12">
          <h2 className="text-center font-light mb-6">Welcome</h2>
          <p className="text-center text-sm mb-4">Login to continue.</p>
          <Auth
            supabaseClient={supabaseClient}
            providers={["google", "azure"]}
            redirectTo={getURL()}
            appearance={isDarkMode ? darkLoginStyles : lightLoginStyles}
            theme={isDarkMode ? "minimalDark" : "minimal"}
          />
        </div>
      </div>
    </div>
  );
};