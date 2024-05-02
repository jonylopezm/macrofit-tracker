import { Sidebar, Footer } from "@/components";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <div className="flex bg-slate-200" style={{ flex: "1" }}>
      <aside><Sidebar/></aside>
      <div className="xl:ml-6 ml-0 mr-4">
        <div className="pt-4">
          <div>{children}</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>         
  );
};

export default DashboardLayout;