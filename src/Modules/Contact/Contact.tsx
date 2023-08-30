import "./Contact.css";

function Contact() {
  return (
    <div className="Home_Container">
      <h1 className="Contact_Title">
        Si vous souhaitez des renseignements, veuillez remplir ce formulaire:
      </h1>
      <div className="Contact_Container">
        <div className="Contact_Row1">
          <div className="Nom_Contact">
            <label>Votre nom:</label>
            <input type="text" id="Nom" />
          </div>
          <div className="Prenom_Contact">
            <label>Votre prénom:</label>
            <input type="text" id="Prenom" />
          </div>
        </div>
        <div className="Contact_Row2">
          <div className="Mail_Contact">
            <label>Votre mail:</label>
            <input type="email" id="Mail" />
          </div>
          <div className="Numéro_Contact">
            <label>Votre numéro:</label>
            <input type="number" id="Numéro" />
          </div>
        </div>
      </div>
      <div className="Contact_Comments">
        <textarea
          name="Comments"
          id="Comments"
          cols={100}
          rows={20}
          placeholder="Posez votre question ou demande de renseignements ici"
        ></textarea>
      </div>
      <div className="Contact_Submit_Container">
        <div className="Contact_Submit">Envoyer</div>
      </div>
    </div>
  );
}

export default Contact;
