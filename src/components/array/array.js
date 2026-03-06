export function ShowArray({arr, highlight}) {
  return (
    <div className="flex flex-wrap gap-4 my-4">
      {arr.map((item, index) => {
        const color = highlight.get(index) || "";
        return <Square key={`${index}-${item}`} color={color} value={item} />;
      })}
    </div>
  );
}




function Square({ value, color }) {
  return (
    <div
      className={`w-8 h-8 flex items-center justify-center 
        text-xl font-bold ${color} border-2 border-whiter`}
    >
      {value}
    </div>
  );
}

export function ShowMatrix({ matrix, highlight }) {
  return (
    <div className="flex flex-col gap-4 my-4">
      {matrix.map((row, rowIndex) => {
        return (
            <div key={rowIndex} className="flex flex-wrap gap-4">
              {row.map((item, colIndex) => {
                const coordinateKey = `${rowIndex}-${colIndex}`;
                const color =
                  highlight.get(coordinateKey) ||
                  highlight.get(colIndex) ||
                  highlight.get(rowIndex) ||
                  "";

                return <Square key={`${rowIndex}-${colIndex}-${item}`} color={color} value={item} />;
              })}
          </div>
        );
      })}
    </div>
  );
}

export function WindowBadge({ windowValues }) {
  return (
    <span className="absolute top-0 right-0 max-w-[60%] rounded-xl border-2 border-slate-700 bg-gray-900 px-3 py-1 text-right text-[12px] font-semibold leading-tight text-slate-200">
      Window [{windowValues}]
    </span>
  );
}


export function MatrixCell({ value }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-500/70 bg-slate-900/90 font-mono text-sm font-semibold text-cyan-200 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.08)] sm:h-11 sm:w-11 sm:text-base">
      {value}
    </div>
  );
}
