import React from "react";

export default function Pop({onRetourClick}) {

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Êtes-vous sûr ?</h2>
        <button onClick={onRetourClick} >Oui</button>
        <button onClick={onRetourClick} >Non</button>
      </div>
    </div>
  );
}
