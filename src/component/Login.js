import React, { useEffect, useState } from 'react';
import { Link ,   useNavigate} from 'react-router-dom';
import { loggg } from './service';



export default function Login({onConnexion, onProblem,idConnexion, idConnexionBeddel}) {
  const isVisible = true;
  const [usernameCommand, setUsernameCommand] = useState('');
  const [passwordCommand, setPasswordCommand] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const connexionCommand = {
      usernameCommand: usernameCommand,
      passwordCommand: passwordCommand,
    };

    try {
      const response = await loggg(connexionCommand)

      console.log('Réponse de l\'API:', response.data);
      if(response.data.username === connexionCommand.usernameCommand){
        idConnexionBeddel(response.data)
        onConnexion(true, usernameCommand);
        navigate('/home');
      }else {
        onProblem(true)
        navigate('/popIncorrect');
        // window.location.href = '/';

      }
    } catch (error) {
      console.error('Erreur lors de la requête API:', error);
    }
  };

  useEffect(()=> {
    localStorage.setItem('currentPage',1);
  },[])


  return (
    <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`}>
      
      <div className="login-container">
        <h2 className="login-header">Connexion</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="login-label" htmlFor="username">Nom d'utilisateur :</label>
            <input
              type="text"
              id="usernameCommand"
              name="usernameCommand"
              className="form-control"
              value={usernameCommand}
              onChange={(e) => setUsernameCommand(e.target.value)}
            />
          </div>

      <div className="form-group ">
      <label htmlFor="password" className="login-label">Mot de passe :</label>
      <div className="password-input-container">
      <input
      type={showPassword ? 'text' : 'password'}
      id="passwordCommand"
      name="passwordCommand"
      className="form-control"
      value={passwordCommand}
      onChange={(e) => setPasswordCommand(e.target.value)}
      required
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="show-password-button"
    >
      {showPassword ? 'Masquer' : 'Afficher'}
    </button>
  </div>
    </div>

          <div className="form-group">
            <button type="submit" className="boutton-login">Se connecter</button>
            <Link className="inscription"  to={'/sign'} >S'inscrire</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
