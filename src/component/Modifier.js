import React from 'react';
import { Link } from 'react-router-dom';



export default function Modifier () {
    return(
      <div>
         <div className="retour-hover">
         <Link className="retour"  to={'/home'} > <span className="arrow">&#8592;</span>  Retour</Link>
          </div>
        <div className="personne-container">
        
        <h1 className="login-header" >Modifier une personne</h1>
        <form  className="login-form" >
          <div className="form-group">
            <label className="login-label" htmlFor="nom">Nom:</label>
            <input className="form-control" type="text" id="nom" name="nom" required />
          </div>
          <div className="form-group">
            <label className="login-label" htmlFor="prenom">Prénom:</label>
            <input className="form-control" type="text" id="prenom" name="prenom" required />
          </div>
          <div className="form-group">
            <div className="marginT">
            <div className="form-group">
          <Link  to={'/popVoid'}  >  <button className="boutton-login"  type="submit">Sauvegarder Personne</button></Link>
          </div>
          </div>

          </div>
        </form>
      </div>
      </div>
    )
}