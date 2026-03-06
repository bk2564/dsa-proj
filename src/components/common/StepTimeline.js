export default function StepTimeline({ steps, renderStep, className = "space-y-5", getStepKey }) {
  return (
    <section>
      <div className={className}>
        {(steps ?? []).map((step, index) => {
          const stepNumber = index + 1;
          const key = getStepKey ? getStepKey(step, index) : index;

          return <div key={key}>{renderStep(step, stepNumber, index)}</div>;
        })}
      </div>
    </section>
  );
}
