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
  digits: [2, 4, 9, 9],
};

const STEP_TITLES = {
  "original-number": "Original number",
  "add-last-digit": "Add last digit",
  "carry-set": "Carry set",
  "digit-set": "Digit set",
  "result-first-digit": "Result first digit",
  "digits-addition": "Digits addition",
  "digit-addition": "Digit addition",
  "result-ready": "Result ready",
};

export function ExecutionSection() {
  const steps = getSteps([...demo.digits]);
  const input = `[${demo.digits.join(", ")}]`;
  const returnValue = `[${steps[steps.length - 1].result.join(", ")}]`;
  return (
    <>
      <Input input={input} />
      <StepsTitle />
      <PlusOneSteps steps={steps} />
      <Return returnValue={returnValue} />
    </>
  );
}

function Description({ step }) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
      {step.carry !== undefined && <CodeBlock code={`carry = ${step.carry}`} />}
      {step.currentDigit !== undefined && <CodeBlock code={`current digit = ${step.currentDigit}`} />}
      {step.resultDigit !== undefined && <CodeBlock code={`result digit = ${step.resultDigit}`} />}
      {step.index !== undefined && <CodeBlock code={`index = ${step.index}`} />}
    </div>
  );
}

function PlusOneSteps({ steps }) {
  return (
    <StepTimeline
      steps={steps}
      renderStep={(step, stepNumber) => <PlusOneStepCard stepNumber={stepNumber} step={step} />}
    />
  );
}

function PlusOneStepCard({ stepNumber, step }) {
  const cardContent = getStepCardContent(step);
  return (
    <StepFrame
      stepNumber={stepNumber}
      title={cardContent.title}
      description={cardContent.description}
    >
      <ShowArray arr={step.digits} highlight={getHighlightArray(step)} />
      {step.result && <ShowArray arr={step.result} highlight={getHighlightResultArray(step)} />}
      <Description step={step} />
    </StepFrame>
  );
}
function getStepCardContent(step) {
  return resolveStepCardContent(step, STEP_TITLES);
}


function getHighlightArray(step) {
    const highlight = new Map();
    const index = step.index;

    if(step.action.includes("digit")){
      highlight.set(index, "bg-amber-700");
    }

    return highlight;
  }


  function getHighlightResultArray(step) {
    const highlight = new Map();
    const index = 0;

    if(step.action === "result-digit" || step.action === "result-last-digit-carry" || step.action === "result-first-digit"){
      highlight.set(index, "bg-green-700");
    }

    return highlight;
  }
