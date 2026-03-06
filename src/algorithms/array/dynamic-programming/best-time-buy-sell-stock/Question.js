import { QuestionCode } from "../../../../components/common/Question";

export function Question() {
  return (
    <>
      <p>
        Given an integer array <QuestionCode code="prices" /> where
        <QuestionCode code="prices[i]" />, is a price of a given stock on the{" "}
        <code className="mx-1 inline-block rounded-md border border-slate-600/70 bg-slate-800/90 px-2 py-0.5 font-mono text-xs text-cyan-200 shadow-sm">
          i<sup>th</sup>
        </code>
        day
      </p>
      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Rules
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          <li>On each day, you may decide to buy and/or sell the stock..</li>
          <li>
            You can only hold <strong>at most one</strong> share of the stock at
            any time.
          </li>
          <li>
            You can sell and buy the stock multiple times on the{" "}
            <strong>same day</strong>, ensuring you never hold more than one
            share of the stock.
          </li>
        </ul>
      </div>
      <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          Examples
        </p>
        <ul className="list-disc space-y-7 pl-5 text-slate-300">
          <li>
            <QuestionCode code="prices = [7, 1, 5, 3, 6, 4]" />, returns{" "}
            <QuestionCode code="7" />.
            <strong>
              {" "}
              <br></br>Explanation:
            </strong>{" "}
            Buy on day 2 <QuestionCode code="price = 1" />
            and sell on day 3 <QuestionCode code="price = 5" /> profit{" "}
            <QuestionCode code="5 - 1 = 4" />, buy on day 4{" "}
            <QuestionCode code="price = 3" />
            and sell on day 5 <QuestionCode code="price = 6" />, profit{" "}
            <QuestionCode code="6 - 3 = 3" />. Total profit is{" "}
            <QuestionCode code="4 + 3 = 7" />.
          </li>
          <li>
            <QuestionCode code="prices = [1, 2, 3, 4, 5]" />, returns{" "}
            <QuestionCode code="4" />.
            <strong>
              {" "}
              <br></br>Explanation:
            </strong>{" "}
            Buy on day 1 <QuestionCode code="price = 1" />
            and sell on day 5 <QuestionCode code="price = 5" />, profit{" "}
            <QuestionCode code="5 - 1 = 4" />. Total profit is{" "}
            <QuestionCode code="4" />.
          </li>
        </ul>
      </div>
    </>
  );
}
