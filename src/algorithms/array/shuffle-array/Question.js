import { CodeBlock } from "../../../components/common/Code";

export function Question() {
    return (
        <>
            <p>
                Given the array <CodeBlock code="nums" /> consisting of <CodeBlock code="2n" />{" "}
                elements in the form of{" "}
                <code
                    className={`mx-1 inline-block rounded-md border border-slate-600/70 
                        bg-slate-800/90 px-2 py-0.5 font-mono text-xs text-cyan-200 shadow-sm`}
                >
                    x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, ..., x<sub>n</sub>, y<sub>2</sub>
                    , y<sub>3</sub>, y<sub>n</sub>
                </code>
            </p>
            <p>
                <i>
                    Return the array in the form of
                    <code
                        className={`mx-1 inline-block rounded-md border border-slate-600/70 
                            bg-slate-800/90 px-2 py-0.5 font-mono text-xs text-cyan-200 shadow-sm`}
                    >
                        x<sub>1</sub>, y<sub>1</sub>, x<sub>2</sub>, y<sub>2</sub>, x<sub>3</sub>,
                         ..., x<sub>n</sub>, y<sub>n</sub>
                    </code>
                </i>
            </p>
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Examples
                </p>
                <ul className="list-disc space-y-3 pl-5 text-slate-300">
                    <li>
                        <strong>Input: </strong> <CodeBlock code="nums = [2,5,1,3,4,7]" />,
                        <CodeBlock code="n = 3" />
                        <br />
                        <strong>Output: </strong> <CodeBlock code="[2,3,5,4,1,7]" />
                        <br />
                        <strong>Explanation: </strong> Since{" "}
                        <code
                            className={`mx-1 inline-block rounded-md border border-slate-600/70 
                                bg-slate-800/90 px-2 py-0.5 font-mono text-xs text-cyan-200 shadow-sm`}
                        >
                            x<sub>1</sub> = 2, 
                            x<sub>2</sub> = 5, 
                            x<sub>3</sub> = 1, 
                            y<sub>1</sub> = 3, 
                            y<sub>2</sub>= 4, 
                            y<sub>3</sub> = 7
                        </code>
                        then the answer is <CodeBlock code="[2,3,5,4,1,7]" />
                    </li>
                    <li>
                        <strong>Input: </strong> <CodeBlock code="nums = [1,2,3,4,4,3,2,1]" />, 
                        <CodeBlock code="n = 4" />
                        <br />
                        <strong>Output: </strong> <CodeBlock code="[1,4,2,3,3,2,4,1]" />
                        <br />
                    </li>
                    <li>
                        <strong>Input: </strong> <CodeBlock code="nums = [1,1,2,2]" />, 
                        <CodeBlock code="n = 2" />
                        <br />
                        <strong>Output: </strong> <CodeBlock code="[1,2,1,2]" />
                        <br />
                    </li>
                </ul>
            </div>
        </>
    );
}
