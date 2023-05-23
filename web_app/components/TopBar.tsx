import { Bars3Icon } from "@heroicons/react/24/outline";

type TopBarProps = {
  onToggleSideBar: () => void;
};

function TopBar({ onToggleSideBar }: TopBarProps) {
  return (
    <div className="z-40 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-gray-700/40">
      <div className="px-6 py-4 flex items-center gap-x-6">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-200 lg:hidden"
          onClick={onToggleSideBar}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm lg:text-base font-semibold leading-6 text-gray-900 dark:text-white">
          Dashboard
        </div>
      </div>
    </div>
  );
}

export default TopBar;
