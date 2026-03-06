import { CodeBlock } from "../../../../components/common/Code";

export function Question() {
  return (
    <>
      <p>
        You receive an array <CodeBlock code="nums" /> with unique values that
        was originally sorted in ascending order.
      </p>
      <p>
        Before it reaches your function, the array may have been rotated to the
        left at some unknown pivot index <CodeBlock code="k" /> where
        <CodeBlock code="1 <= k < nums.length" />.
      </p>
      <p>
        After rotation, the shape is similar to
        <CodeBlock code="[nums[k], ..., nums[n-1], nums[0], ..., nums[k-1]]" />.
      </p>
      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Task
        </p>
        <p>
          Given rotated <CodeBlock code="nums" /> and a
          <CodeBlock code="target" />, return the index of the target if found,
          otherwise return <CodeBlock code="-1" />.
        </p>
      </div>
      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Constraint
        </p>
        <p>
          The algorithm must run in <CodeBlock code="O(log n)" /> time.
        </p>
      </div>
    </>
  );
}
