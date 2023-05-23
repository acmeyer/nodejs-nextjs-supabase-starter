import { SetStateAction } from "react";
import MobileSidebar from "@/components/sidebar/MobileSidebar";
import DesktopSidebar from "@/components/sidebar/DesktopSidebar";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebarOpen: (value: SetStateAction<boolean>) => void;
};

function Sidebar({ isOpen, toggleSidebarOpen }: SidebarProps) {
  return (
    <>
      <MobileSidebar isOpen={isOpen} toggleSidebarOpen={toggleSidebarOpen} />
      <DesktopSidebar />
    </>
  );
}

export default Sidebar;
