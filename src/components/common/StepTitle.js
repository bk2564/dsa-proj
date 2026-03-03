export default function StepTitle({ subtitle }) {
    return (
       <>
        <h2 className="text-xl font-semibold mb-3">Execution Steps</h2>
        <code className="text-sm text-gray-400 mb-4">{subtitle}</code>
       </>
    )
}