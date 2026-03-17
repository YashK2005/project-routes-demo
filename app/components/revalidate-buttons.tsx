"use client";

import { RevalidateButton } from "./revalidate-button";

interface RevalidateButtonsProps {
  path?: string;
  tags?: string[];
}

export function RevalidateButtons({ path, tags }: RevalidateButtonsProps) {
  const revalidateByPath = async () => {
    if (!path) return { success: false, message: "No path provided" };
    const res = await fetch(
      `/api/revalidate/path?path=${encodeURIComponent(path)}`,
      { method: "POST" }
    );
    const data = await res.json();
    return { success: res.ok, message: data.message };
  };

  const revalidateByTag = async (tag: string) => {
    const res = await fetch(
      `/api/revalidate/tag?tag=${encodeURIComponent(tag)}`,
      { method: "POST" }
    );
    const data = await res.json();
    return { success: res.ok, message: data.message };
  };

  const invalidateByTag = async (tag: string) => {
    const res = await fetch(
      `/api/invalidate/tag?tag=${encodeURIComponent(tag)}`,
      { method: "POST" }
    );
    const data = await res.json();
    return { success: res.ok, message: data.message };
  };

  return (
    <div className="border border-slate-700 bg-slate-900/50 rounded-lg p-4 space-y-4">
      <h3 className="font-semibold text-white">Revalidation Actions</h3>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {path && (
          <RevalidateButton
            label={`revalidatePath('${path}')`}
            description="Next.js: Invalidates entire route, triggers background revalidation"
            onClick={revalidateByPath}
          />
        )}

        {tags?.map((tag) => (
          <RevalidateButton
            key={`revalidate-${tag}`}
            label={`revalidateTag('${tag}')`}
            description="Next.js: Marks tag stale, triggers background revalidation"
            onClick={() => revalidateByTag(tag)}
          />
        ))}

        {tags?.map((tag) => (
          <RevalidateButton
            key={`invalidate-${tag}`}
            label={`invalidateByTag('${tag}')`}
            description="@vercel/functions: Marks stale (background, recommended)"
            onClick={() => invalidateByTag(tag)}
            variant="warning"
          />
        ))}
      </div>

      <div className="text-xs text-slate-500 border-t border-slate-700 pt-3 mt-3">
        <strong className="text-slate-400">After revalidation:</strong> Refresh
        the page to see the updated content. Check the{" "}
        <code className="bg-slate-800 px-1 rounded">x-vercel-cache</code>{" "}
        header in DevTools Network tab:
        <ul className="list-disc list-inside mt-1">
          <li>
            <strong>STALE</strong> - Serving cached content while revalidating in
            background
          </li>
          <li>
            <strong>REVALIDATED</strong> - Content was freshly regenerated
          </li>
        </ul>
      </div>
    </div>
  );
}
