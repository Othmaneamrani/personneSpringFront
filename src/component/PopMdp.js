import React from "react";
import { Link } from "react-router-dom";

export default function PopMdp() {

  return (
    <div className="popup-overlay">
      <div className="popup2">
        <h2>Password faible ! Il doit contenir plus de 6 caractères, et au moins un chiffre et une majuscule</h2>
       <Link  to={'/sign'} ><button >Ok</button></Link> 
      </div>
    </div>
  );
}
 