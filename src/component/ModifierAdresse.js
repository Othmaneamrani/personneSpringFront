import React from "react";

export default function ModifierAdresse({ onRetourClick, onSauvegarderClick }) {
    return (
      <div>
        <div className="retour-hover">
          <a onClick={onRetourClick} href="#" className="retour">
            <span className="arrow">&#8592;</span> Retour
          </a>
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
                <button className="boutton-login" onClick={onSauvegarderClick} type="submit">
                  Sauvegarder Adresse
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  