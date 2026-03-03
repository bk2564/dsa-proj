import { ShowArray } from "../../components/array/array.js"
import { StepCard } from "../../components/common/StepCard.js";
import StepTitle from "../../components/common/StepTitle.js";
import { HashMapExecutionSection, ShowHashMap } from "../../components/hashmap/hashmap.js"
import { getTwoSumSteps } from "./two-sum-steps.js";

export const twoSumDemo = {
    array: [2, 7, 11, 15],
    target: 18
}


export function TwoSumExecutionSection() {
    const steps = getTwoSumSteps(twoSumDemo.array, twoSumDemo.target)
    const subtitle = `Array: [${twoSumDemo.array.join(", ")}], target: ${twoSumDemo.target}`;
    return (
        <>
        <StepTitle subtitle={subtitle} />
        <TwoSumSteps steps={steps} Description={Description} />
        </>
    )
}

function TwoSumSteps({ steps, Description }) {
    return (
        <section>
            <div className="space-y-5">
                {steps.map((step, index) => (
                    <TwoSumStepCard
                        key={index}
                        stepNumber={index + 1}
                        step={step}
                        highlight={getHighlight(step)}
                        Description={Description}
                    />
                ))}
            </div>
        </section>
    )
}

function getHighlight(step) {
    const highlight = new Map()
    const index = step.hashmap.get(step.complemento)
    
    if(index >= 0 && index < step.array.length && step.found){
        highlight.set(step.complemento, "bg-green-500")
    }

    return highlight
}

function arrayHighlight(step) {
    return new Map()
}

function TwoSumStepCard({ stepNumber, step, highlight, Description }) {
    return (
        <div className="bg-gray-900 rounded-xl p-4 border border-slate-700 panel">
            <StepCard stepNumber={stepNumber} text={step.text} />
            <ShowHashMap hashmap={step.hashmap} highlight={highlight} />
            <ShowArray arr={step.array} highlight={highlight} />
            <Description step={step} />
        </div>
    )
}

function Description({step}) {
    return (
        <p className="mt-3 text-xs text-gray-400">
        <code>complemento = {step.complemento} | value = {step.value} | index = {step.index}</code>
      </p>
    )
}