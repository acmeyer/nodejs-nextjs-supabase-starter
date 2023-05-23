import SidebarNav from "./SidebarNav";

function DesktopSidebar() {
  return (
    <div className="hidden lg:flex lg:w-72 lg:relative lg:justify-end">
      <div className="flex grow flex-col overflow-y-auto border-r border-gray-200 dark:border-gray-700/40 bg-gray-50 dark:bg-zinc-800">
        <SidebarNav />
      </div>
    </div>
  );
}

export default DesktopSidebar;
