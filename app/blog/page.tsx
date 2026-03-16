import Link from "next/link";

const posts = [
  {
    slug: "hello-world",
    title: "Hello World",
    date: "March 10, 2026",
    excerpt:
      "Welcome to our blog. In this first post, we explore the basics of modern web routing and how it shapes the user experience.",
    readTime: "3 min read",
  },
  {
    slug: "getting-started",
    title: "Getting Started with Routing",
    date: "March 8, 2026",
    excerpt:
      "Learn how to set up redirects, rewrites, and transforms for your project — all without redeploying your application.",
    readTime: "5 min read",
  },
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold text-white">Blog</h1>
      <p className="mt-2 text-slate-400">
        Thoughts on routing, performance, and the modern web.
      </p>

      <div className="mt-12 grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:border-slate-700 hover:bg-slate-900"
          >
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <time>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
              {post.title}
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </h2>
            <p className="mt-3 text-slate-400 leading-relaxed">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
