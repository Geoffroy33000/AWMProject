import { Selector } from "../../Components";

import "./Simulator.css";

function Simulator() {
  return (
    <div className="simulatorContainer">
      <div className="simulatorPreviewContainer">
        <div className="simulatorPreview"></div>
        <div className="simulatorPreview"></div>
        <div className="simulatorPreview"></div>
        <div className="simulatorPreview"></div>
        <div className="simulatorPreview"></div>
      </div>
      <Selector name="Boitiers" type="boitier" />
      <Selector name="Fonds" type="fond" />
      <Selector name="Couronnes" type="couronne" />
      <Selector name="Bracelets" type="bracelet" />
      <Selector name="Aiguilles" type="aiguilles" />
    </div>
  );
}

export default Simulator;
