interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, title }: CodeBlockProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-slate-700">
      {title && (
        <div className="bg-slate-800 px-3 py-1.5 text-xs text-slate-400 border-b border-slate-700">
          {title}
        </div>
      )}
      <pre className="bg-slate-900 p-3 overflow-x-auto">
        <code className="text-sm text-slate-300">{code}</code>
      </pre>
    </div>
  );
}
