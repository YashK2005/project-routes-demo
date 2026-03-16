import Link from "next/link";

export default function HelloWorld() {
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
          <time>March 10, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="mt-3 text-4xl font-bold text-white">Hello World</h1>
      </header>

      <div className="mt-10 space-y-6 text-slate-300 leading-relaxed">
        <p>
          Welcome to our blog. This is the very first post, and we&apos;re
          excited to share our thoughts on modern web routing and how it shapes
          the way users experience the web.
        </p>
        <p>
          Routing is one of the most fundamental parts of any web application.
          It determines what content users see based on the URL they visit, and
          it plays a critical role in performance, SEO, and overall user
          experience.
        </p>
        <p>
          With project-level routing, you can manage redirects, rewrites, and
          transforms directly from your dashboard — no code changes, no
          redeployments. Changes go live instantly, and you can roll back at any
          time.
        </p>
        <p>
          In future posts, we&apos;ll dive deeper into specific routing
          patterns, best practices for URL migrations, and how to use conditions
          to create dynamic routing rules based on headers, cookies, and query
          parameters.
        </p>
      </div>
    </article>
  );
}
