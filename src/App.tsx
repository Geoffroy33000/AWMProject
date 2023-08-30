import { Route, Routes } from "react-router-dom";

import { Simulator, HomePage, Realisations, Contact } from "./Modules";
import { Navbar } from "./Components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creermontre" element={<Simulator />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
