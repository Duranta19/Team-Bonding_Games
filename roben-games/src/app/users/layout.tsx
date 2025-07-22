"use client";
import UserNavSidebar from "@/common/components/UserNavSidebar.component";
import MobileScreenWarning from "@/common/components/MobileScreenWarning.component";
import { useDeviceWidth } from "@/hook/useDeviceWidth.hook";
import { ReactNode } from "react";

export default function UserLayout({ children }: { children: ReactNode }) {
  const { isMobile } = useDeviceWidth();
  if (isMobile === null) return null;
  if (!isMobile) {
    return <MobileScreenWarning />;
  }
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-purple-900 w-full flex items-center py-4">
        <div className="flex-shrink-0">
          <UserNavSidebar />
        </div>
        <div className="flex-grow flex items-center justify-center">
          <span className="text-2xl font-bold text-white">RoBen Games</span>
        </div>
      </div>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
        <div className="container mx-auto">
          <span>
            &copy; {new Date().getFullYear()} RoBen Games. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
