"use client";
import { Alert, Button } from "antd";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MobileScreenWarning() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (isMobile) {
    // Optionally, auto-redirect mobile users away from pages that trigger this
    // router.replace('/auth/signup');
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <Alert
        className="max-w-md w-full rounded-lg shadow-lg"
        type="warning"
        showIcon
        message="🚫 Not available on mobile yet"
        description={
          <div className="space-y-4 text-gray-700">
            <p>This app is best experienced on a desktop or tablet for now.</p>
            <div className="flex justify-end space-x-4">
              <Button
                type="primary"
                onClick={() => window.location.reload()}
              >
                Retry
              </Button>
              
              <Button type="default" onClick={() => router.push("/")}>
                Go Home
              </Button>
            </div>
          </div>
        }
        closable
        onClose={() => {}}
      />
    </div>
  );
}
