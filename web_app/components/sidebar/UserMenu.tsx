import { useAuth } from '@/contexts/authContext';
import { useRouter } from "next/navigation";

function UserMenu() {
  const router = useRouter();
  const { supabaseClient } = useAuth();

  const handleLogout = async () => {
    await supabaseClient.auth.signOut();
    router.replace("/login");
  };

  return (
    <li className="mt-auto">
      <button
        type="button"
        onClick={handleLogout}
        className="flex flex-1 w-full items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        Logout
      </button>
    </li>
  );
}

export default UserMenu;
