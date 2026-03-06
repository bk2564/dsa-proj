import { ShowMatrix } from "../../../../components/array/array";
import { CodeBlock } from "../../../../components/common/Code";
import { InputMatrix } from "../../../../components/common/Input";
import { ReturnMatrix } from "../../../../components/common/Return";
import { StepCard } from "../../../../components/common/StepCard";
import { getSteps } from "./steps";

const demo = {
    input: [[1,2,3],[4,5,6],[7,8,9]]
}

export function ExecutionSection() {
    const steps = getSteps(demo.input)
    return (
        <>
        <InputMatrix input={demo.input} />
        <RotatedImageSteps steps={steps} />
        <ReturnMatrix returnValue={steps[steps.length - 1].matrix} />
        </>
        )
}

function RotatedImageSteps({ steps }) {
  return (
    <section>
      <div className="space-y-5">
        {steps.map((step, index) => (
          <RotatedImageStepCard
            key={index}
            stepNumber={index + 1}
            step={step}
          />
        ))}
      </div>
    </section>
  );
}

function RotatedImageStepCard({ stepNumber, step }) {
  const cardContent = getStepCardContent(step);
  return (
    <div className="relative bg-gray-900 rounded-xl p-4 border border-slate-700 panel">
      <StepCard
        stepNumber={stepNumber}
        title={cardContent.title}
        description={cardContent.description}
      />
      <ShowMatrix matrix={step.matrix} highlight={getHighlightMatrix(step)} />
      <Description step={step} />
    </div>
  );
}

function Description({ step }) {
  const isRowInversion = step.action === "row-inversion";
  const isTransposeComplete = step.action === "transpose-end";
  const showElements = !isRowInversion && !isTransposeComplete && step.element1 && step.element2;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
      {isRowInversion && <CodeBlock code={`row = ${step.row}`} />}
      {showElements && <CodeBlock code={`element 1 = ${step.element1}`} />}
      {showElements && <CodeBlock code={`element 2 = ${step.element2}`} />}
    </div>
  );
}

function getHighlightMatrix(step) {
  const highlight = new Map();

  if (step.action === "row-inversion" && typeof step.row === "number") {
    for (let col = 0; col < step.matrix[step.row].length; col++) {
      highlight.set(`${step.row}-${col}`, "bg-cyan-600/60");
    }
  }

    if (step.action === "swap-start") {
      highlight.set(`${step.row}-${step.column}`, "bg-amber-700");
      highlight.set(`${step.column}-${step.row}`, "bg-amber-400");
    }

    if (step.action === "inversion-start") {
      const oppositeColumn = step.matrix.length - 1 - step.column;
      highlight.set(`${step.row}-${step.column}`, "bg-amber-700");
      highlight.set(`${step.row}-${oppositeColumn}`, "bg-amber-400");
    }
    if (step.action === "swap-end") {
      highlight.set(`${step.row}-${step.column}`, "bg-amber-400");
      highlight.set(`${step.column}-${step.row}`, "bg-amber-700");
    }

    if (step.action === "inversion-end") {
      const oppositeColumn = step.matrix.length - 1 - step.column;
      highlight.set(`${step.row}-${step.column}`, "bg-amber-400");
      highlight.set(`${step.row}-${oppositeColumn}`, "bg-amber-700");
    }

  return highlight;
}

function getStepCardContent(step) {
  const normalizedText = step.text.trim();

  if (step.action === "matrix-original") {
    return { title: "Original matrix", description: normalizedText };
  }

  if (step.action === "swap-start") {
    return { title: "Transpose swap start", description: normalizedText };
  }

  if (step.action === "swap-end") {
    return { title: "Transpose swap end", description: normalizedText };
  }

  if (step.action === "transpose-end") {
    return { title: "Transpose completed", description: normalizedText };
  }

  if (step.action === "row-inversion") {
    return {
      title: "Row inversion",
      description: normalizedText,
    };
  }

  if (step.action === "inversion-start") {
    return {
      title: "Inversion start",
      description: normalizedText,
    };
  }
  if (step.action === "inversion-end") {
    return {
      title: "Inversion end",
      description: normalizedText,
    };
  }

  if (step.action === "rotation-end") {
    return {
      title: "Rotation end",
      description: normalizedText,
    };
  }

  return {
    title: normalizedText,
    description: "",
  };
}
