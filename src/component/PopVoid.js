import React from "react";
import { Link } from "react-router-dom";

export default function PopVoid() {

  return (
    <div className="popup-overlay">
      <div className="popup2">
        <h2>Modifications sauvegardées</h2>
       <Link  to={'/home'} ><button >Ok</button></Link> 
      </div>
    </div>
  );
}
