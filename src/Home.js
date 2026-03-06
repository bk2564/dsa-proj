import { Link } from "react-router-dom";
import Header from "./components/common/Header";
import { algorithms } from "./content/catalog";
import { DIFFICULTY_COLOR } from "./content/difficulty";

export default function Home() {
  const difficultyColor = DIFFICULTY_COLOR;

  return (
    <>
      <Header
        title="My Algorithms"
        subtitle="Select an algorithm to see its execution step-by-step and explanation."
      />
      <div className="min-h-screen bg-gray-900 p-10 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {algorithms.map((algo) => (
            <Link
              key={`${algo.route}-${algo.id}`}
              to={`/algorithm/${algo.route}/${algo.id}`}
              className="rounded-2xl border border-slate-700 bg-slate-800/80 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800"
            >
              <div className="mb-2 flex items-start justify-between gap-3">
                <h2 className="text-xl font-semibold">{algo.number + ". " + algo.name}</h2>
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${
                    difficultyColor[algo.difficulty] || "border-slate-500/40 bg-slate-700/40 text-slate-100"
                  }`}
                >
                  {algo.difficulty?.toUpperCase() || "UNKNOWN"}
                </span>
              </div>
              <p className="text-sm text-slate-300">{algo.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
