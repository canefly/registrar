"use client";
import { useState } from "react";
import StaffSidebar from "@/components/staff/Sidebar";
import StaffDashboard from "@/components/staff/Dashboard";

export default function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <main>
      <StaffSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <StaffDashboard collapsed={collapsed} />
    </main>
  );
}
