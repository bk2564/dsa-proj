
  function SquareMap({ mapKey, value, color }) {
    const squareColor = color === "bg-green-500" ? "bg-blue-700/70" : "";
  
    return (
    <div
      className={`relative w-12 h-12 flex items-center justify-center 
        text-xl font-bold ${color} border-2 border-white `} 
    >
      <span className={`absolute top-0 left-0 flex h-5 w-5 items-center justify-center 
      text-[10px] leading-none font-semibold text-red-400 
      border-2 border-white-400 p-1 ${squareColor}`}>
        {value}
      </span>
      <span className="col-span-2 translate-x-1 translate-y-1 text-xl text-white font-bold text-center">{mapKey}</span>
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


