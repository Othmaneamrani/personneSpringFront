import React, { useState } from 'react';
import axios from 'axios';
import mail from './email.png'

export default function Sign({onLoginClick , onClickInscription}){
  const isVisible=true

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dateDeNaissance, setDateDeNaissance] = useState('');
  const [gmail, setGmail] = useState('');

  const formData = {
    username: username,
    password: password,
    dateDeNaissance : dateDeNaissance,
    gmail : gmail
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  



  try {
    // Faites la requête POST à votre API en utilisant Axios
    const response = await axios.post('http://localhost:8080/logins/signup', formData);

    // Traitez la réponse ici, par exemple, vérifiez si la connexion a réussi
    console.log('Réponse de l\'API:', response.data);
    if(response.data != null){
    // Appelez la fonction onClickConnexion ou faites d'autres actions en fonction de la réponse de l'API
    onClickInscription();}
  } catch (error) {
    // Gérez les erreurs ici
    console.error('Erreur lors de la requête API:', error);
  }
  
  }



  return(
    <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`} >
      <div className="login-container" >
  <form className="login-form" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="username" className="login-label">Nom d'utilisateur :</label>
      <input type="text"
        id="username"
        name="username"
        className="form-control "
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        required />
    </div>
    <div className="form-group ">
      <label htmlFor="password" className="login-label">Mot de passe :</label>
      <input type="password"
        id="password"
        name="password"
        className="form-control "
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        required />
    </div>
    <div className="form-group ">
      <label htmlFor="birthdate" min="1900-01-01" className="login-label">Date de naissance :</label>
      <input type="date" 
        id="birthdate"
        name="birthdate" 
        className="form-control"
        value={dateDeNaissance}
        onChange={(e) => setDateDeNaissance(e.target.value)} 
         required />
    </div>
    <div className="form-group">
      <div className="gmail-icon">
      <img className="mail-icon" src={mail} alt="mail-icon"/>
      <label htmlFor="gmail" className="login-label" >Gmail :</label>
      </div>
      <input type="email"
         id="gmail" 
         name="gmail"
         className="form-control"
         placeholder="example@gmail.com"
         value={gmail}
         onChange={(e) => setGmail(e.target.value)} 
         required />
    </div>
    <div className="form-group">
      <button type="submit" className="boutton-login">S'inscrire</button> 
  
      <a onClick={onLoginClick}  className="inscription">Login</a>
    </div>
  </form>
      </div>
      </div>
  
  )
  }