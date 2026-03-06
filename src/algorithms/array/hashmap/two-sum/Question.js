import { QuestionCode } from "../../../../components/common/Question";

export function Question() {
  return (
    <>
      <p>
        Given an integer array <QuestionCode code="nums" /> and an integer
        <QuestionCode code="target" />, return the indices of the two numbers
        whose sum equals <QuestionCode code="target" />.
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
          <QuestionCode code="nums = [2,7,11,15]" />,<QuestionCode code="target = 9" />
          returns <QuestionCode code="[0, 1]" />.
        </p>
      </div>
    </>
  );
}