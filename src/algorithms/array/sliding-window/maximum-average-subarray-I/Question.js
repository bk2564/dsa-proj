import { CodeBlock } from "../../../../components/common/Code";

export function Question() {
    return (
        <>
            <p>
                You are given an integer array <CodeBlock code="nums" /> consisting of{" "}
                <CodeBlock code="n" /> elements, and an integer <CodeBlock code="k" />.
            </p>
            <p>
                Find a contiguous subarray whose <strong>length is equal to</strong>{" "}
                <CodeBlock code="k" />
                that has the maximum average value and return <i>this value</i>.
            </p>
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Rules
                </p>
                <ul className="list-disc space-y-1 pl-5 text-slate-300">
                    <li>
                        Any answer with a calculation error less than
                        <code
                            className={`mx-1 inline-block rounded-md border border-slate-600/70 bg-slate-800/90 px-2 py-0.5 font-mono text-xs text-cyan-200 shadow-sm`}
                        >
                            10<sup>-5</sup> 
                        </code>
                            will be accepted.
                    </li>
                </ul>
            </div>
        </>
    );
}
