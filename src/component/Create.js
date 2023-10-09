import React from "react"
import { Link } from 'react-router-dom';


export default function Create () {
  const isVisible=true

    return(
      <div    className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`} >
        <div className="retour-hover">
        <Link className="retour"  to={'/home'} > <span className="arrow">&#8592;</span>  Retour</Link>
          </div>
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
                <input className="form-control" type="text" id="numeroMaison" name="numeroMaison" required />
              </div>
              
            </div>
            <button className="boutton-login" type="button" id="ajouterAdresse">Ajouter une adresse</button>
          </div>

          <div className="form-group">
          <Link to={'/popDemander'} ><button className="boutton-login" type="submit">Créer Personne</button></Link>
          </div>

        </form>
      </div>
      </div>
    )
}