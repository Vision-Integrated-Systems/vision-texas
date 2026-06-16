"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Check if the current page is the client dashboard
  const isClientDashboard = pathname?.startsWith("/clients");

  return (
    <>
      {/* If it's NOT the dashboard, show the Header */}
      {!isClientDashboard && <Header />}
      
      {/* Load the actual page content */}
      <main className={isClientDashboard ? "w-full" : "flex-grow"}>
        {children}
      </main>
      
      {/* If it's NOT the dashboard, show the Footer */}
      {!isClientDashboard && <Footer />}
    </>
  );
}