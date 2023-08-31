//import { useContext } from "react";
import { useState } from "react";
/*import {
  SimulatorContext,
  SimulatorType,
} from "../../Context/SimulatorContext";*/
import { initialState } from "../../Context/SimulatorContext";
//import { Selector } from "../../Components";

import {
  AiguillesMock,
  BoitiersMock,
  BraceletsMock,
  CouronneMock,
  FondsMock,
} from "../../Mocks";

import "./Simulator.css";

function Simulator() {
  const [boitier, setBoitier] = useState<string>(initialState.boitier);
  const [fond, setFond] = useState<string>(initialState.fond);
  const [couronne, setCouronne] = useState<string>(initialState.couronne);
  const [bracelet, setBracelet] = useState<string>(initialState.bracelet);
  const [aiguille, setAiguille] = useState<string>(initialState.aiguille);

  /*const { boitier, fond, couronne, bracelet, aiguille } =
    useContext<SimulatorType>(SimulatorContext);*/

  function renderBoitiersSelector() {
    return BoitiersMock.map((boitier) => (
      <div
        className="SelectorTypeContent"
        onClick={() => {
          setBoitier(boitier.nom_image);
        }}
        key={boitier.id}
      >
        <div className="SelectorTypeImg">
          <img src={`/img/${boitier.nom_image}`} alt={boitier.nom_boitier} />
        </div>
        <div className="SelectorTypeName">{boitier.nom_boitier}</div>
      </div>
    ));
  }

  function renderFondsSelector() {
    return FondsMock.map((fond) => (
      <div className="SelectorTypeContent">
        <div
          className="SelectorTypeImg"
          onClick={() => setFond(fond.nom_image)}
          key={fond.id}
        >
          <img src={`/img/${fond.nom_image}`} alt={fond.nom_fond} />
        </div>
        <div className="SelectorTypeName">{fond.nom_fond}</div>
      </div>
    ));
  }

  function renderCouronneSelector() {
    return CouronneMock.map((couronne) => (
      <div className="SelectorTypeContent">
        <div
          className="SelectorTypeImg"
          onClick={() => setCouronne(couronne.nom_image)}
          key={couronne.id}
        >
          <img src={`/img/${couronne.nom_image}`} alt={couronne.nom_couronne} />
        </div>
        <div className="SelectorTypeName">{couronne.nom_couronne}</div>
      </div>
    ));
  }

  function renderBraceletsSelector() {
    return BraceletsMock.map((bracelet) => (
      <div className="SelectorTypeContent">
        <div
          className="SelectorTypeImg"
          onClick={() => setBracelet(bracelet.nom_image)}
          key={bracelet.id}
        >
          <img src={`/img/${bracelet.nom_image}`} alt={bracelet.nom_bracelet} />
        </div>
        <div className="SelectorTypeName">{bracelet.nom_bracelet}</div>
      </div>
    ));
  }

  function renderAiguillesSelector() {
    return AiguillesMock.map((aiguilles) => (
      <div className="SelectorTypeContent">
        <div
          className="SelectorTypeImg"
          onClick={() => setAiguille(aiguilles.nom_image)}
          key={aiguilles.id}
        >
          <img
            src={`/img/${aiguilles.nom_image}`}
            alt={aiguilles.nom_aiguille}
          />
        </div>
        <div className="SelectorTypeName">{aiguilles.nom_aiguille}</div>
      </div>
    ));
  }

  function renderAiguillesSimulator() {
    return <img src={`/img/${aiguille}`} alt={aiguille} />;
  }

  function renderBoitiersSimulator() {
    return <img src={`/img/${boitier}`} alt={boitier} />;
  }

  function renderBraceletsSimulator() {
    return <img src={`/img/${bracelet}`} alt={bracelet} />;
  }

  function renderCouronneSimulator() {
    return <img src={`/img/${couronne}`} alt={couronne} />;
  }

  function renderFondsSimulator() {
    return <img src={`/img/${fond}`} alt={fond} />;
  }

  return (
    <div className="simulatorContainer">
      <div className="simulatorPreviewContainer">
        <div className="simulatorPreview boitierPreview">
          {renderBoitiersSimulator()}
        </div>
        <div className="simulatorPreview aiguillePreview">
          {renderAiguillesSimulator()}
        </div>
        <div className="simulatorPreview braceletPreview">
          {renderBraceletsSimulator()}
        </div>
        <div className="simulatorPreview couronnePreview">
          {renderCouronneSimulator()}
        </div>
        <div className="simulatorPreview fondPreview">
          {renderFondsSimulator()}
        </div>
      </div>
      <div className="simulatorSelectorContainer">
        {/*<Selector name="Boitiers" type="boitier" />
        <Selector name="Fonds" type="fond" />
        <Selector name="Couronnes" type="couronne" />
        <Selector name="Bracelets" type="bracelet" />
  <Selector name="Aiguilles" type="aiguilles" />*/}
        <div className="SelectorContainer">
          <div className="SelectorNameContainer">Boitiers</div>
          <div className="SelectorTypeContentContainer">
            {renderBoitiersSelector()}
          </div>
        </div>
        <div className="SelectorContainer">
          <div className="SelectorNameContainer">Fonds</div>
          <div className="SelectorTypeContentContainer">
            {renderFondsSelector()}
          </div>
        </div>
        <div className="SelectorContainer">
          <div className="SelectorNameContainer">Couronnes</div>
          <div className="SelectorTypeContentContainer">
            {renderCouronneSelector()}
          </div>
        </div>
        <div className="SelectorContainer">
          <div className="SelectorNameContainer">Bracelets</div>
          <div className="SelectorTypeContentContainer">
            {renderBraceletsSelector()}
          </div>
        </div>
        <div className="SelectorContainer">
          <div className="SelectorNameContainer">Aiguilles</div>
          <div className="SelectorTypeContentContainer">
            {renderAiguillesSelector()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Simulator;
