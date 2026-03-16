"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold text-white hover:text-slate-300 transition-colors"
        >
          Routing Demo
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4 text-sm text-slate-400">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <Link
              href="/dashboard"
              className="hover:text-white transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/api/v1/data"
              className="hover:text-white transition-colors"
            >
              API
            </Link>
          </div>
          <div className="rounded-md bg-slate-800 px-3 py-1.5 font-mono text-sm text-slate-300">
            {pathname}
          </div>
        </div>
      </div>
    </nav>
  );
}
