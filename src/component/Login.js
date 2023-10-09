import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const isVisible = true;
 

  return (
    <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`}>
      <div className="login-container">
        <h2 className="login-header">Connexion</h2>
        <form className="login-form">
          <div className="form-group">
            <label className="login-label" htmlFor="username">Nom d'utilisateur :</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
            
            />
          </div>
          <div className="form-group">
            <label className="login-label" htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
             
            />
          </div>
          <div className="form-group">
            <button type="submit"  className="boutton-login">Se connecter</button>
           <Link   className="inscription"    to={'/sign'} >S'inscrire</Link>

          </div>
        </form>
      </div>
    </div>
  );
}
