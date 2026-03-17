"use client";

import { useState } from "react";

interface RevalidateButtonProps {
  label: string;
  description: string;
  onClick: () => Promise<{ success: boolean; message?: string }>;
  variant?: "default" | "warning" | "danger";
}

export function RevalidateButton({
  label,
  description,
  onClick,
  variant = "default",
}: RevalidateButtonProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message?: string;
  } | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await onClick();
      setResult(res);
    } catch (error) {
      setResult({ success: false, message: String(error) });
    } finally {
      setLoading(false);
    }
  };

  const variantClasses = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    warning: "bg-yellow-600 hover:bg-yellow-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <div className="space-y-1">
      <button
        onClick={handleClick}
        disabled={loading}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-colors disabled:opacity-50 ${variantClasses[variant]}`}
      >
        {loading ? "..." : label}
      </button>
      <p className="text-xs text-slate-500">{description}</p>
      {result && (
        <p
          className={`text-xs ${result.success ? "text-emerald-400" : "text-red-400"}`}
        >
          {result.success ? "✓ " : "✗ "}
          {result.message || (result.success ? "Success" : "Failed")}
        </p>
      )}
    </div>
  );
}
