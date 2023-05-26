import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });
  const { data: { session } } = await supabase.auth.getSession();
  if (session === null) return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  return res;
}

export const config = {
  matcher: ["/((?!static|.*\\..*|_next/static|_next/image|auth|favicon.ico).*)"],
};
