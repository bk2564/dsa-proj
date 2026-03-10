import { ShowArray } from "../../../../components/array/array";
import { CodeBlock } from "../../../../components/common/Code";
import Input from "../../../../components/common/Input";
import Return from "../../../../components/common/Return";
import StepFrame from "../../../../components/common/StepFrame";
import StepsTitle from "../../../../components/common/StepsTitle";
import StepTimeline from "../../../../components/common/StepTimeline";
import { resolveStepCardContent } from "../../../../components/common/stepTitleResolver";
import { getSteps } from "./steps";

const demo = {
  nums: [1, 2, 3, 4, 52, 312, 12, 3, 1, 2, 3, 54],
};

const STEP_TITLES = {
  "original-array": "Original array",
  "check-value": "Checking value",
  "check-true": "Return true",
  "check-false": "Add to set",
  end: "Return false",
};

export function ExecutionSection({ nums }) {
  const steps = getSteps([...demo.nums]);
  const input = `[${demo.nums.join(", ")}]`;
  const returnValue = steps[steps.length - 1].returnValue;

  return (
    <>
      <Input input={input} />
      <StepsTitle />
      <ContainsDuplicateSteps steps={steps} />
      <Return returnValue={returnValue} />
    </>
  );
}

const ContainsDuplicateSteps = ({ steps }) => {
  return (
    <StepTimeline
      steps={steps}
      renderStep={(step, stepNumber) => (
        <ContainsDuplicateStepCard stepNumber={stepNumber} step={step} />
      )}
    />
  );
};

function ContainsDuplicateStepCard({ stepNumber, step }) {
  const cardContent = getCardContent(step);
  return (
    <StepFrame
      stepNumber={stepNumber}
      title={cardContent.title}
      description={cardContent.description}
    >
      <ShowArray arr={step.nums} highlight={getHighlightArray(step)} />
      {step.numsSet && <br />}
      <ShowArray arr={step.numsSet} highlight={getHighlightArray(step, true)} />
      <Description step={step} />
    </StepFrame>
  );
}

function getHighlightArray(step, set) {
  const highlight = new Map();
  const index = set ? (step.found ? step.found : step.index) : step.index;
  const length = step.nums.length;
  const action = step.action;

  const colors = {
    "check-value": "bg-yellow-500",
    "check-true": "bg-green-500",
    "check-false": "bg-red-500",
  };

  if (index >= 0 && index < length) {
    highlight.set(index, colors[action]);
  }

  return highlight;
}

function Description({ step }) {
  const currentValue = step.currentValue;
  const has = step.has !== undefined ? step.has ? "is in the set" : "is not in the set" : undefined;
  const color = step.has ? "bg-green-700/70" : "bg-red-700/70";

  return (
    <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
      {currentValue !== undefined && <CodeBlock code={`current value = ${currentValue}`} />}
      {has !== undefined && (
        <code className={`mx-1 inline-block rounded-md border border-slate-600/70 ${color} px-2 py-0.5 font-mono text-xs text-cyan-100 shadow-sm`}>
          {has}
        </code>
      )}
    </div>
  );
}

function getCardContent(step) {
  return resolveStepCardContent(step, STEP_TITLES);
}
