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
  function renderAiguilles() {
    return (
      <img
        src={`/img/${AiguillesMock[0].nom_image}`}
        alt={AiguillesMock[0].nom_aiguille}
      />
    );
  }

  function renderBoitiers() {
    return (
      <img
        src={`/img/${BoitiersMock[0].nom_image}`}
        alt={BoitiersMock[0].nom_boitier}
      />
    );
  }

  function renderBracelets() {
    return (
      <img
        src={`/img/${BraceletsMock[3].nom_image}`}
        alt={BraceletsMock[0].nom_bracelet}
      />
    );
  }

  function renderCouronne() {
    return (
      <img
        src={`/img/${CouronneMock[1].nom_image}`}
        alt={CouronneMock[0].nom_couronne}
      />
    );
  }

  function renderFonds() {
    return (
      <img src={`/img/${FondsMock[0].nom_image}`} alt={FondsMock[0].nom_fond} />
    );
  }
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
