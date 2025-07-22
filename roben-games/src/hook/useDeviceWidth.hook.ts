import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useDeviceWidth = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth < 450;
      setIsMobile(isMobileScreen);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize); // listen for changes

    return () => window.removeEventListener("resize", handleResize);
  }, [router]);
  return { isMobile };
};
