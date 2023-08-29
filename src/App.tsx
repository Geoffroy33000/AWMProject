import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Simulator } from "./Modules";
import { Navbar } from "./Components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/*<Route path="/" element={"toto"} />*/}
        <Route path={"/creermontre"} element={<Simulator />} />
        {/*<Route path="/realisations" element={"toto"} />
          <Route path="/contact" element={"toto"} />*/}
      </Routes>
    </div>
  );
}

export default App;
