import React from "react";
import mail from './email.png'

export default function Sign({onLoginClick , onClickInscription}){
  const isVisible=true

return(
  <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`} >
    <div className="login-container" >
<form className="login-form">
  <div className="form-group">
    <label htmlFor="username" className="login-label">Nom d'utilisateur :</label>
    <input type="text" id="username" name="username" className="form-control " required />
  </div>
  <div className="form-group">
    <label htmlFor="password" className="login-label">Mot de passe :</label>
    <input type="password" id="password" name="password" className="form-control " required />
  </div>
  <div className="form-group">
    <label htmlFor="birthdate" className="login-label">Date de naissance :</label>
    <input type="date" id="birthdate" name="birthdate" className="form-control " required />
  </div>
  <div className="form-group">
    <div className="gmail-icon">
    <img className="mail-icon" src={mail} alt="mail-icon"/>
    <label htmlFor="gmail" className="login-label" >Gmail :</label>
    </div>
    <input type="email" id="gmail" name="gmail" className="form-control " placeholder="example@gmail.com" required />
  </div>
  <div className="form-group">
    <button type="submit" onClick={onClickInscription} className="boutton-login">S'inscrire</button> 

    <a onClick={onLoginClick}  className="inscription">Login</a>
  </div>
</form>
    </div>
    </div>

)
}