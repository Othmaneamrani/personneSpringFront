import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { updateAdresse } from "./service";



export default function ModifierAdresse({ladrisa,onCreate,versSort}) {
  const navigate = useNavigate();
  const isVisible = true;


  const [idCommand, setIdCommand] = useState('');
  const [rueCommand, setRueCommand] = useState('');
  const [numeroMaisonCommand, setNumeroMaisonCommand] = useState('');
  



      const editAdresse = async (e) => {
        e.preventDefault()
        if(ladrisa !== null ){
          try {
          const adresseCommand = {
            idCommand:idCommand,
            rueCommand: rueCommand,
            numeroMaisonCommand: numeroMaisonCommand
          }
            const response = await updateAdresse(adresseCommand);
             console.log('réponse de l\'API : ', response.data);
          console.log(adresseCommand)

             if (response.status === 200) {
          onCreate(ladrisa.rueRepresentation);
                navigate('/popVoid')
             }
        }catch(error){
          console.error('Erreur lors de la requête API:', error);
        }
      }
      }

      useEffect(() => {
        if (ladrisa !== null) {
          setIdCommand(ladrisa.idRepresentation);
          setRueCommand(ladrisa.rueRepresentation);
          setNumeroMaisonCommand(ladrisa.numeroMaisonRepresentation);
              }
      }, [ladrisa]);


    return (
    <div className={`transition-fade ${isVisible ? "visible" : "invisible"}`}>

      <div>
        <div className="retour-hover">
        {versSort ?(
        <Link className="retour"  to={'/sort'} ><span className="arrow">&#8592;</span> Retour</Link>
        ):( <Link className="retour"  to={'/home'} ><span className="arrow">&#8592;</span> Retour</Link>)
        }         </div>
        <div className="personne-container">
          <h1 className="login-header">Modifier une adresse</h1>
          <form className="login-form">
            <div className="form-group">
              <label className="login-label" htmlFor="rue">
                Rue:
              </label>
              <input className="form-control"
               type="text" 
               id="rue"
               name="rue" 
               value={rueCommand}
               onChange={(e) => setRueCommand(e.target.value)}
               required />
            </div>
            <div className="form-group">
              <label className="login-label" htmlFor="numeroMaison">
                Numero de maison:
              </label>
              <input
                className="form-control"
                type="text"
                id="numeroMaison"
                name="numeroMaison"
                value={numeroMaisonCommand}
                onChange={(e) => setNumeroMaisonCommand(e.target.value)}
                required
              />
            </div>
            <div className="marginT">
              <div className="form-group">
               <button className="boutton-login" onClick={editAdresse} type="submit">Sauvegarder adresse</button>

              </div>
            </div>
          </form>
        </div>
      </div>
      </div>

    );
  }
  