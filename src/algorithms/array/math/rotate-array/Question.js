import { CodeBlock } from "../../../../components/common/Code";

export function Question(){
    return (
        <>
        <p>Given an integer array <CodeBlock code="nums" />, rotate the array to the <strong>right</strong>
        by <CodeBlock code="k" /> steps, where <CodeBlock code="k" /> is non-negative.</p>
          <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Examples
                </p>
                <ul className="list-disc space-y-1 pl-5 text-slate-300">
                  <li>
                    <strong>Input: </strong><CodeBlock code=" nums = [1,2,3,4,5,6,7]" />, <CodeBlock code="k = 3" />
                    <strong>Output: </strong><CodeBlock code="[5,6,7,1,2,3,4]" />
                    <strong>Explanation: </strong><br />
                    <p>rotate 1 step to the right: <CodeBlock code="[7,1,2,3,4,5,6]" /></p>
                    <p>rotate 2 steps to the right: <CodeBlock code="[6,7,1,2,3,4,5]" /></p>
                    <p>rotate 3 steps to the right: <CodeBlock code="[5,6,7,1,2,3,4]" /></p>
                  </li>
                  <li>
                    <strong>Input: </strong><CodeBlock code=" nums = [-1,-100,3,99]" />, <CodeBlock code="k = 2" />
                    <strong>Output: </strong><CodeBlock code="[3,99,-1,-100]" />
                    <strong>Explanation: </strong><br />
                    <p>rotate 1 step to the right: <CodeBlock code="[99,-1,-100,3]" /></p>
                    <p>rotate 2 steps to the right: <CodeBlock code="[3,99,-1,-100]" /></p>
                  </li>
                </ul>
              </div>
        </>

    )
}