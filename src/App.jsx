import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Registeration from "./Pages/Registeration";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/registeration" element={<Registeration />}></Route>
      </Routes>
    </Router>
  );
}
