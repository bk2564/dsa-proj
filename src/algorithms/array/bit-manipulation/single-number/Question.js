import { CodeBlock } from "../../../../components/common/Code";

export function Question(){
    return (
        <>
        <p>Given a <strong>non-empty</strong> array of integers <CodeBlock code="nums" />,
        every element appears <i>twice</i> except for one. Find that single one.
        </p>
        <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Constraints
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          <li>The solution must run in <CodeBlock code="O(n)" /> time. </li>
          <li>The solution must run in <CodeBlock code="O(1)" /> extra space.</li>
        </ul>
        </div>
    </>
    )
    
}