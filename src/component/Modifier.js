export default function Modifier ({onRetourClick , onSauvegarderClick}) {
    return(
      <div>
          <a  onClick={onRetourClick} href="#" className="retour"><span className="arrow">&#8592;</span>Retour</a>
        <div className="personne-container">
        
        <h1 className="login-header" >Modifier une personne</h1>
        <form action=".localhost:8080/personnes" method="POST" className="login-form" >
          <div className="form-group">
            <label className="login-label" htmlFor="nom">Nom:</label>
            <input className="form-control" type="text" id="nom" name="nom" required />
          </div>
          <div className="form-group">
            <label className="login-label" htmlFor="prenom">Prénom:</label>
            <input className="form-control" type="text" id="prenom" name="prenom" required />
          </div>
          <div className="form-group">
            <h3 className="mini-login-header">Adresses:</h3>
            <div className="address-group">
              <div className="form-group">
                <label className="login-label" htmlFor="rue">Rue:</label>
                <input className="form-control" type="text" id="rue" name="rue[]" required />
              </div>
              <div className="form-group">
                <label className="login-label" htmlFor="numeroMaison">Numero de maison:</label>
                <input className="form-control" type="text" id="numeroMaison" name="numeroMaison[]" required />
              </div>
            </div>
            <button className="boutton-login" type="button" id="ajouterAdresse">Ajouter une adresse</button>
            <button className="boutton-login" type="button" id="modifierAdresse">Modifier une autre adresse</button>
            <div className="marginT">
            <div className="form-group">
          <button className="boutton-login" onClick={onSauvegarderClick} type="submit">Sauvegarder Personne</button>
          </div>
          </div>

          </div>
        </form>
      </div>
      </div>
    )
}