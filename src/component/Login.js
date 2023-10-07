import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ onInscriptionClick, onClickConnexion }) {
  const isVisible = true;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Créez un objet pour contenir les données à envoyer
    const formData = {
      username: username,
      password: password,
    };

    try {
      // Faites la requête POST à votre API en utilisant Axios
      const response = await axios.post('http://localhost:8080/connexions/connexion', formData);

      // Traitez la réponse ici, par exemple, vérifiez si la connexion a réussi
      console.log('Réponse de l\'API:', response.data);
      if(response.data == true){
      // Appelez la fonction onClickConnexion ou faites d'autres actions en fonction de la réponse de l'API
      onClickConnexion();
    }
    } catch (error) {
      // Gérez les erreurs ici
      console.error('Erreur lors de la requête API:', error);
    }
  };

  return (
    <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`}>
      <div className="login-container">
        <h2 className="login-header">Connexion</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="login-label" htmlFor="username">Nom d'utilisateur :</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="login-label" htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="boutton-login">Se connecter</button>
            <a onClick={onInscriptionClick} className="inscription">S'inscrire</a>
          </div>
        </form>
      </div>
    </div>
  );
}
