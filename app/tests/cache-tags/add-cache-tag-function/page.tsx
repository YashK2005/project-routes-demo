import { CacheStatusDisplay } from "@/app/components/cache-status-display";
import { RevalidateButtons } from "@/app/components/revalidate-buttons";
import { CodeBlock } from "@/app/components/code-block";
import Link from "next/link";

const TAG = "vercel-functions-tag";

export const revalidate = 60;

export default function AddCacheTagFunctionPage() {
  const generatedAt = new Date().toISOString();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 space-y-6">
      <Link
        href="/"
        className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-white">
        Tags via addCacheTag()
      </h1>

      <p className="text-slate-400">
        The{" "}
        <code className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">
          addCacheTag()
        </code>{" "}
        function from{" "}
        <code className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">
          @vercel/functions
        </code>{" "}
        provides a Vercel SDK way to add cache tags. It works similarly to{" "}
        <code className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">
          cacheTag()
        </code>{" "}
        from Next.js.
      </p>

      <CodeBlock
        title="addCacheTag() Usage"
        code={`import { addCacheTag } from '@vercel/functions';

export async function GET() {
  // Add a single tag
  addCacheTag("my-tag");

  // Add multiple tags
  addCacheTag("tag1", "tag2", "tag3");

  return Response.json({ data: "..." });
}`}
      />

      <CacheStatusDisplay
        generatedAt={generatedAt}
        pageRevalidate={false}
        cacheTags={[TAG]}
        cacheType="on-demand"
      />

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
        <h3 className="font-semibold text-blue-300 mb-2">
          @vercel/functions Cache API
        </h3>
        <CodeBlock
          code={`import {
  addCacheTag,        // Add tags to response
  invalidateByTag,    // Mark tag stale (background revalidation)
  dangerouslyDeleteByTag  // Delete cache (foreground revalidation)
} from '@vercel/functions';

// Adding tags
addCacheTag("product-123");

// Invalidation (recommended - stale-while-revalidate)
await invalidateByTag("product-123");

// Deletion (use with caution - causes MISS)
await dangerouslyDeleteByTag("product-123");`}
        />
      </div>

      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
        <h3 className="font-semibold text-emerald-300 mb-2">
          Next.js cacheTag() vs @vercel/functions addCacheTag()
        </h3>
        <div className="text-sm space-y-2">
          <table className="w-full text-left text-slate-300">
            <thead>
              <tr className="border-b border-emerald-500/20">
                <th className="pb-2 text-slate-400">Feature</th>
                <th className="pb-2 text-slate-400">cacheTag()</th>
                <th className="pb-2 text-slate-400">addCacheTag()</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">Package</td>
                <td className="py-1 font-mono text-xs">next/cache</td>
                <td className="py-1 font-mono text-xs">@vercel/functions</td>
              </tr>
              <tr>
                <td className="py-1">Framework</td>
                <td className="py-1">Next.js only</td>
                <td className="py-1">Any on Vercel</td>
              </tr>
              <tr>
                <td className="py-1">Recommendation</td>
                <td className="py-1">Preferred for Next.js</td>
                <td className="py-1">For non-Next.js apps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-300 mb-2">How to Test</h3>
        <p className="text-sm text-slate-300">
          See the Route Handler test at{" "}
          <Link
            href="/api/isr/with-tag"
            className="text-blue-400 hover:underline"
          >
            /api/isr/with-tag
          </Link>{" "}
          for a working example using{" "}
          <code className="bg-slate-800 px-1 rounded">addCacheTag()</code>.
        </p>
      </div>

      <RevalidateButtons
        path="/tests/cache-tags/add-cache-tag-function"
        tags={[TAG]}
      />
    </div>
  );
}
