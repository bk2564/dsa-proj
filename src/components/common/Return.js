import LabeledCodeBlock from "./LabeledCodeBlock";
import MatrixView from "./MatrixView";

export default function Return({ returnValue }) {
  return (
    <LabeledCodeBlock label="Return" value={returnValue} />
  )
}

export function ReturnMatrix({ returnValue }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <p className="text-lg font-semibold justify-center">Return: </p>
      <MatrixView matrix={returnValue} />
    </div>
  );
}

