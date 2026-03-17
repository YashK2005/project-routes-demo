import { CacheStatusDisplay } from "@/app/components/cache-status-display";
import { RevalidateButtons } from "@/app/components/revalidate-buttons";
import { CodeBlock } from "@/app/components/code-block";
import Link from "next/link";

const CACHE_TAG = "fetch-data-tag";

async function getData() {
  const res = await fetch("https://httpbin.org/json", {
    next: { tags: [CACHE_TAG] },
  });
  const json = await res.json();
  return {
    ...json,
    fetchedAt: new Date().toISOString(),
  };
}

export default async function FetchTagPage() {
  const generatedAt = new Date().toISOString();
  const data = await getData();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 space-y-6">
      <Link
        href="/"
        className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold text-white">
        ISR - Fetch with Cache Tag
      </h1>

      <p className="text-slate-400">
        This page demonstrates tagging fetch requests using the{" "}
        <code className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">
          next.tags
        </code>{" "}
        option. The fetched data can be revalidated by its tag independently of
        the page.
      </p>

      <CodeBlock
        title="Fetch with Tag"
        code={`async function getData() {
  const res = await fetch("https://httpbin.org/json", {
    next: { tags: ["${CACHE_TAG}"] },
  });
  return res.json();
}`}
      />

      <CacheStatusDisplay
        title="ISR (Page Render)"
        description="This timestamp updates when the page HTML is re-rendered by Next.js."
        generatedAt={generatedAt}
        cacheTags={[CACHE_TAG]}
        cacheType="on-demand"
      />

      <CacheStatusDisplay
        title="Data Cache (Fetch)"
        description="This timestamp updates when the cached fetch response is refreshed. It may differ from the ISR timestamp if the data cache entry is reused across renders."
        generatedAt={data.fetchedAt}
        fetchData={[
          {
            label: "Slideshow Title",
            value: data.slideshow?.title || "N/A",
          },
        ]}
      />

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-300 mb-2">How to Test</h3>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-300">
          <li>Note the &quot;Fetched At&quot; timestamp above</li>
          <li>
            Refresh multiple times - the fetched time stays the same (cached)
          </li>
          <li>
            Click the &quot;revalidateTag&quot; button for &quot;{CACHE_TAG}
            &quot;
          </li>
          <li>Refresh - should see updated timestamp from fresh fetch</li>
        </ol>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
        <h3 className="font-semibold text-blue-300 mb-2">
          Fetch Caching Behavior
        </h3>
        <ul className="text-sm text-slate-300 space-y-1">
          <li>
            <strong>Default:</strong> fetch requests are cached indefinitely
          </li>
          <li>
            <strong>With tags:</strong> Can revalidate specific fetches by tag
          </li>
          <li>
            <strong>next.revalidate:</strong> Can add time-based revalidation
            too
          </li>
          <li>
            <strong>cache: &apos;no-store&apos;:</strong> Opts out of caching
            entirely
          </li>
        </ul>
      </div>

      <RevalidateButtons tags={[CACHE_TAG]} />
    </div>
  );
}
