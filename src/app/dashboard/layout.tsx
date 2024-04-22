import { Sidebar } from "@/components";
import React from "react";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div className="min-h-screen flex bg-slate-200">
       <aside><Sidebar/></aside>
      <div className="xl:ml-6 ml-0 mr-4">
          <div className="pt-4">
            <div>
            {children}
            </div>
          </div>
          </div>     
          </div>  
   
            
  );
};

export default DashboardLayout;