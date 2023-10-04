import React from "react";

export default function Sort ({onRetourClick}){
return(
    <div className="div-sort" >
        <a  onClick={onRetourClick} href="#" className="retour"><span className="arrow">&#8592;</span>Retour</a>
        <h1 className="resultat">Resulat :</h1>
    </div>
)

}