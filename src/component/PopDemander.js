import React from "react";
import { Link } from 'react-router-dom';


export default function PopDemander({p}) {

  return (
    <div className="popup-overlay">
      <div className="popup2">
        <h2>{p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()} a été crée ! Ajouter une autre ?</h2>
        <Link className="linkB" to={'/create'}   ><button  >Oui</button> </Link>
        <Link className="linkB" to={'/home'}  > <button  >Non</button> </Link>
      </div>
    </div>
  );
}
