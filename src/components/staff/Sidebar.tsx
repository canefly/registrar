"use client";

import Image from "next/image";
import Link from "next/link";

export default function StaffSidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (c: boolean) => void;
}) {
  return (
    <>
      <div
        className={`fixed left-0 top-0 z-50 flex h-screen flex-col overflow-y-auto bg-white px-3 py-6 text-slate-700 shadow-xl transition-all duration-300 ${collapsed ? "w-[70px]" : "w-60"}`}
      >
        <div className="flex flex-col items-center text-center">
          <Image
            src="/img/nabunturan.png"
            alt="Profile"
            width={64}
            height={64}
            className={`h-16 w-16 rounded-full border-4 border-blue-600 object-cover transition-all duration-300 ${collapsed ? "h-10 w-10" : ""}`}
          />
          {!collapsed && (
            <div className="mt-3">
              <h3 className="text-base font-semibold text-slate-800">
                Justin Nabunturan
              </h3>
              <p className="text-sm text-slate-500">Registrar Staff</p>
            </div>
          )}
        </div>

        <div className="mt-8 space-y-2">
          <h4
            className={`px-4 text-xs font-semibold uppercase tracking-widest text-slate-400 ${collapsed ? "hidden" : "block"}`}
          >
            Main
          </h4>
          <SidebarLink collapsed={collapsed} href="/dashboard" icon="fas fa-th-large" label="Dashboard" />
          <SidebarLink
            collapsed={collapsed}
            href="/enrollment"
            icon="fas fa-user-graduate"
            label="Enrollment"
          />
        </div>

        <div className="mt-6 space-y-2">
          <h4
            className={`px-4 text-xs font-semibold uppercase tracking-widest text-slate-400 ${collapsed ? "hidden" : "block"}`}
          >
            Account
          </h4>
          <SidebarLink collapsed={collapsed} href="/settings" icon="fas fa-cog" label="Settings" />
          <SidebarLink
            collapsed={collapsed}
            href="/logout"
            icon="fas fa-sign-out-alt"
            label="Logout"
            variant="danger"
          />
        </div>
      </div>

      <button
        className={`fixed top-5 z-[60] rounded-full bg-blue-600 p-2 text-white shadow-md transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 ${collapsed ? "left-[92px]" : "left-[250px]"}`}
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        type="button"
      >
        <i
          className={`fas fa-angle-left text-lg transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
        ></i>
      </button>
    </>
  );
}

function SidebarLink({
  collapsed,
  href,
  icon,
  label,
  variant,
}: {
  collapsed: boolean;
  href: string;
  icon: string;
  label: string;
  variant?: "danger";
}) {
  const baseClasses =
    "flex items-center gap-3 rounded-lg py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300";
  const layoutClasses = collapsed ? "justify-center px-0" : "justify-start px-4";
  const colorClasses = (() => {
    if (variant === "danger") {
      return collapsed
        ? "text-red-500 hover:text-red-600"
        : "text-red-600 hover:bg-red-50 hover:text-red-700";
    }
    return collapsed
      ? "text-slate-600 hover:text-blue-600"
      : "text-slate-600 hover:bg-blue-50 hover:text-blue-600";
  })();

  return (
    <Link
      href={href}
      className={`${baseClasses} ${layoutClasses} ${colorClasses}`.trim()}
    >
      <i className={`${icon} text-base`}></i>
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
