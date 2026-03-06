import LabeledCodeBlock from "./LabeledCodeBlock";
import MatrixView from "./MatrixView";

export default function Input({ input }) {
  return (
    <LabeledCodeBlock label="Input" value={input} />
  );
}

export function InputMatrix({ input }) {
  return (
    <div className="flex flex-col gap-3 p-4">
      <p className="text-lg font-semibold">Input:</p>
      <MatrixView matrix={input} />
    </div>
  );
}
