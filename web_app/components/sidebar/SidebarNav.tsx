import Image from "next/image";
import UserMenu from "@/components/sidebar/UserMenu";

type SidebarNavProps = {
  toggleSidebarOpen?: (value: boolean) => void;
};

function SidebarNav({ toggleSidebarOpen }: SidebarNavProps) {
  return (
    <>
      <div className="flex items-start p-4">
        <Image className="h-10 w-10" src="/logo.svg" alt="Logo" width={48} height={48} />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-7">
          <UserMenu />
        </ul>
      </nav>
    </>
  );
}

export default SidebarNav;
