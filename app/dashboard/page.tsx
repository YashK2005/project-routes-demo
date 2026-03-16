const stats = [
  { label: "Total Users", value: "12,847", change: "+4.3%" },
  { label: "Revenue", value: "$48,290", change: "+12.1%" },
  { label: "Active Projects", value: "342", change: "+2.7%" },
  { label: "Uptime", value: "99.98%", change: "+0.01%" },
];

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold text-white">Dashboard</h1>
      </div>
      <p className="mt-2 text-slate-400">
        Overview of your project metrics and performance.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-blue-500/20 bg-blue-950/20 p-6"
          >
            <p className="text-sm font-medium text-blue-400">{stat.label}</p>
            <div className="mt-3 flex items-baseline gap-3">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <span className="text-sm font-medium text-emerald-400">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-blue-500/20 bg-blue-950/20 p-6">
        <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
        <div className="mt-4 space-y-3">
          {[
            {
              action: "Deployment completed",
              time: "2 minutes ago",
              status: "success",
            },
            {
              action: "Route configuration updated",
              time: "15 minutes ago",
              status: "success",
            },
            {
              action: "SSL certificate renewed",
              time: "1 hour ago",
              status: "success",
            },
            {
              action: "Performance audit completed",
              time: "3 hours ago",
              status: "info",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg bg-slate-900/50 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-2 w-2 rounded-full ${
                    item.status === "success" ? "bg-emerald-400" : "bg-blue-400"
                  }`}
                />
                <span className="text-sm text-slate-300">{item.action}</span>
              </div>
              <span className="text-sm text-slate-500">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
