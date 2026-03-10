import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AlgorithmPage from "./AlgorithmPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/algorithm/:route/:id" element={<AlgorithmPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
