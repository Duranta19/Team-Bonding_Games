"use client";
import MobileScreenWarning from "@/components/MobileScreenWarning.component";
import { useDeviceWidth } from "@/hook/useDeviceWidth.hook";
import { ReactNode } from "react";

export default function authLayout({ children }: { children: ReactNode }) {
  const { isMobile } = useDeviceWidth();
  if (isMobile ===  null) return null;
  if (!isMobile) {
    return <MobileScreenWarning />;
  }
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-purple-900 w-full">
        <div className="flex items-center justify-start h-full py-4 pl-2">
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
