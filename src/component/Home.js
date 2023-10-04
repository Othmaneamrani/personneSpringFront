import React from "react";
import Sidebar from './Sidebar';


export default function Home({onRechercherClick , onModifierClick , onCreateClick , onSupprimerClick , onClickDeconnexion}){
  
    return(
        <div className="bienvenu">
          <Sidebar onRechercherClick={onRechercherClick}  onModifierClick={onModifierClick}  onCreateClick={onCreateClick}  onSupprimerClick={onSupprimerClick}  onClickDeconnexion={onClickDeconnexion}/>
         
        <h1>BIENVENU M. (smia)</h1>    
        <h3>Que souhaitez-vous faire ?</h3>
        <h1>Liste des Personnes : </h1>
        {/* <ul>
        {personnes.map((personne, index) => (
            <li key={index}>{`${personne.nom} ${personne.prenom} ${personne.adresse.map((personne, index)=>(
                <li key={index}>{`${adresse.rue} ${adresse.numeroMaison}`}</li>
              ))}} 
            
            `} 
            <hr/>
            </li>
          ))}
        </ul> */}
        </div>
    )
}