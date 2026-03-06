import { StepCard } from "./StepCard";

export default function StepFrame({ stepNumber, title, description, badge, children }) {
  return (
    <div className="relative rounded-xl border border-slate-700 bg-gray-900 p-4 panel">
      {badge}
      <StepCard stepNumber={stepNumber} title={title} description={description} />
      {children}
    </div>
  );
}
