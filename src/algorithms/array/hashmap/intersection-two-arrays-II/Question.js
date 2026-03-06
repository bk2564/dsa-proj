import { CodeBlock } from "../../../../components/common/Code";

export function Question() {
  return (
    <>
      <p>
        Given two integer arrays <CodeBlock code="nums1" /> and
        <CodeBlock code="nums2" />, return an{" "}
        <i>array of their intersection</i>
      </p>
      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Rules
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          <li>
            Each element in the result must appear{" "}
            <i>as many times as it appears in both arrays</i>.
          </li>
          <li>
            You may return the answer in <i>any order</i>.
          </li>
        </ul>
      </div>
      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Examples
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          <li>
            <CodeBlock code="nums1 = [1,2,2,1]" />,
            <CodeBlock code="nums2 = [2,2]" />
            returns <CodeBlock code="[2,2]" />.
          </li>
          <li>
            <CodeBlock code="nums1 = [4,9,5]" />,
            <CodeBlock code="nums2 = [4,9]" />
            returns <CodeBlock code="[4,9]" />. <CodeBlock code="[9,4]" /> <i>is also correct.</i>
          </li>
        </ul>
      </div>
    </>
  );
}
