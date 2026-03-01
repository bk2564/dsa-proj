
export function ShowArray({arr, highlight}) {
  return (
    <div className="flex flex-wrap gap-4">
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
