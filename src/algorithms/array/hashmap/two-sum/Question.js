import { CodeBlock } from "../../../../components/common/Code";

export function Question() {
  return (
    <>
      <p>
        Given an integer array <CodeBlock code="nums" /> and an integer
        <CodeBlock code="target" />, return the indices of the two numbers
        whose sum equals <CodeBlock code="target" />.
      </p>
      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Rules
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          <li>Each input has exactly one valid answer.</li>
          <li>You cannot use the same element twice.</li>
          <li>Return the pair of indices in any order.</li>
        </ul>
      </div>
      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Example
        </p>
        <p>
          <CodeBlock code="nums = [2,7,11,15]" />,<CodeBlock code="target = 9" />
          returns <CodeBlock code="[0, 1]" />.
        </p>
      </div>
    </>
  );
}