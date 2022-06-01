import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Invator from "./components/invator";
import Settings from "./components/settings";
import Generate from "./components/generate";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Invator />} />
          <Route path="settings" element={<Settings />} />
          <Route
            path="settings/weighting"
            element={<Settings show="traits" />}
          />
          <Route path="settings/output" element={<Settings show="render" />} />
          <Route path="generate" element={<Generate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
