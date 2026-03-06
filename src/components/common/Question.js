import { MatrixCell } from "../array/array";

export default function Question({ children, difficulty }) {
  const difficultyColor = {
    Easy: "border-emerald-200/70 bg-emerald-600/60 text-emerald-100",
    Medium: "border-cyan-400/40 bg-cyan-600/20 text-cyan-200",
    Hard: "border-red-400/40 bg-red-600/20 text-red-200",
  };

  const color = difficultyColor[difficulty] || "border-slate-500/40 bg-slate-700/40 text-slate-100";

  return (
    <section className="mt-4 w-full rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800/70 p-6 shadow-[0_0_0_1px_rgba(148,163,184,0.08)] sm:p-7">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold leading-none text-slate-100">Question</h2>
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${color}`}
        >
          {difficulty?.toUpperCase() || "UNKNOWN"}
        </span>
      </div>

      <div className="space-y-4 text-sm leading-7 text-slate-300">
        {children}
      </div>
    </section>
  );
}



export function QuestionMatrix({ matrix }) {
  const columnCount = matrix?.[0]?.length || 1;

  return (
    <div className="inline-block rounded-xl border border-slate-700/80 bg-gradient-to-br from-slate-950 to-slate-900 p-3 shadow-lg">
      <div
        className="grid gap-1.5"
        style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
      >
        {(matrix ?? []).flatMap((row, rowIndex) =>
          row.map((item, colIndex) => (
            <MatrixCell key={`${rowIndex}-${colIndex}-${item}`} value={item} />
          ))
        )}
      </div>
    </div>
  );
}
