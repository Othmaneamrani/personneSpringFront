import React from "react";
import { Link } from 'react-router-dom';


export default function PopDemander() {

  return (
    <div className="popup-overlay">
      <div className="popup2">
        <h2>Personne créee ! Ajouter une autre ?</h2>
        <Link className="linkB" to={'/create'}   ><button  >Oui</button> </Link>
        <Link className="linkB" to={'/home'}  > <button  >Non</button> </Link>
      </div>
    </div>
  );
}
