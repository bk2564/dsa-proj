import { Link } from "react-router-dom";
import algorithmsData from "./content/api.json";
import Header from "./components/common/Header";

const algorithms = algorithmsData.algorithms || [];

export default function Home() {
  return (
    <>
      <Header
        title="Meus Algoritmos"
        subtitle="Selecione um algoritmo para ver a execucao passo a passo."
      />
      <div className="min-h-screen bg-gray-900 p-10 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {algorithms.map((algo) => (
            <Link
              key={algo.id}
              to={`/algorithm/${algo.route}/${algo.id}`}
              className="rounded-2xl border border-slate-700 bg-slate-800/80 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:bg-slate-800"
            >
              <h2 className="mb-2 text-xl font-semibold">{algo.name}</h2>
              <p className="text-sm text-slate-300">{algo.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
