import { ShowArray, WindowBadge } from "../../../../components/array/array";
import { CodeBlock } from "../../../../components/common/Code";
import Input from "../../../../components/common/Input";
import Return from "../../../../components/common/Return";
import StepFrame from "../../../../components/common/StepFrame";
import StepsTitle from "../../../../components/common/StepsTitle";
import StepTimeline from "../../../../components/common/StepTimeline";
import { resolveStepCardContent } from "../../../../components/common/stepTitleResolver";
import { getSteps } from "./steps";

const demo = {
  nums: [3, 76, -98, 3, 43, 654, 3],
  k: 3,
};

const STEP_TITLES = {
  originalArray: "Original Array",
  originalSums: "Original Sums",
  iterationStart: "Iteration Start",
  currentSumUpdate: "Current Sum Update",
  indexCheck: "Index Check",
  maxSumUpdate: "Max Sum Update",
  iterationEnd: "Iteration End",
  finalResult: "Final Result",
};
export function ExecutionSection({ nums, k }) {
  const steps = getSteps([...demo.nums], demo.k);
  const input = `[${demo.nums.join(", ")}]`;
  const returnValue = steps[steps.length - 1].returnValue;

  return (
    <>
      <Input input={input} />
      <StepsTitle />
      <MaximumAverageSubarrayISteps steps={steps} />
      <Return returnValue={returnValue} />
    </>
  );
}

function MaximumAverageSubarrayISteps({ steps }) {
  return (
    <StepTimeline
      steps={steps}
      renderStep={(step, stepNumber) => (
        <MaximumAverageSubarrayIStepCard stepNumber={stepNumber} step={step} />
      )}
    />
  );
}
function MaximumAverageSubarrayIStepCard({ stepNumber, step }) {
  const cardContent = getCardContent(step);
  const highlight = getHighlightArray(step);
  const windowValues = getWindow(step);

  return (
    <StepFrame
      stepNumber={stepNumber}
      title={cardContent.title}
      description={cardContent.description}
      badge={<WindowBadge windowValues={windowValues} />}
    >
      <ShowArray arr={step.array} highlight={highlight} />
      <Description step={step} />
    </StepFrame>
  );
}

function getWindow(step) {
  const start = Math.max(0, Math.min(step.left, step.array.length - 1));
  const end = Math.max(start, Math.min(step.index, step.array.length - 1));
  return step.array.slice(start, end + 1).join(", ");
}

function Description({ step }) {
  const index = step.index;
  const value = step.array[index];

  return (
    <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
      {step.index !== undefined && <CodeBlock code={`index = ${index} (${value})`} />}
      {step.currSum !== undefined && <CodeBlock code={`currSum = ${step.currSum}`} />}
      {step.maxSum !== undefined && <CodeBlock code={`maxSum = ${step.maxSum}`} />}
    </div>
  );
}

function getHighlightArray(step) {
  const highlight = new Map();
  const index = step.index;
  const left = step.left;

  if (index >= 0 && index < step.array.length) {
    highlight.set(index, "bg-amber-500");
  }
  if (left >= 0 && left < step.array.length) {
    highlight.set(left, "bg-blue-500");
  }
  return highlight;
}

function getCardContent(step) {
  return resolveStepCardContent(step, STEP_TITLES);
}
