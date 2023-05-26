'use client';

import { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { darkLoginStyles, lightLoginStyles } from "@/styles/authStyles";
import { getURL } from "@/lib/helpers";
import { useAuth } from "@/contexts/authContext";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(true);
  const {supabaseClient} = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsLoading(false);
  }, []);

  if (isLoading) return null;

  return (
    <>
      <h2 className="text-center font-light mb-6">Welcome</h2>
      <p className="text-center text-sm mb-4">Login to continue.</p>
      <Auth
        supabaseClient={supabaseClient}
        providers={["google", "apple"]}
        redirectTo={getURL()}
        appearance={isDarkMode ? darkLoginStyles : lightLoginStyles}
        theme={isDarkMode ? "minimalDark" : "minimal"}
      />
    </>
  )
}