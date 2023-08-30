import {
  BoitiersMock,
  FondsMock,
  CouronneMock,
  BraceletsMock,
  AiguillesMock,
} from "../../Mocks";
import "./Selector.css";

interface Props {
  name: string;
  type: "boitier" | "fond" | "couronne" | "bracelet" | "aiguilles";
}

function Selector(props: Props) {
  function renderSelector() {
    switch (props.type) {
      case "boitier":
        return BoitiersMock.map((boitier) => (
          <div className="SelectorTypeContent">
            <div className="SelectorTypeImg">
              <img
                src={`/img/${boitier.nom_image}`}
                alt={boitier.nom_boitier}
              />
            </div>
            <div className="SelectorTypeName">{boitier.nom_boitier}</div>
          </div>
        ));

      case "fond":
        return FondsMock.map((fond) => (
          <div className="SelectorTypeContent">
            <div className="SelectorTypeImg">
              <img src={`/img/${fond.nom_image}`} alt={fond.nom_fond} />
            </div>
            <div className="SelectorTypeName">{fond.nom_fond}</div>
          </div>
        ));

      case "couronne":
        return CouronneMock.map((couronne) => (
          <div className="SelectorTypeContent">
            <div className="SelectorTypeImg">
              <img
                src={`/img/${couronne.nom_image}`}
                alt={couronne.nom_couronne}
              />
            </div>
            <div className="SelectorTypeName">{couronne.nom_couronne}</div>
          </div>
        ));

      case "bracelet":
        return BraceletsMock.map((bracelet) => (
          <div className="SelectorTypeContent">
            <div className="SelectorTypeImg">
              <img
                src={`/img/${bracelet.nom_image}`}
                alt={bracelet.nom_bracelet}
              />
            </div>
            <div className="SelectorTypeName">{bracelet.nom_bracelet}</div>
          </div>
        ));

      case "aiguilles":
        return AiguillesMock.map((aiguilles) => (
          <div className="SelectorTypeContent">
            <div className="SelectorTypeImg">
              <img
                src={`/img/${aiguilles.nom_image}`}
                alt={aiguilles.nom_aiguille}
              />
            </div>
            <div className="SelectorTypeName">{aiguilles.nom_aiguille}</div>
          </div>
        ));
    }
  }
  return (
    <div className="SelectorContainer">
      <div className="SelectorNameContainer">{props.name}</div>
      <div className="SelectorTypeContentContainer">{renderSelector()}</div>
    </div>
  );
}

export default Selector;
