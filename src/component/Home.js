import React, { useEffect, useState } from "react";
import Sidebar from './Sidebar';
import axios from "axios";

export default function Home({onDeconnexionClick}){
  const isVisible=true

    const [personnes,setPersonnes] =useState({});


     const handleGetPersonnes = () => {
      axios.get("http://localhost:8080/personnes")
      .then(resp => {
        setPersonnes(resp.data);
      })
      .catch(err => {
        console.log(err)
      })
    }

    useEffect(() => {
      handleGetPersonnes();
    },[])


  const handleDeletePersonne = (personne) => {
    const newPersonnes = personnes.filter((p) => p.id != personne.id )
    setPersonnes(newPersonnes)
}

    return(
      <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`} >
        <div className="bienvenu">
          <Sidebar onSupprimerClick = {handleDeletePersonne} onDeconnexionClick={onDeconnexionClick} />
         
        <h1 className="smia" >BIENVENU M. (username)</h1>    
        <h3>Que souhaitez-vous faire ?</h3>
        <h1>Liste des Personnes : </h1>

{      personnes.content && personnes.content.map((personne ,indexe)=> (
        <ul key={indexe}>  
          <li> {personne.nomRepresentation} </li>
          <li> {personne.prenomRepresentation} </li>

        </ul>
     ))
}

        <div className="conteneur-prec">
        <div className="prec-hover">
        <a   href="#" className="prec-home"><span className="arrow">&#8592;</span>  Précédant</a>
        </div>

        <div className="conteneur-suiv">
        <div className="suiv-hover">
        <a   href="#" className="suiv"> Suivant <span className="arrow">&#8594;</span>  </a>
        </div>
        </div>
        </div>

        </div>
        </div>

    )
}