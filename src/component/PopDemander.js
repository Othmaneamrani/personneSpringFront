import React from "react";

export default function PopDemander({onOuiClick , onNonClick}) {

  return (
    <div className="popup-overlay">
      <div className="popup2">
        <h2>Personne créée ! Ajouter une autre ?</h2>
        <button onClick={onOuiClick} >Oui</button>
        <button onClick={onNonClick} >Non</button>
      </div>
    </div>
  );
}
