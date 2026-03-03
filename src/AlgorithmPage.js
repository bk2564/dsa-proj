import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import algorithmsData from "./content/api.json";
import Header from "./components/common/Header";
import Explanation from "./components/common/Explanation";
import Question from "./components/common/Question";
import Code from "./components/common/Code";
import { TwoSumExecutionSection, TwoSumQuestion } from "./algorithms/array/hashmap/two-sum/TwoSum";
import { Lc0033ExecutionSection, Lc0033Question } from "./algorithms/array/binary-search/search-rotated-sorted-array";

const algorithms = algorithmsData.algorithms || [];
const algorithmComponents = {
  "binary-search": { question: Lc0033Question, execution: Lc0033ExecutionSection },
  "two-sum": {question: TwoSumQuestion, execution: TwoSumExecutionSection}
};

export default function AlgorithmPage() {
  const { id, route } = useParams();
  const [loadedCode, setLoadedCode] = useState("");
  const algorithmId = Number(id);
  const algorithm = algorithms.find(
    (item) => item.id === algorithmId && item.route === route
  );
  const selectedAlgorithm = algorithm ? algorithmComponents[algorithm.route] : null;
  const AlgorithmComponent = selectedAlgorithm ? selectedAlgorithm.execution : null;
  const QuestionComponent = selectedAlgorithm ? selectedAlgorithm.question : null;


  useEffect(() => {
    let isMounted = true;

    async function loadCodeSnippet() {
      if (!algorithm) {
        if (isMounted) setLoadedCode("");
        return;
      }

      if (!algorithm.codePath) {
        if (isMounted) setLoadedCode(algorithm.code || "");
        return;
      }

      try {
        const response = await fetch(algorithm.codePath);
        if (!response.ok) {
          throw new Error("Failed to fetch code snippet");
        }
        const text = await response.text();
        if (isMounted) setLoadedCode(text);
      } catch {
        if (isMounted) setLoadedCode(algorithm.code || "");
      }
    }

    loadCodeSnippet();

    return () => {
      isMounted = false;
    };
  }, [algorithm]);

  if (!algorithm || !AlgorithmComponent) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Header
          title="Algorithm not found"
          subtitle="This route does not match an available algorithm."
          backTo="/"
        />
        <div className="mx-auto w-full max-w-6xl p-10">
          <Link to="/" className="text-blue-400 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header
        title={algorithm.number + ". " + algorithm.name}
        subtitle={`Category: ${algorithm.category}`}
        backTo="/"
      />

      <div className="mx-auto w-full max-w-6xl px-6 pt-6 sm:px-10">
        <Question key={algorithm.route} difficulty={algorithm.difficulty}>
          <QuestionComponent />
        </Question>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-6 pb-10 pt-6 sm:px-10 lg:flex-row">
        <div className="w-full min-w-0 flex-1">
          <AlgorithmComponent />
        </div>
        
        <div className="flex w-full flex-col gap-6 lg:sticky lg:top-24 lg:w-[600px] lg:shrink-0">
          <Code text={loadedCode} />
          <Explanation text={algorithm.explanation} />
        </div>
      </div>
    </div>
  );
}


