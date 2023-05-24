import './globals.css'
import { Inter } from 'next/font/google';
import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import AuthProvider from '@/contexts/authContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nextjs + Nodejs + Supabase Starter',
  description: 'Nextjs + Nodejs + Supabase Starter',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession();


  return (
    <html lang="en">
      <body className={`h-full bg-gray-50 dark:bg-zinc-900 ${inter.className}`}>
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  )
}
