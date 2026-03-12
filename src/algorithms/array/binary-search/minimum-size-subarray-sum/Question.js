import { CodeBlock } from "../../../../components/common/Code";

export function Question() {
  return (
    <>
      <p>
        Given an array of positive integers <CodeBlock code="nums" />
        and a positive integer <CodeBlock code="target" />, return <i> 
          the <strong>minimum length</strong> of a{" "}
          <span className="text-blue font-bold">subarray</span>
          whose sum is greater than or equal to
        </i>{" "}
        <CodeBlock code="target" />. If there is no such subarray, return <CodeBlock code="0" />{" "}
        instead.
      </p>
      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Examples
        </p>
        <ul className="list-disc space-y-7 pl-5 text-slate-300">
          <li>
            <strong>Input: </strong><CodeBlock code="target = 7" />, <CodeBlock code="nums = [2,3,1,2,4,3]" />
            <br />
            <strong>Output: </strong><CodeBlock code="2" />
            <br />
            <strong>Explanation: </strong>The subarray <CodeBlock code="[4,3]" /> has the minimal length under the given constraint.
          </li>
          <li>
            <strong>Input: </strong><CodeBlock code="target = 4" />, <CodeBlock code="nums = [1,4,4]" />
            <br />
            <strong>Output: </strong><CodeBlock code="1" />
            <br />
          </li>
          <li>
            <strong>Input: </strong><CodeBlock code="target = 11" />, <CodeBlock code="nums = [1,1,1,1,1,1,1,1]" />
            <br />
            <strong>Output: </strong><CodeBlock code="0" />
            <br />
          </li>
        </ul>
      </div>
      
    </>
  );
}
