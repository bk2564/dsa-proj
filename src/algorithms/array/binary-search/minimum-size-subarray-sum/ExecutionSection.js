import { ShowArray, WindowBadge } from "../../../../components/array/array"
import { CodeBlock } from "../../../../components/common/Code"
import Input from "../../../../components/common/Input"
import Return from "../../../../components/common/Return"
import StepFrame from "../../../../components/common/StepFrame"
import StepsTitle from "../../../../components/common/StepsTitle"
import StepTimeline from "../../../../components/common/StepTimeline"
import { resolveStepCardContent } from "../../../../components/common/stepTitleResolver"
import { getSteps } from "./steps"

const demo = {
    nums: [1,2,4,2,1,3,1,2,2,1,1,2],
    target: 8
}

const STEP_TITLES = {
    "start": "Start",
    "left-update": "Update left index",
    "sum-increase": "Increase sum",
    "sum-greater-than-target": "Sum greater than target",
    "sum-decrease": "Decrease sum",
    "min-length-update": "Update minimum length",
    "iteration-end": "Iteration end",
    "end": "End",
}

export function ExecutionSection() {
    const steps = getSteps(demo.target, [...demo.nums])
    const input = ` [${demo.nums.join(", ")}]`
    const returnValue = `${steps[steps.length - 1].returnValue}`

    return (
        <>
            <Input input={input} />
            <StepsTitle />
            <MinimumSizeSubarraySteps steps={steps} />
            <Return returnValue={returnValue} />
        </>
    )
}

function getWindow(step) {
    const start = Math.max(0, Math.min(step.left, step.nums.length - 1));
    const end = Math.max(start, Math.min(step.right, step.nums.length - 1));
    return step.nums.slice(start, end + 1).join(", ")
}
function MinimumSizeSubarraySteps({ steps }) {
    return (
        <StepTimeline 
            steps={steps}
            renderStep={(step, stepNumber) => (
                <MinimumSizeSubarrayStepCard stepNumber={stepNumber} step={step} />
                )}
            />
    )
}

function MinimumSizeSubarrayStepCard({ stepNumber, step }) {
    const cardContent = getStepCardContent(step)
    const windowValues = getWindow(step)
    return (
        <StepFrame
            stepNumber={stepNumber}
            title={cardContent.title}
            description={cardContent.description}
            badge={<WindowBadge windowValues={windowValues} />}
        >
            <ShowArray arr={step.nums} highlight={getHighlightArray(step)} />
            <Description step={step} />
        </StepFrame>
    )
}

function Description({ step }) {
    const leftValue = step.nums[step.left]
    const rightValue = step.nums[step.right]

    return (
    <div className="mt-3 flex flex-wrap items-center gap-1 text-xs text-gray-400">
      {step.left && <CodeBlock code={`left = ${step.left}`} /> }  
      {step.rigth && <CodeBlock code={`right = ${step.right}`} />}  
      {leftValue && <CodeBlock code={`nums[left] = ${leftValue}`} />}  
      {rightValue && <CodeBlock code={`nums[right] = ${rightValue}`} />}  
    </div>
    )
}

function getHighlightArray(step) {
    const highlight = new Map()
    const left = step.left
    const right = step.right

    if(left >= 0 && left < step.nums.length){
        highlight.set(left, "bg-blue-500")
    }
    if(right >= 0 && right < step.nums.length){
        highlight.set(right, "bg-amber-500")
    }
    return highlight
}
function getStepCardContent(step){
    return resolveStepCardContent(step, STEP_TITLES)
}