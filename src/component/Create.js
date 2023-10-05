export default function Create ({onRetourClick  , onCreerClick}) {
    return(
      <div>
          <a  onClick={onRetourClick} href="#" className="retour"><span className="arrow">&#8592;</span>Retour</a>
        <div className="personne-container">
        <h1 className="login-header" >Créer une personne</h1>
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
          </div>

          <div className="form-group">
          <button className="boutton-login" onClick={onCreerClick} type="submit">Créer Personne</button>
          </div>

        </form>
      </div>
      </div>
    )
}