import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { passwordChange, usernameChange } from './service';

export default function Settings({onProblem}) {
  const isVisible = true;
  const navigate = useNavigate();

  const [usernameCommand,setUsernameCommand] = useState("");
  const [usernameCommandConfirm,setUsernameCommandConfirm] = useState("");
  const [deja,setDeja] = useState(false);
  const [la,setLa] = useState(false);
  const [actif,setActif] = useState(false);

  const [actif2,setActif2] = useState(false);
  const [aucune,setAucune] = useState(false);
  const [actuel,setActuel] = useState(false);
  const [forme,setForme] = useState(false);
  const [currentPasswordCommand,setCurrentPasswordCommand] = useState("");
  const [passwordCommand,setPasswordCommand] = useState("");
  const [passwordCommandConfirm,setPasswordCommandConfirm] = useState("");

  const [confirmer,setConfirmer] = useState(false);
  const [confirmer2,setConfirmer2] = useState(false);



  const handleUsernameChange = async (e) => {
    e.preventDefault();
    if(usernameCommand !== usernameCommandConfirm){
      if(la){
        setLa(false);
      }
      if(deja){
        setDeja(false);
      }
      setConfirmer(true);
      setActif(true);
    }

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
      if(confirmer){
        setConfirmer(false);
      }
        setActif(true);
        setDeja(true);
     }else if(response.data === "non"){
      if(deja){
        setDeja(false);
      }
      if(confirmer){
        setConfirmer(false);
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


  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if(passwordCommand !== passwordCommandConfirm){
      if(aucune){
        setAucune(false);
      }
      if(actuel){
        setActuel(false);
      }
      if(forme){
        setForme(false);
      }
      setConfirmer2(true);
      setActif2(true);
    }

    const passwordCommandObject = {
      passwordCommand : currentPasswordCommand,
      newPasswordCommand : passwordCommand
    }

    if(passwordCommand === passwordCommandConfirm){
      try{
     const response = await passwordChange(localStorage.getItem('idConnexion'),passwordCommandObject);
     if(response.data === "ok"){
      onProblem(true);
      navigate('/popMdpChange');
      // alert('Password modifié !');
     }else if (response.data === "faible") {
      if(aucune){
        setAucune(false);
      }
      if(confirmer2){
        setConfirmer2(false);
      }
      if(actuel){
        setActuel(false);
      }
      setActif2(true);
      setForme(true);
     }else if (response.data === "incompatibles") {
      if(aucune){
        setAucune(false);
      }
      if(confirmer2){
        setConfirmer2(false);
      }
      if(forme){
        setForme(false);
      }
      setActif2(true);
      setActuel(true);
     }else if (response.data === "aucun") {
      if(forme){
        setForme(false);
      }
      if(confirmer2){
        setConfirmer2(false);
      }
      if(actuel){
        setActuel(false);
      }
      setActif2(true);
      setAucune(true);
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

          {confirmer &&
            <p>Confirmation incorrecte.</p>
          }

          <button className="bouton-settings" type="submit">Changer le nom d'utilisateur</button>
        </form>

        <form className={`${actif2 ? "formSettings-actif" : "formSettings"}`}  onSubmit={handlePasswordChange} >
          <h2 className='hjouj'>Changer le mot de passe</h2>
          <input  className="inputSettings"
            type="password"
            id="passwordCommand"
            name="passwordCommand"
            placeholder="Password actuel"
            value={currentPasswordCommand}
            onChange={(e) => setCurrentPasswordCommand(e.target.value)}
            required
          />
          <input  className="inputSettings"
            type="password"
            id="newPassword"
            name="newPassword"
            placeholder="Nouveau password"
            value={passwordCommand}
            onChange={(e) => setPasswordCommand(e.target.value)}
            required
          />
          <input className="inputSettings"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmer le password"
            value={passwordCommandConfirm}
            onChange={(e) => setPasswordCommandConfirm(e.target.value)}
            required
          />

          {aucune &&
            <p>Aucune modification.</p>
          } 

          {actuel &&
            <p>Password actuel incorrect.</p>
          }

          {forme &&
            <p>Password faible ! Il doit contenir plus de 6 caractères, et au moins
            un chiffre et une majuscule</p>
          }

          
          {confirmer2 &&
            <p>Confirmation incorrecte.</p>
          }

          <button className="bouton-settings" type="submit">Changer le mot de passe</button>
        </form>
      </div>
      </div>
    );
  }


