const highlightStats = [
  { label: "Total Students", value: "1,240" },
  { label: "Pending Enrollments", value: "4" },
  { label: "Document Requests", value: "45" },
  { label: "Staff Users", value: "8" },
];

const segmentStats = [
  { label: "College Students", value: "620" },
  { label: "Senior High Students", value: "620" },
];

export default function StaffDashboard({ collapsed }: { collapsed: boolean }) {
  return (
    <div
      className={`ml-0 min-h-screen flex-1 bg-cover bg-center bg-no-repeat p-10 text-center transition-all duration-300 sm:p-12 lg:p-16 ${collapsed ? "lg:ml-[70px]" : "lg:ml-60"} bg-[url('/img/bg.jpg')]`}
    >
      <div className="mx-auto max-w-5xl rounded-3xl bg-white/85 p-10 shadow-lg backdrop-blur-sm">
        <h1 className="text-3xl font-semibold text-slate-800 md:text-4xl">
          Welcome to Staff Dashboard
        </h1>
        <p className="mt-2 text-base text-slate-600 md:text-lg">
          Quick overview of registrar activities.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {highlightStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {segmentStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-black/5">
      <h2 className="text-3xl font-bold text-blue-600 md:text-4xl">{value}</h2>
      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>
    </div>
  );
}
