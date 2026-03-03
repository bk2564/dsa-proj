
  function SquareMap({ mapKey, value, color }) {
  return (
    // the mapKey need to be in the middle of the remaining space
    <div
      className={`relative w-12 h-12 flex items-center justify-center 
        text-xl font-bold ${color} border-2 border-whiter `} 
    >
      <span className="absolute top-0 left-0 text-[10px] leading-none font-semibold text-red-400 
      border-2 border-white-400 p-1">
        {value}
      </span>
      <span className="col-span-2 text-xl text-white font-bold text-center">{mapKey}</span>
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


