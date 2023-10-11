import React from "react";
import { Link } from 'react-router-dom';

export default function Sort (){


return(
    <div >
         <div className="retour-hover">
        <Link className="retour"  to={'/home'} > <span className="arrow">&#8592;</span>  Retour</Link>
        </div>

        <h1 className="resultat">Resulat :</h1>


    </div>
)

}