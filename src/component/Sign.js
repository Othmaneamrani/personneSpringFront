import React, { useState } from 'react';
import mail from './email.png'
import { Link  ,   useNavigate} from 'react-router-dom';
import axios from 'axios';


export default function Sign({ idConnexionBeddel, onConnexion,onProblem}){
  const isVisible=true
  const navigate = useNavigate();

  const [connexionCommand, setConnexionCommand] = useState({
    usernameCommand: '',
    passwordCommand: '',
  });
  const [dateDeNaissanceCommand, setDateDeNaissanceCommand] = useState('');
  const [gmailCommand, setGmailCommand] = useState('');

const handleSign = async (e) => {
e.preventDefault();
const LoginCommand = {
    connexionCommand : connexionCommand,
    dateDeNaissanceCommand : dateDeNaissanceCommand,
    gmailCommand : gmailCommand
  }

try {

  const response = await axios.post ('http://localhost:8080/logins/signup',LoginCommand)
  console.log(response.data);
  if(response.data.gmail === gmailCommand){
    idConnexionBeddel(response.data.connexion)
    onConnexion(true, connexionCommand.usernameCommand);
    onProblem(true);
    navigate('/popSign');
  }else if (response.data.gmail === "gmail") {
    onProblem(true);
    navigate('/popGmail');
    }else if (response.data.gmail === "mdp") {
      onProblem(true);
      navigate('/popMdp');
    }else{
    onProblem(true);
    navigate('/popName');

  }} 
  catch(error){
    console.log('erreur de la requette', error)
  }

}


  return(
    <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`} >
      <div className="login-container" >
  <form className="login-form" onSubmit={handleSign} >
    <div className="form-group">
      <label htmlFor="username" className="login-label">Nom d'utilisateur :</label>
      <input type="text"
        id="usernameCommand"
        name="usernameCommand"
        className="form-control "
        value={connexionCommand.usernameCommand}
        onChange={(e)=> setConnexionCommand({
          ...connexionCommand , usernameCommand : (e.target.value)
        })}
        required />
    </div>
    <div className="form-group ">
      <label htmlFor="password" className="login-label">Mot de passe :</label>
      <input type="password"
        id="passwordCommand"
        name="passwordCommand"
        className="form-control "
        value={connexionCommand.passwordCommand}
        onChange={(e)=>setConnexionCommand({
          ...connexionCommand , passwordCommand : (e.target.value)
        })}
        required />
    </div>
    <div className="form-group ">
      <label htmlFor="birthdate" min="1900-01-01" className="login-label">Date de naissance :</label>
      <input type="date" 
        id="dateDeNaissanceCommand"
        name="dateDeNaissanceCommand" 
        className="form-control"
        value={dateDeNaissanceCommand}
        onChange={(e)=>setDateDeNaissanceCommand(e.target.value)}
         required />
    </div>
    <div className="form-group">
      <div className="gmail-icon">
      <img className="mail-icon" src={mail} alt="mail-icon"/>
      <label htmlFor="gmail" className="login-label" >Gmail :</label>
      </div>
      <input type="email"
         id="gmailCommand" 
         name="gmailCommand"
         className="form-control"
         placeholder="example@gmail.com"
         value={gmailCommand}
         onChange={(e)=>setGmailCommand(e.target.value)}
         required />
    </div>
    <div className="form-group">
      <button type="submit" className="boutton-login">S'inscrire</button> 
  
      <Link className="inscription"  to={'/'} >Login</Link>
    </div>
  </form>
      </div>
      </div>
  
  )
  }