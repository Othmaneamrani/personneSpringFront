import React from "react";

export default function Login (){
    return (
        <div className="login-container">
        <h2 className="login-header">Connexion</h2>
        <form className="login-form">
          <div className="form-group">
            <label className="login-label" htmlFor="username">Nom d'utilisateur :</label>
            <input type="text" id="username" name="username" className="form-control" />
          </div>
          <div className="form-group">
            <label className="login-label" htmlFor="password">Mot de passe :</label>
            <input type="password" id="password" name="password" className="form-control" />
          </div>
          <div className="form-group">
            <button type="submit" className="boutton-login">Se connecter</button>
            <a className="inscription">S'inscrire</a>
          </div>
        </form>
      </div>
    )}