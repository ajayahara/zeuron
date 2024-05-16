import { Routes, Route } from "react-router-dom";
import { CardioLogy } from "../page/CardioLogy";
import { Analytics } from "../page/Analytics";
export const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<CardioLogy />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
};
