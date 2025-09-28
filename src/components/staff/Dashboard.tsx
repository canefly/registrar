import styles from "@/app/styles/StaffDashboard.module.css";

export default function StaffDashboard({ collapsed }: { collapsed: boolean }) {
  return (
    <div
      className={`${styles.container} ${
        collapsed ? styles.containerCollapsed : ""
      }`}
    >
      <h1>Welcome to Staff Dashboard</h1>
      <p>Quick overview of registrar activities.</p>

      <div className={styles.stats}>
        <div className={styles.card}>
          <h2>1,240</h2>
          <p>Total Students</p>
        </div>
        <div className={styles.card}>
          <h2>4</h2>
          <p>Pending Enrollments</p>
        </div>
        <div className={styles.card}>
          <h2>45</h2>
          <p>Document Requests</p>
        </div>
        <div className={styles.card}>
          <h2>8</h2>
          <p>Staff Users</p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.card}>
          <h2>620</h2>
          <p>College Students</p>
        </div>
        <div className={styles.card}>
          <h2>620</h2>
          <p>Senior High Students</p>
        </div>
      </div>
    </div>
  );
}
