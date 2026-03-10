import { CodeBlock } from "../../../../components/common/Code";

export function Question() {
  return (
    <>
      <p>
        Given an array of integers <CodeBlock code="nums" />, return <CodeBlock code="true" /> if
        any value appears <strong>at least twice</strong> in the array, and{" "}
        <CodeBlock code="false" /> if every element is distinct.
      </p>

      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Examples
        </p>
        <ul className="list-disc space-y-7 pl-5 text-slate-300">
          <li>
            <strong>Input: </strong><CodeBlock code="nums = [1,2,3,1]" />
            <strong>Output: </strong><CodeBlock code="true" />
              {" "}
              <br></br>
            <strong>
              Explanation:
            </strong>{" "}
            The element <CodeBlock code="1" /> occurs at the indices
            <CodeBlock code="0" /> and <CodeBlock code="3" />.
          </li>
          <li>
            <strong>Input: </strong><CodeBlock code="nums = [1,2,3,4]" />
            <strong>Output: </strong><CodeBlock code="false" />
              {" "}
              <br></br>
            <strong>
              Explanation:
            </strong>{" "}
            All elements are distinct.
          </li>
        </ul>
      </div>
    </>
  );
}
