export default function Target({target}){
    return (
        <div className="flex flex-col gap-4 p-4">
        <p className="text-lg font-semibold justify-center">Target: </p>
        <div className=" w-full flex gap-2 px-4 py-2 border border-slate-700 rounded-xl 
        items-center justify-center">
            <code className="w-full text-center text-[clamp(1.2rem,1.6vw,2.5rem)] text-size-md 
                text-white font-semibold tracking-[0.07em]">
                {target}</code>
        </div>
        </div>
    )
}