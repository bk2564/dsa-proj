import { ShowArray } from "../../../components/array/array";
import { CodeBlock } from "../../../components/common/Code";
import Input from "../../../components/common/Input";
import Return from "../../../components/common/Return";
import StepFrame from "../../../components/common/StepFrame";
import StepsTitle from "../../../components/common/StepsTitle";
import StepTimeline from "../../../components/common/StepTimeline";
import { resolveStepCardContent } from "../../../components/common/stepTitleResolver";
import { getSteps } from "./steps";

const demo = {
    nums: [2, 5, 1, 11, 4, 7, 1, 2, 7, 4, 
           7, 12, 1, 12, 11, 4, 4, 3, 12, 2],
    n: 10,
}

const STEP_TITLES = {
    "original-array": "Original Array",
    "iteration-start": "Iteration Start",
    "add-element-to-ans": "Add Element to Answer Array",
    "return-value": "Return Value",
}

export function ExecutionSection({ nums, n }) {
    const steps = getSteps([...demo.nums], demo.n);
    const input = `[${demo.nums.join(", ")}]`;
    const returnValue = `[${steps[steps.length - 1].returnValue}]`;
    return (
        <>
        <Input input={input} />
        <StepsTitle />
        <ShuffleArraySteps steps={steps} />
        <Return returnValue={returnValue} />
        </>
    )
}

function ShuffleArraySteps({ steps }) {
    return (
        <StepTimeline
            steps={steps}
            renderStep={(step, stepNumber) => (
                <ShuffleArrayStepCard stepNumber={stepNumber} step={step} />
            )}
        />
    )
}

function ShuffleArrayStepCard({ stepNumber, step }) {
    const cardContent = getStepCardContent(step)
    const numsHighlight = getHighlightNums(step)
    const ansHighlight = getHighlightAns(step)
    return (
        <StepFrame
            stepNumber={stepNumber}
            title={cardContent.title}
            description={cardContent.description}
            >
                <ShowArray arr={step.nums} highlight={numsHighlight} /><br /><br />
                <ShowArray arr={step.ans} highlight={ansHighlight} />
                <Description step={step} />
            </StepFrame>
    )
}

function Description({ step }) {
    const current = step.currentIndex
    const value = step.nums[current]

    return (
        <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
            {current  !== undefined && <CodeBlock code={`index = ${current} (${value})`} />}
        </div>
    )
}

function getHighlightNums(step) {
    const highlight = new Map()

    if (step.action === "iteration-start" && step.currentIndex !== undefined && step.currentIndex !== null) {
        highlight.set(step.currentIndex, "bg-amber-800")
    }
    if (step.action === "add-element-to-ans" && step.sourceIndex !== undefined && step.sourceIndex !== null) {
        highlight.set(step.sourceIndex, "bg-amber-500")
    }
    return highlight
}
function getHighlightAns(step) {
    const highlight = new Map()
    if (step.action === "add-element-to-ans" && step.targetIndex !== undefined ) {
        highlight.set(step.targetIndex, "bg-emerald-500")
    }
    return highlight
}

function getStepCardContent(step) {
    return resolveStepCardContent(step, STEP_TITLES)
}
