import { redirect } from "next/navigation";
import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import Image from "next/image";

const isUserLoggedIn = async () => {
  // Check if user is already logged in, redirect if they are
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session && session.user) {
    redirect('/');
  }
};

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  await isUserLoggedIn();

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
        {children}
      </div>
    </div>
  );
};