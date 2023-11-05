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
  const [passwordCommandConfirm, setPasswordCommandConfirm] = useState('');
  const [gmailCommand, setGmailCommand] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [incompatible, setIncompatible] = useState(false);
  
  const [showPassword, setShowPassword] = useState(false);

  const containsSpace = (str) => {
    return /\s/.test(str);
  };


  const passwordErrorClass =
  passwordErrorMessage === 'Mot de passe faible'
    ? 'password-error-red'
    : passwordErrorMessage === 'Mot de passe moyen'
    ? 'password-error-yellow'
    : passwordErrorMessage === 'Mot de passe accepté'
    ? 'password-error-green'
    : passwordErrorMessage === "Le mot de passe ne peut pas contenir d'espaces."
    ? 'password-error-red'
    : '';

    const passwordErrorClassInput =
    passwordErrorMessage === 'Mot de passe faible'
      ? '-red'
      : passwordErrorMessage === 'Mot de passe moyen'
      ? '-yellow'
      : passwordErrorMessage === 'Mot de passe accepté'
      ? '-green'
      :  passwordErrorMessage === "Le mot de passe ne peut pas contenir d'espaces."
      ? '-red'
      : '';

      const handleConfirmation = (e) => {
        const confirm = e.target.value;
        if(confirm !== connexionCommand.passwordCommand){
            setIncompatible(true);
            }else{
            setIncompatible(false);
            }
            setPasswordCommandConfirm(confirm);
      }

      const handleUsernameChange = (e) => {
        const username = e.target.value;
        if(containsSpace(username)){
          setUsernameErrorMessage("Le nom d'utilisateur ne peut pas contenir d'espaces.");
        }else{
          setUsernameErrorMessage("");

        }

        setConnexionCommand({ ...connexionCommand, usernameCommand: username });
      }




  const handlePasswordChange = (e) => {
    const password = e.target.value;

    if (password.length === 0 ) {
      setPasswordErrorMessage('');
    }else if (containsSpace(password)){
      setPasswordErrorMessage("Le mot de passe ne peut pas contenir d'espaces.");
    }
    
    else if (((/^[A-Z]+/.test(password) && /[a-z]+/.test(password)) && (/\d+/.test(password) || /[!@#éè\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|`~]+/.test(password)) ) && password.length >6 ||
              (/^[A-Z]+/.test(password) && (/\d+/.test(password) ||  /[!@#éè\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|`~]+/.test(password) ) && /[a-z]/.test(password))   && password.length > 6||
              (/^[a-z]+/.test(password) && /[A-Z]+/.test(password) && (/\d+/.test(password)  ||   /[!@#éè\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|`~]+/.test(password)) )  && password.length > 6||
              (/^[a-z]+/.test(password) &&  (/\d+/.test(password) ||  /[!@#éè\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|`~]+/.test(password)) && /[A-Z]+/.test(password))  && password.length > 6||
              ((/^\d+/.test(password) ||  /[!@#éè\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|`~]+/.test(password)) && /[A-Z]+/.test(password) && /[a-z]+/.test(password))  && password.length > 6||
              ((/^\d+/.test(password) ||  /[!@#éè\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|`~]+/.test(password))&& /[a-z]+/.test(password) && /[A-Z]+/.test(password))  && password.length > 6

    ) {
      setPasswordErrorMessage('Mot de passe accepté');
    }
    
    
    else if ( (/^[A-Z]+/.test(password) && /[a-z]+/.test(password)) &&  password.length >4||
                (/^[A-Z]+/.test(password) && (/\d+/.test(password) ||  /[!@#éè\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|`~]+/.test(password))  ) && password.length >4||
                (/^[a-z]+/.test(password) && /[A-Z]+/.test(password))&& password.length >4 ||
                ((/^\d+/.test(password)  ||  /[!@#éè\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|`~]+/.test(password)) && /[a-z]+/.test(password)) && password.length >4||
                ((/^\d+/.test(password) ||  /[!@#éè\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|`~]+/.test(password) ) && /[A-Z]+/.test(password))&& password.length >4 ||
                (/^[a-z]+/.test(password) && (/\d+/.test(password)  ||  /[!@#éè\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|`~]+/.test(password) )) ||
                (/^[a-z]+$/.test(password) &&  password.length > 6 ) ||
                (/^[A-Z]+$/.test(password) &&  password.length > 6 ) ||
                ((/^\d+$/.test(password) ||  /[!@#éè\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|`~]+/.test(password))&&  password.length > 6 )
                ) {
      setPasswordErrorMessage('Mot de passe moyen');
    }else {
      setPasswordErrorMessage('Mot de passe faible');
    }

    setConnexionCommand({ ...connexionCommand, passwordCommand: password });
  };



const handleSign = async (e) => {
e.preventDefault();

if (containsSpace(connexionCommand.usernameCommand)) {
  alert("Le nom d'utilisateur ne peut pas contenir d'espaces.");
  return;
}

if (containsSpace(connexionCommand.passwordCommand)) {
  alert("Le mot de passe ne peut pas contenir d'espaces.");
  return;
}


if(passwordCommandConfirm !== connexionCommand.passwordCommand){
alert("Confirmation incorrecte.");
  return;
}


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
  <div className="sign-container" >
  <form className="login-form" onSubmit={handleSign} >
    <div className="form-group">
      <label htmlFor="username" className="login-label">Nom d'utilisateur :</label>
      <input type="text"
        id="usernameCommand"
        name="usernameCommand"
        className={usernameErrorMessage  ? 'form-control-red' : 'form-control'}
        value={connexionCommand.usernameCommand}
        onChange={handleUsernameChange}
        required />
    </div>
    {usernameErrorMessage && <p className='password-error-red'>{usernameErrorMessage}</p>}

    <div className="form-group ">
      <label htmlFor="password" className="login-label">Mot de passe :</label>
      <div className="password-input-container">
    <input
      type={showPassword ? 'text' : 'password'}
      id="passwordCommand"
      name="passwordCommand"
      className={`form-control${passwordErrorClassInput}`}
      value={connexionCommand.passwordCommand}
      onChange={handlePasswordChange}
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
    {passwordErrorMessage && <p className={passwordErrorClass}>{passwordErrorMessage}</p>}

    <div className="form-group ">
      <label htmlFor="passwordConfirm" className="login-label">Confirmer le mot de passe :</label>
      <input type="password"
        id="passwordCommandConfirm"
        name="passwordCommandConfirm"
        className={incompatible ?  "form-control-red" : "form-control"}
        value={passwordCommandConfirm}
        onChange={handleConfirmation}
        required />
    </div>
    {incompatible && <p className='password-error-red' >Confirmation incompatible</p>}

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