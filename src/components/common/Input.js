import { MatrixCell } from "../array/array";

export default function Input({ input }) {
  return (
    <div className="flex flex-col gap-3 p-4">
      <p className="text-lg font-semibold">Input:</p>
        <code className="inline-block w-full rounded-md border border-slate-600/70 bg-slate-800/90 px-3 py-2 text-center font-mono text-sm tracking-[0.04em] text-cyan-200 shadow-sm sm:text-base">
          {input}
        </code>
    </div>
  );
}



export function InputMatrix({ input }) {
  const columnCount = input?.[0]?.length || 1;

  return (
    <div className="flex flex-col gap-3 p-4">
      <p className="text-lg font-semibold">Input:</p>
      <div className="inline-block w-fit rounded-xl border border-slate-700/80 bg-gradient-to-br from-slate-950 to-slate-900 p-3 shadow-lg">
        <div
          className="grid gap-1.5"
          style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
        >
          {(input ?? []).flatMap((row, rowIndex) =>
            row.map((item, colIndex) => (
              <MatrixCell key={`${rowIndex}-${colIndex}-${item}`} value={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
