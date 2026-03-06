import { ShowArray } from "../../../../components/array/array";
import { CodeBlock } from "../../../../components/common/Code";
import Input from "../../../../components/common/Input";
import Return from "../../../../components/common/Return";
import { StepCard } from "../../../../components/common/StepCard";
import StepsTitle from "../../../../components/common/StepsTitle";
import { getSteps } from "./steps";

export const demo = {
  prices: [7, 1, 5, 3, 6, 4],
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
    <section>
      <div className="space-y-5">
        {steps.map((step, index) => (
          <BestTimeToBuySellStockIIStepCard
            key={index}
            stepNumber={index + 1}
            step={step}
          />
        ))}
      </div>
    </section>
  );
}

function BestTimeToBuySellStockIIStepCard({ stepNumber, step }) {
  const cardContent = getStepCardContent(step);
  return (
    <div className="relative bg-gray-900 rounded-xl p-4 border border-slate-700 panel">
      <StepCard
        stepNumber={stepNumber}
        title={cardContent.title}
        description={cardContent.description}
      />
      <ShowArray arr={step.prices} highlight={getHighlightArray(step)} />
      <Description
        step={step}
        currentCondition={`${step.prices[step.index]} > ${step.prices[step.index - 1]}`}
      />
    </div>
  );
}

function getHighlightArray(step) {
  const highlight = new Map();
  const index = step.index;
  const length = step.prices.length;

  if (index >= 0 && index < step.prices.length) {
    highlight.set(index, "bg-yellow-500");
    highlight.set(index - 1, "bg-blue-500");
  }
  return highlight;
}

function Description({ step, currentCondition }) {
  const profit = step.profit;
  return (
      <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
      <CodeBlock code={`profit = ${profit}`} />
      <Condition currentCondition={currentCondition} />
    </div>
  );
}

function Condition({ currentCondition }) {
    if (currentCondition.includes("undefined")) return null
    const condition = eval(currentCondition);
    const color = condition ? "bg-green-700/90" : "bg-red-900/90";
  return (
    <code
      className={`mx-1 inline-block rounded-md border border-slate-600/70 
            ${color} px-2 py-0.5 font-mono text-xs text-cyan-100 shadow-sm`}
    >
      {currentCondition}
    </code>
  );
}

function getStepCardContent(step) {
  const normalizedText = step.text.trim();

  if (step.action === "check-price") {
    return {
      title: "Check price",
      description: normalizedText,
    };
  }
  if (step.action === "update-profit") {
    return {
      title: "Update profit",
      description: normalizedText,
    };
  }
  if (step.action === "return-profit") {
    return {
      title: "Return profit",
      description: normalizedText,
    };
  }
}
