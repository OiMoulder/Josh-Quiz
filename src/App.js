import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import { Confirm } from "./Steps/Confirm";
import { GeneralKnowledge } from "./Steps/GeneralKnowledge";
import "./styles.scss";

export const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<GeneralKnowledge />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};
