'use client'

import {useState, SetStateAction} from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import MainView from "@/components/MainView";
import TopBar from "./TopBar";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-1 flex-col overflow-hidden">
      <TopBar onToggleSideBar={() => setIsSidebarOpen(true)} />
      <div className="flex flex-1">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebarOpen={(value: SetStateAction<boolean>) => setIsSidebarOpen(value)}
        />
        <MainView />
      </div>
    </div>
  )
}