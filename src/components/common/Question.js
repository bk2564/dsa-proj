export default function Question({ text }) {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Question</h2>
            <p className="text-sm text-gray-400 mb-4">{text}</p>
        </div>
    )
}