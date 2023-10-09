import React from "react";
import { Link } from 'react-router-dom';

export default function Sort (){


return(
    <div >
         <div className="retour-hover">
        <Link className="retour"  to={'/home'} > <span className="arrow">&#8592;</span>  Retour</Link>
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