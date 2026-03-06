export function MatrixCell({ value, color = "" }) {
  return (
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-md border border-slate-500/70 bg-slate-900/90 font-mono text-sm font-semibold text-cyan-200 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] sm:h-11 sm:w-11 sm:text-base ${color}`}
    >
      {value}
    </div>
  );
}

export default function MatrixView({ matrix, title, containerClassName = "" }) {
  const columnCount = matrix?.[0]?.length || 1;

  return (
    <div className={`inline-block w-fit rounded-xl border border-slate-700/80 bg-gradient-to-br from-slate-950 to-slate-900 p-3 shadow-lg ${containerClassName}`}>
      {title ? <p className="mb-2 text-lg font-semibold">{title}:</p> : null}
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

export function ShowMatrix({ matrix, highlight = new Map() }) {
  return (
    <div className="my-4 flex flex-col gap-4">
      {(matrix ?? []).map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap gap-4">
          {row.map((item, colIndex) => {
            const coordinateKey = `${rowIndex}-${colIndex}`;
            const color =
              highlight.get(coordinateKey) ||
              highlight.get(colIndex) ||
              highlight.get(rowIndex) ||
              "";

            return (
              <div
                key={`${rowIndex}-${colIndex}-${item}`}
                className={`flex h-8 w-8 items-center justify-center border-2 border-white text-xl font-bold ${color}`}
              >
                {item}
              </div>
            );
          })}
        </div>
      ))}
      </div>
  );
}
