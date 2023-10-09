import React from "react";
import { Link } from 'react-router-dom';


export default function PopValider() {

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Êtes-vous sûr ?</h2>
        <Link  className="linkB" to={'/home'}   ><button className="red-button" >Oui</button> </Link>
        <Link  className="linkB" to={'/home'}  > <button  className="blue-button"  >Non</button> </Link>
      </div>
    </div>
  );
}
