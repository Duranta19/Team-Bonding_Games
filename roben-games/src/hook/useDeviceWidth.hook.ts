import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useDeviceWidth = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth < 450;
      setIsMobile(isMobileScreen);

      // if (isMobileScreen) {
      //   router.replace("/auth/signin");
      // } else {
      //   message.warning("This app is best viewed on mobile.");
      // }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize); // listen for changes

    return () => window.removeEventListener("resize", handleResize);
  }, [router]);
  console.log(isMobile);
return {isMobile}
};
