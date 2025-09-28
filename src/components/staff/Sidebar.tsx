"use client";
import Link from "next/link";
import styles from "@/app/styles/Sidebar.module.css";

export default function StaffSidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (c: boolean) => void;
}) {
  return (
    <>
      <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
        <div className={styles["sidebar-header"]}>
          <img src="/img/nabunturan.png" alt="Profile" />
          {!collapsed && (
            <>
              <h3>Justin Nabunturan</h3>
              <p>Registrar Staff</p>
            </>
          )}
        </div>

        <div className={styles["sidebar-section"]}>
          <h4 className={styles["sidebar-text"]}>MAIN</h4>
          <Link href="/dashboard" className={styles["nav-link"]}>
            <i className="fas fa-th-large"></i>
            {!collapsed && <span>Dashboard</span>}
          </Link>
          <Link href="/enrollment" className={styles["nav-link"]}>
            <i className="fas fa-user-graduate"></i>
            {!collapsed && <span>Enrollment</span>}
          </Link>
        </div>

        <div className={styles["sidebar-section"]}>
          <h4 className={styles["sidebar-text"]}>ACCOUNT</h4>
          <Link href="/settings" className={styles["nav-link"]}>
            <i className="fas fa-cog"></i>
            {!collapsed && <span>Settings</span>}
          </Link>
          <Link
            href="/logout"
            className={`${styles["nav-link"]} ${styles.logout}`}
          >
            <i className="fas fa-sign-out-alt"></i>
            {!collapsed && <span>Logout</span>}
          </Link>
        </div>
      </div>

      <button
        className={styles["toggle-btn"]}
        onClick={() => setCollapsed(!collapsed)}
      >
        <i className="fas fa-angle-left"></i>
      </button>
    </>
  );
}
