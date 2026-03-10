import { ShowArray } from "../../../../components/array/array";
import { CodeBlock } from "../../../../components/common/Code";
import Input from "../../../../components/common/Input";
import Return from "../../../../components/common/Return";
import StepFrame from "../../../../components/common/StepFrame";
import StepsTitle from "../../../../components/common/StepsTitle";
import StepTimeline from "../../../../components/common/StepTimeline";
import { resolveStepCardContent } from "../../../../components/common/stepTitleResolver";
import { getSteps } from "./steps";

export const demo = {
  prices: [7, 1, 5, 3, 6, 4],
};

const STEP_TITLES = {
  "check-price": "Check price",
  "update-profit": "Update profit",
  "return-profit": "Return profit",
};

export function ExecutionSection() {
  const steps = getSteps(demo.prices);
  const input = ` [${demo.prices.join(", ")}]`;
  const profit = steps[steps.length - 1].profit;

  return (
    <>
      <Input input={input} />
      <StepsTitle />
      <BestTimeToBuySellStockIISteps steps={steps} />
      <Return returnValue={profit} />
    </>
  );
}

function BestTimeToBuySellStockIISteps({ steps }) {
  return (
    <StepTimeline
      steps={steps}
      renderStep={(step, stepNumber) => (
        <BestTimeToBuySellStockIIStepCard stepNumber={stepNumber} step={step} />
      )}
    />
  );
}

function BestTimeToBuySellStockIIStepCard({ stepNumber, step }) {
  const cardContent = getStepCardContent(step);
  const currentValue = step.prices?.[step.index];
  const previousValue = step.prices?.[step.index - 1];
  const conditionLabel =
    currentValue === undefined || previousValue === undefined
      ? null
      : `${currentValue} > ${previousValue}`;
  const isConditionTrue =
    currentValue === undefined || previousValue === undefined ? null : currentValue > previousValue;

  return (
    <StepFrame
      stepNumber={stepNumber}
      title={cardContent.title}
      description={cardContent.description}
    >
      <ShowArray arr={step.prices} highlight={getHighlightArray(step)} />
      <Description step={step} conditionLabel={conditionLabel} isConditionTrue={isConditionTrue} />
    </StepFrame>
  );
}

function getHighlightArray(step) {
  const highlight = new Map();
  const index = step.index;

  if (index >= 0 && index < step.prices.length) {
    highlight.set(index, "bg-yellow-500");
    highlight.set(index - 1, "bg-blue-500");
  }
  return highlight;
}

function Description({ step, conditionLabel, isConditionTrue }) {
  const profit = step.profit;
  return (
    <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
      <CodeBlock code={`profit = ${profit}`} />
      <Condition label={conditionLabel} isTrue={isConditionTrue} />
    </div>
  );
}

function Condition({ label, isTrue }) {
  if (!label) return null;
  const color = isTrue ? "bg-green-700/90" : "bg-red-900/90";
  return (
    <code
      className={`mx-1 inline-block rounded-md border border-slate-600/70 
            ${color} px-2 py-0.5 font-mono text-xs text-cyan-100 shadow-sm`}
    >
      {label}
    </code>
  );
}

function getStepCardContent(step) {
  return resolveStepCardContent(step, STEP_TITLES);
}
