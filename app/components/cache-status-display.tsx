import { TimeSince } from "./time-since";

interface CacheStatusDisplayProps {
  title?: string;
  description?: string;
  generatedAt: string;
  pageRevalidate?: number | false;
  cacheTags?: string[];
  cacheType?: "time-based" | "on-demand" | "static" | "dynamic";
  fetchData?: {
    label: string;
    value: string;
    timestamp?: string;
  }[];
}

export function CacheStatusDisplay({
  title = "Cache Status",
  description,
  generatedAt,
  pageRevalidate,
  cacheTags,
  cacheType,
  fetchData,
}: CacheStatusDisplayProps) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 space-y-3">
      <div>
        <h3 className="font-semibold text-lg text-white">{title}</h3>
        {description && (
          <p className="text-xs text-slate-400 mt-1">{description}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="text-slate-400">Generated At:</div>
        <div className="font-mono text-slate-300">{generatedAt}</div>

        <div className="text-slate-400">Time Since:</div>
        <div>
          <TimeSince timestamp={generatedAt} />
        </div>

        {pageRevalidate !== undefined && (
          <>
            <div className="text-slate-400">Revalidate Period:</div>
            <div className="font-mono text-slate-300">
              {pageRevalidate === false
                ? "false (static)"
                : `${pageRevalidate}s`}
            </div>
          </>
        )}

        {cacheType && (
          <>
            <div className="text-slate-400">Cache Type:</div>
            <div>
              <span
                className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                  cacheType === "time-based"
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : cacheType === "on-demand"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : cacheType === "static"
                        ? "bg-slate-500/20 text-slate-300 border border-slate-500/30"
                        : "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                }`}
              >
                {cacheType}
              </span>
            </div>
          </>
        )}

        {cacheTags && cacheTags.length > 0 && (
          <>
            <div className="text-slate-400">Cache Tags:</div>
            <div className="flex flex-wrap gap-1">
              {cacheTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-2 py-0.5 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {fetchData && fetchData.length > 0 && (
        <div className="border-t border-slate-700 pt-3 mt-3">
          <h4 className="text-sm font-medium text-white mb-2">Fetched Data:</h4>
          <div className="space-y-2">
            {fetchData.map((item, i) => (
              <div key={i} className="text-sm">
                <span className="text-slate-400">{item.label}:</span>{" "}
                <span className="font-mono text-slate-300">{item.value}</span>
                {item.timestamp && (
                  <span className="text-slate-500 ml-2">
                    (<TimeSince timestamp={item.timestamp} />)
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
