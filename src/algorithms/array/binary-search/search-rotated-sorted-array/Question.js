import { QuestionCode } from "../../../../components/common/Question";

export function Question() {
  return (
    <>
      <p>
        You receive an array <QuestionCode code="nums" /> with unique values that
        was originally sorted in ascending order.
      </p>
      <p>
        Before it reaches your function, the array may have been rotated to the
        left at some unknown pivot index <QuestionCode code="k" /> where
        <QuestionCode code="1 <= k < nums.length" />.
      </p>
      <p>
        After rotation, the shape is similar to
        <QuestionCode code="[nums[k], ..., nums[n-1], nums[0], ..., nums[k-1]]" />.
      </p>
      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Task
        </p>
        <p>
          Given rotated <QuestionCode code="nums" /> and a
          <QuestionCode code="target" />, return the index of the target if found,
          otherwise return <QuestionCode code="-1" />.
        </p>
      </div>
      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Constraint
        </p>
        <p>
          The algorithm must run in <QuestionCode code="O(log n)" /> time.
        </p>
      </div>
    </>
  );
}
