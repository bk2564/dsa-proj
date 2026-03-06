import { CodeBlock } from "../../../../components/common/Code";
import { QuestionMatrix } from "../../../../components/common/Question";

export function Question() {
    return (
        <>
            <p>You are given an <CodeBlock code="n x n" /> 2D <CodeBlock code="matrix" /> representing an image.
            Rotate the image by <strong>90</strong> degrees (clockwise).</p>
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Rules
                </p>
                <ul className="list-disc space-y-1 pl-5 text-slate-300">
                    <li>You have to rotate the image <strong className="text-blue-500">in-place</strong>, 
                    which means you have to modify the input 2D matrix directly.</li>
                    <li><strong>DO NOT</strong> allocate another 2D matrix and do the rotation.</li>
                </ul>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    Examples
                </p>
                <ul className="list-disc space-y-1 pl-5 text-slate-300">
                    <li>
                        <QuestionMatrix matrix={[[1, 2, 3], [4, 5, 6], [7, 8, 9]]} /> 
                        <span className="text-sm text-slate-400 mx-4"> Rotating the image by 90 degrees clockwise. </span>
                        <QuestionMatrix matrix={[[7, 4, 1], [8, 5, 2], [9, 6, 3]]} />
                    </li>
                    <br />
                    <li>
                        <QuestionMatrix matrix={[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]} /> 
                        <span className="text-sm text-slate-400 mx-4"> Rotating the image by 90 degrees clockwise. </span>
                        <QuestionMatrix matrix={[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]} />
                    </li>
                </ul>                
            </div>
        </>
    )
}