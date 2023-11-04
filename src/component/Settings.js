import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usernameChange } from './service';

export default function Settings() {
  const isVisible = true;
  const navigate = useNavigate();

  const [usernameCommand,setUsernameCommand] = useState("");
  const [usernameCommandConfirm,setUsernameCommandConfirm] = useState("");
  const [deja,setDeja] = useState(false);
  const [la,setLa] = useState(false);
  const [actif,setActif] = useState(false);


  const handleUsernameChange = async (e) => {
    e.preventDefault();

    if(usernameCommand === usernameCommandConfirm){
      try{
     const response = await usernameChange(localStorage.getItem('idConnexion'), usernameCommand);
     if(response.data === usernameCommand){
      localStorage.setItem('username', usernameCommand);
      navigate('/home');
     }else if(response.data === "deja") {
      if(la){
        setLa(false);
      }
        setActif(true);
        setDeja(true);
     }else if(response.data === "non"){
      if(deja){
        setDeja(false);
      }
        setActif(true);
        setLa(true);
     }
      }catch (error) {
      console.error('Erreur lors de la requête API:', error);

      }
    }else{
      return"la";
    }
  };

    return (
      <div className={`transition-fade ${isVisible ? "visible" : "invisible"}`}>
      <div className="retour-hover">
          <Link className="retour" to={'/home'}>
            <span className="arrow">&#8592;</span> Retour
          </Link>
        </div>
      <div className="settings-container">

      <form className={`${actif ? "formSettings-actif" : "formSettings"}`} onSubmit={handleUsernameChange}>
          <h2 className='hjouj' > Changer le nom d'utilisateur</h2>
          <input className="inputSettings"
            type="text"
            id="currentUsername"
            name="currentUsername"
            value={localStorage.getItem('username')}
            readOnly
          />
          <input className="inputSettings"
            type="text"
            id="newUsername"
            name="newUsername"
            placeholder="Nouveau nom d'utilisateur"
            value={usernameCommand}
            onChange={(e) => setUsernameCommand(e.target.value)}
            required
          />
          <input className="inputSettings"
            type="text"
            placeholder="Confirmer le nouveau nom d'utilisateur"
            id="confirmUsername"
            name="confirmUsername"
            value={usernameCommandConfirm}
            onChange={(e) => setUsernameCommandConfirm(e.target.value)}
            required
          />

          {deja &&
            <p>Aucune modification.</p>
          }





          {la &&
            <p>Username déjà utilisé :/ Essayez un autre</p>
          }

          <button className="bouton-settings" type="submit">Changer le nom d'utilisateur</button>
        </form>

        <form className='formSettings'>
          <h2 className='hjouj'>Changer le mot de passe</h2>
          <input  className="inputSettings"
            type="password"
            id="passwordCommand"
            name="passwordCommand"
            placeholder="Mot de passe actuel"
            // value={this.state.newPassword}
            // onChange={this.handlePasswordChange}
            required
          />
          <input  className="inputSettings"
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Nouveau mot de passe"
            // value={this.state.confirmPassword}
            // onChange={this.handlePasswordChange}
            required
          />
          <input className="inputSettings"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmer le nouveau mot de passe"
            // value={usernameCommand}
            // onChange={(e) => setUsernameCommand(e.target.value)}
            required
          />
          <button className="bouton-settings" type="submit">Changer le mot de passe</button>
        </form>
      </div>
      </div>
    );
  }


