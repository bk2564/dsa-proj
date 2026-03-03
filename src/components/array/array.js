export function ArrayExecutionSection({ title, subtitle, steps, highlight, Description }) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <code className="text-sm text-gray-400 mb-4">{subtitle}</code>
      <div className="space-y-5">
        {steps.map((step, index) => (
          <ArrayStepCard
            key={index}
            stepNumber={index + 1}
            step={step}
            highlight={highlight[index]}
            Description={Description}
          />
        ))}
      </div>
    </section>
  );
}

function ArrayStepCard({ stepNumber, step, highlight, Description }) {
  return (
    <div className="bg-gray-900 rounded-xl p-4">
      <p className="text-sm mb-3 text-gray-300">
        Step {stepNumber}: {step.text}
      </p>
        <ShowArray arr={step.array} highlight={highlight} />
        <Description step={step} />
    </div>
  );
}


export function ShowArray({arr, highlight}) {
  return (
    <div className="flex flex-wrap gap-4 my-4">
      {arr.map((item, index) => {
        const color = highlight.get(index) || "";
        return <Square key={`${index}-${item}`} color={color} value={item} />;
      })}
    </div>
  );
}


function Square({ value, color }) {
  return (
    <div
      className={`w-8 h-8 flex items-center justify-center 
        text-xl font-bold ${color} border-2 border-whiter`}
    >
      {value}
    </div>
  );
}
