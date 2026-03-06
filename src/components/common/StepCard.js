export function StepCard({ stepNumber, title, description, text }) {
  const resolvedTitle = title?.trim() || text?.trim() || "Current step";
  const resolvedDescription = description?.trim() || "";

  return (
    <header className="mb-4 rounded-xl border border-slate-700/80 bg-slate-900/70 px-4 pb-3 pt-7">
      <span className="absolute top-0 left-0 bg-gray-900 px-3 py-1 text-[14px] font-semibold text-white border-2 border-slate-700 rounded-xl">
        Step {stepNumber}
      </span>
      <p className="text-sm font-semibold tracking-wide text-slate-100">
        {resolvedTitle}
      </p>
      {resolvedDescription && (
        <p className="mt-1 text-xs leading-relaxed text-slate-300">
          {resolvedDescription}
        </p>
      )}
    </header>
  );
}
