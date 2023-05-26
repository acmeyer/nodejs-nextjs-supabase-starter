import { API_SERVER_URL } from "@/lib/constants";
import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';

export const fetchUser = async () => {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    throw new Error('Unauthorized: No session found');
  }
  const accessToken = session.access_token;
  const res = await fetch(`${API_SERVER_URL}/users/me`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  // Recommendation: handle errors
  if (!res.ok) {
    // Cannot find user so sign them out
    if (res.status === 401) {
      await supabase.auth.signOut();
    }
  }
  
  return res.json();
}