import { CodeBlock } from "../../../../components/common/Code";

export function Question(){
    return (
        <>
        <p>
            Given an integer array <CodeBlock code="nums" /> sorted in 
            <strong> non-descending order</strong>, remove the duplicates 
            <span className="font-bold text-blue-500"> in-place</span> such that each unique element appears only <strong>once</strong>.
            The <strong>relative order</strong> of the elements should be kept the <strong>same</strong>.
        </p>
        <p>
            Consider the number of <i>unique elements</i> in <CodeBlock code="nums" /> to be <CodeBlock code="k"/>. 
            After removing duplicates, return the number of unique elements <CodeBlock code="k" />.
        </p>
        <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Rules
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          <li>
            The first <CodeBlock code="k" /> elements of <CodeBlock code="nums" /> should contain
            the unique numbers in <strong>sorted order</strong>. The remaining elements beyond index 
            <CodeBlock code="k - 1" /> can be ignored..
          </li>
        </ul>
      </div>
      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Examples
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          <li>
            <strong>Input: </strong><CodeBlock code="nums = [1,1,2]" />,
            <strong>Output: </strong><CodeBlock code="2" />, <CodeBlock code="nums = [1,2,_]" />
            <strong>Explanation: </strong>Your function should return <CodeBlock code="k = 2" />, 
            with the first two elements of nums being <CodeBlock code="1" /> and <CodeBlock code="2" />
            respectively. <br />
            It doesn't matter what you leave beyond the returned <CodeBlock code="k" /> , hence they are underscores.
          </li>
          <li>
            <strong>Input: </strong><CodeBlock code="nums = [0,0,1,1,1,2,2,3,3,4]" />,
            <strong>Output: </strong><CodeBlock code="5" />, <CodeBlock code="nums = [0,1,2,3,4,_,_,_,_,_]" />
            <strong>Explanation: </strong>Your function should return <CodeBlock code="k = 5" />, 
            with the first five elements of nums being  
            <CodeBlock code="0" />, <CodeBlock code="1" />, <CodeBlock code="2" />, <CodeBlock code="3" />, and <CodeBlock code="4" />
            respectively. <br />
            It doesn't matter what you leave beyond the returned <CodeBlock code="k" /> , hence they are underscores.
          </li>
        </ul>
      </div>
        </>
    )
}