"use client";

import MobileScreenWarning from "@/common/components/MobileScreenWarning.component";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth <= 768;
      setIsMobile(isMobileScreen);

      if (isMobileScreen) {
        router.replace("/auth/signin");
      } else {
        message.warning("This app is best viewed on mobile.");
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize); // listen for changes

    return () => window.removeEventListener("resize", handleResize);
  }, [router]);

  if (isMobile === null || isMobile === true) {
    return null; // prevent flashing on mobile
  }

  return (
    <div className="p-4">
      <MobileScreenWarning />
    </div>
  );
}
