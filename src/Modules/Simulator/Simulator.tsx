import { useContext } from "react";

import {
  SimulatorContext,
  SimulatorType,
} from "../../Context/SimulatorContext";

import { Selector } from "../../Components";

import {
  AiguillesMock,
  BoitiersMock,
  BraceletsMock,
  CouronneMock,
  FondsMock,
} from "../../Mocks";

import "./Simulator.css";

function Simulator() {
  const { boitier, fond, couronne, bracelet, aiguille } =
    useContext<SimulatorType>(SimulatorContext);

  function renderAiguilles() {
    return <img src={`/img/${aiguille}`} alt={aiguille} />;
  }

  function renderBoitiers() {
    return <img src={`/img/${boitier}`} alt={boitier} />;
  }

  function renderBracelets() {
    return <img src={`/img/${bracelet}`} alt={bracelet} />;
  }

  function renderCouronne() {
    return <img src={`/img/${couronne}`} alt={couronne} />;
  }

  function renderFonds() {
    return <img src={`/img/${fond}`} alt={fond} />;
  }
  console.log(SimulatorContext);
  return (
    <div className="simulatorContainer">
      <div className="simulatorPreviewContainer">
        <div className="simulatorPreview boitierPreview">
          {renderBoitiers()}
        </div>
        <div className="simulatorPreview aiguillePreview">
          {renderAiguilles()}
        </div>
        <div className="simulatorPreview braceletPreview">
          {renderBracelets()}
        </div>
        <div className="simulatorPreview couronnePreview">
          {renderCouronne()}
        </div>
        <div className="simulatorPreview fondPreview">{renderFonds()}</div>
      </div>
      <div className="simulatorSelectorContainer">
        <Selector name="Boitiers" type="boitier" />
        <Selector name="Fonds" type="fond" />
        <Selector name="Couronnes" type="couronne" />
        <Selector name="Bracelets" type="bracelet" />
        <Selector name="Aiguilles" type="aiguilles" />
      </div>
    </div>
  );
}

export default Simulator;
