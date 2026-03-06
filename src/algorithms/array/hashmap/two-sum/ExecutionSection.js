import { ShowArray } from "../../../../components/array/array";
import Input from "../../../../components/common/Input";
import { QuestionCode } from "../../../../components/common/Question";
import Return from "../../../../components/common/Return";
import { StepCard } from "../../../../components/common/StepCard";
import StepsTitle from "../../../../components/common/StepsTitle";
import Target from "../../../../components/common/Target";
import { ShowHashMap } from "../../../../components/hashmap/hashmap";
import { getSteps } from "./steps";

export const demo = {
  array: [2, 7, 11, 15],
  target: 18,
};

export function ExecutionSection() {
  const steps = getSteps(demo.array, demo.target);
  const input = ` [${demo.array.join(", ")}]`;
  const returnValue = `${steps[steps.length - 1].returnValue}`;

  return (
    <>
      <Input input={input} />
      <Target target={demo.target} />
      <StepsTitle />
      <TwoSumSteps steps={steps} />
      <Return returnValue={returnValue} />
    </>
  );
}

function TwoSumSteps({ steps }) {
  return (
    <section>
      <div className="space-y-5">
        {steps.map((step, index) => (
            <TwoSumStepCard key={index} stepNumber={index + 1} step={step} />
        ))}
      </div>
    </section>
  );
}

function TwoSumStepCard({ stepNumber, step, highlightArray, highlightMap }) {
  const cardContent = getStepCardContent(step);

  return (
    <div className="relative bg-gray-900 rounded-xl p-4 border border-slate-700 panel">
      <StepCard
        stepNumber={stepNumber}
        title={cardContent.title}
        description={cardContent.description}
      />
      <ShowArray arr={step.array} highlight={getHighlightArray(step)} />
      <ShowHashMap hashmap={step.hashmap} highlight={getHighlightMap(step)} />
      <Description step={step} />
    </div>
  );
}

function Description({ step }) {
  const foundIndex = step.hashmap.get(step.complement);

  return (
    <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
      <QuestionCode code={`i = ${step.index}`} />
      <span>|</span>
      <QuestionCode code={`value = ${step.value}`} />
      <span>|</span>
      <QuestionCode code={`complement = ${step.complement}`} />
      <span>|</span>
      <QuestionCode code={`mapSize = ${step.hashmap.size}`} />
      {step.found && (
        <>
          <span>|</span>
          <QuestionCode code={`complementIndex = ${foundIndex}`} />
        </>
      )}
    </div>
  );
}


function getHighlightMap(step) {
  const highlight = new Map();
  const index = step.hashmap.get(step.complement);

  if (index >= 0 && index < step.array.length && step.found) {
    highlight.set(step.complement, "bg-green-500");
  }

  return highlight;
}

function getHighlightArray(step) {
  const highlight = new Map();
  const index = step.index;

  if (index >= 0 && index < step.array.length) {
    highlight.set(index, "bg-yellow-500");
  }
  return highlight;
}

function getStepCardContent(step) {
  const normalizedText = step.text.trim();

  if (step.action === "compute-complement") {
    return {
      title: "Compute complement",
      description: normalizedText,
    };
  }

  if (step.action === "pair-found") {
    return {
      title: "Pair located",
      description: normalizedText,
    };
  }

  if (step.action === "store-value") {
    return {
      title: "Store value in hash map",
      description: normalizedText,
    };
  }

  if (step.action === "not-found") {
    return {
      title: "No valid pair",
      description: normalizedText,
    };
  }

  return {
    title: normalizedText,
    description: "",
  };
}
