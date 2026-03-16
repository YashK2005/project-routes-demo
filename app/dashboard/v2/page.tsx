const stats = [
  { label: "Total Users", value: "12,847", change: "+4.3%", trend: "up" },
  { label: "Revenue", value: "$48,290", change: "+12.1%", trend: "up" },
  { label: "Active Projects", value: "342", change: "+2.7%", trend: "up" },
  { label: "Uptime", value: "99.98%", change: "+0.01%", trend: "up" },
];

export default function DashboardV2() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl font-bold text-white">Dashboard v2</h1>
        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
          Beta
        </span>
      </div>
      <p className="mt-2 text-slate-400">
        The next generation dashboard with enhanced analytics.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-5"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
              {stat.label}
            </p>
            <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
            <div className="mt-1 flex items-center gap-1">
              <svg
                className="h-3 w-3 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <span className="text-xs font-medium text-emerald-400">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-6">
          <h2 className="text-lg font-semibold text-white">
            Performance Score
          </h2>
          <div className="mt-6 flex items-center justify-center">
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-emerald-500/30">
              <span className="text-4xl font-bold text-emerald-400">98</span>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-slate-400">
            Lighthouse performance score
          </p>
        </div>

        <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-6">
          <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
          <div className="mt-4 space-y-3">
            {[
              { action: "Deployment completed", time: "2m ago" },
              { action: "Routes updated", time: "15m ago" },
              { action: "SSL renewed", time: "1h ago" },
              { action: "Audit completed", time: "3h ago" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg bg-slate-900/50 px-4 py-2.5"
              >
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-sm text-slate-300">{item.action}</span>
                </div>
                <span className="text-xs text-slate-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
