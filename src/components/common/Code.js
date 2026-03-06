import { useState } from "react";

export default function Code({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="rounded-2xl border border-slate-700 bg-black/80 p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-white">Code</h2>
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="rounded-lg border border-slate-600 px-3 py-1 text-xs font-medium text-slate-200 transition-colors hover:border-slate-400 hover:text-white"
        >
          {isExpanded ? "Hide code" : "Show code"}
        </button>
      </div>

      {isExpanded ? (
        <pre className="overflow-x-auto whitespace-pre-wrap text-sm leading-6 text-slate-300">
          <code>{text}</code>
        </pre>
      ) : null}
    </aside>
  );
}

export function CodeBlock({ code }) {
  return (
    <code className="mx-1 inline-block rounded-md border border-slate-600/70 bg-slate-800/90 px-2 py-0.5 font-mono text-xs text-cyan-200 shadow-sm">
      {code}
    </code>
  );
}

