import { CodeBlock } from "../../../../components/common/Code";

export function Question() {
    return (
        <>
            <p>
                Given a string <CodeBlock code="s" />, find the length of the
                <strong>
                    longest <span className="text-blue">substring</span>
                </strong>
                without duplicate characters.
            </p>
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Examples
            </p>
            <ul className="list-disc space-y-3 pl-5 text-slate-300">
                <li>
                    <strong>Input: </strong> <CodeBlock code="s = abcabcbb" /><br />
                    <strong>Output: </strong> <CodeBlock code="3" /><br />
                    <strong>Explanation: </strong> The answer is <CodeBlock code="abc" />, 
                    with the length of <CodeBlock code="3" />. Note that 
                    <CodeBlock code="bca" /> and <CodeBlock code="cab" /> are also correct answers.
                </li>
                <li>
                    <strong>Input: </strong> <CodeBlock code="s = bbbbb" /><br />
                    <strong>Output: </strong> <CodeBlock code="1" /><br />
                    <strong>Explanation: </strong> The answer is <CodeBlock code="b" />, 
                    with the length of <CodeBlock code="1" />.
                </li>
                <li>
                    <strong>Input: </strong> <CodeBlock code="s = pwwkew" /><br />
                    <strong>Output: </strong> <CodeBlock code="3" /><br />
                    <strong>Explanation: </strong> The answer is <CodeBlock code="wke" />, 
                    with the length of <CodeBlock code="3" />. Notice that the answer must be a substring,
                    <CodeBlock code="pwke" /> is a subsequence and not a substring.
                </li>
            </ul>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                Constraints
            </p>
            <ul className="list-disc space-y-1 pl-5 text-slate-300">
                <li>
                    <CodeBlock code="s" /> consists of English letters, digits, symbols, and spaces.
                </li>
            </ul>
            </div>
        </>
    );
}
