import Link from "next/link";

export default function GettingStarted() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/blog"
        className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
      >
        ← Back to Blog
      </Link>

      <header className="mt-8">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <time>March 8, 2026</time>
          <span>·</span>
          <span>5 min read</span>
        </div>
        <h1 className="mt-3 text-4xl font-bold text-white">
          Getting Started with Routing
        </h1>
      </header>

      <div className="mt-10 space-y-6 text-slate-300 leading-relaxed">
        <p>
          Setting up routing rules for your project is straightforward. Whether
          you need to redirect old URLs, rewrite paths behind the scenes, or add
          custom headers to your responses, project-level routing has you
          covered.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">Redirects</h2>
        <p>
          Redirects send users from one URL to another. They&apos;re perfect for
          URL migrations — when you rename a page or restructure your site, a
          301 redirect ensures old links still work and search engines update
          their index.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">Rewrites</h2>
        <p>
          Rewrites serve content from a different path without changing the URL
          in the browser. This is useful for A/B testing, gradual migrations, or
          serving different versions of a page based on conditions like cookies
          or headers.
        </p>
        <h2 className="text-2xl font-semibold text-white pt-4">Transforms</h2>
        <p>
          Transforms let you modify response headers without touching your
          application code. Add CORS headers, set caching policies, or include
          security headers — all from the dashboard, with instant effect.
        </p>
      </div>
    </article>
  );
}
