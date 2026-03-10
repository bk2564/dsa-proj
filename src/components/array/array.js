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
  const text = String(value);
  const len = text.length;
  const fontSizePx = Math.max(10, 22 - (len - 1) * 2.1);

  return (
    <div
      className={`w-11 h-10 flex items-center justify-center overflow-hidden
        font-bold leading-none ${color} border-2 border-white`}
      style={{ fontSize: `${fontSizePx}px` }}
    >
      <span className="block w-full text-center truncate">{text}</span>
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



