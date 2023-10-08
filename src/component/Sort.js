import React from "react";
export default function Sort ({onRetourClick}){


return(
    <div >
         <div className="retour-hover">
        <a  onClick={onRetourClick} href="#" className="retour"><span className="arrow">&#8592;</span>  Retour</a>
        </div>

        <h1 className="resultat">Resulat :</h1>

        <div className="conteneur-prec">
        <div className="prec-hover">
        <a   href="#" className="prec"><span className="arrow">&#8592;</span>  Précédant</a>
        </div>

        <div className="conteneur-suiv">
        <div className="suiv-hover">
        <a   href="#" className="suiv"> Suivant <span className="arrow">&#8594;</span>  </a>
        </div>
        </div>
        </div>
    </div>
)

}