import React from "react";
import { Link } from 'react-router-dom';



export default function ModifierAdresse() {
    return (
      <div>
        <div className="retour-hover">
        <Link className="retour"  to={'/home'} > <span className="arrow">&#8592;</span>  Retour</Link>
        </div>
        <div className="personne-container">
          <h1 className="login-header">Modifier une adresse</h1>
          <form action=".localhost:8080/adresses" method="POST" className="login-form">
            <div className="form-group">
              <label className="login-label" htmlFor="rue">
                Rue:
              </label>
              <input className="form-control" type="text" id="rue" name="rue" required />
            </div>
            <div className="form-group">
              <label className="login-label" htmlFor="numeroMaison">
                Numero de maison:
              </label>
              <input
                className="form-control"
                type="text"
                id="numeroMaison"
                name="numeroMaison"
                required
              />
            </div>
            <div className="marginT">
              <div className="form-group">
              <Link  to={'/popVoid'}  >  <button className="boutton-login"  type="submit">Sauvegarder adresse</button></Link>

              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  