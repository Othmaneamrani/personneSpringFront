import React from "react";
import Sidebar from './Sidebar';

export default function Home(){
  const isVisible=true

 
    return(
      <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`} >
        <div className="bienvenu">
          <Sidebar />
         
        <h1 className="smia" >BIENVENU M. (smia)</h1>    
        <h3>Que souhaitez-vous faire ?</h3>
        <h1>Liste des Personnes : </h1>

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