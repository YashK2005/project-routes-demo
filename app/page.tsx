import Link from "next/link";

const links = [
  {
    href: "/blog",
    title: "Blog",
    description: "Read our latest posts about routing, performance, and more.",
    icon: "📝",
  },
  {
    href: "/dashboard",
    title: "Dashboard",
    description: "View your project analytics and key metrics at a glance.",
    icon: "📊",
  },
  {
    href: "/api/v1/data",
    title: "API",
    description: "Explore the REST API endpoint returning live JSON data.",
    icon: "⚡",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Routing Demo
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          A demo application for showcasing project-level routing — redirects,
          rewrites, transforms, and conditions. No redeploy needed.
        </p>
      </div>

      <div className="mt-16 grid w-full max-w-4xl gap-6 sm:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700 hover:bg-slate-900"
          >
            <div className="text-3xl">{link.icon}</div>
            <h2 className="mt-4 text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
              {link.title}
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </h2>
            <p className="mt-2 text-sm text-slate-400">{link.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
