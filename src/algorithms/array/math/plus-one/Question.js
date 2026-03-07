import { CodeBlock } from "../../../../components/common/Code";

export function Question(){
    return (
        <>
        <p>You are given a <strong>large integer</strong> represented as a integer array <CodeBlock code="digits" />, 
        where each <CodeBlock code="digits[i]" /> is the  <code className="mx-1 inline-block rounded-md border border-slate-600/70 bg-slate-800/90 px-2 py-0.5 font-mono text-xs text-cyan-200 shadow-sm">
      i<sup>th</sup>
    </code> digit of the integer. The digits are ordered from most significant to least significant in left-to-right order.
    The integer does not contain any leading <CodeBlock code="0" />'s.
    </p> <br />
    <p>Increment the integer by one and return the result as an array <CodeBlock code="result" />.</p>
          <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Examples
                </p>
                <ul className="list-disc space-y-4 pl-5 text-slate-300">
                  <li>
                    <strong>Input: </strong><CodeBlock code="digits = [1,2,3]" /> <br />
                    <strong>Output: </strong><CodeBlock code="[1,2,4]" /><br />
                    <strong>Explanation: </strong><br />
                    <p>The array represents the integer 123. Incrementing it by 1 equals 124, hence the result is: 
                        <CodeBlock code="[1,2,4]" /></p>
                  </li>
                  <li>
                    <strong>Input: </strong><CodeBlock code="digits = [9]" /> <br />
                    <strong>Output: </strong><CodeBlock code="[1,0]" /><br />
                    <strong>Explanation: </strong><br />
                    <p>The array represents the integer 9. Incrementing it by 1 equals 10, hence the result is: 
                        <CodeBlock code="[1,0]" /></p>
                  </li>
                </ul>
              </div>
        </>

    )
}