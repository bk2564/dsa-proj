
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


function SquareMap({ mapKey, value, color }) {
  return (
    <div
      className={`relative w-10 h-10 flex items-center justify-center text-xl font-bold ${color} border-2 border-white`}
    >
      <span className="absolute top-0 left-1 text-[10px] leading-none font-semibold">
        {value}
      </span>
      <span>{mapKey}</span>
    </div>
  );
}

export function ShowHashMap({ hashmap, highlight }) {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from(hashmap.keys()).map((key) => {
        const item = hashmap.get(key);
        const color = highlight.get(key) || "";
        return <SquareMap key={`${key}-${item}`} color={color} mapKey={key} value={item} />;
      })}
    </div>
  );
}



