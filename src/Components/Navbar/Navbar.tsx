import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="NavbarContainer">
      <div className="NavbarLogoContainer">
        <img src="img/Logo.jpg" alt="logo" />
      </div>
      <div className="NavbarLinksContainer">
        <Link to={"/"}>Accueil</Link>
        <Link to={"/creermontre"}>Créez votre montre</Link>
        <Link to={"/realisations"}>Mes réalisations</Link>
        <Link to={"/contact"}>Contactez moi</Link>
      </div>
    </div>
  );
}

export default Navbar;
