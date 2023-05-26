import DashboardLayout from '@/components/DashboardLayout';
import UserProvider from '@/contexts/userContext';
import { fetchUser } from '@/lib/users';

export default async function Dashboard() {
  const {user} = await fetchUser();

  return (
    <UserProvider user={user}>
      <DashboardLayout />
    </UserProvider>
  )
}
