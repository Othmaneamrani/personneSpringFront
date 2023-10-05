import React from "react";

export default function PopVoid({onOkClick}) {

  return (
    <div className="popup-overlay">
      <div className="popup2">
        <h2>Modifications sauvegardées</h2>
        <button onClick={onOkClick} >Ok</button>
      </div>
    </div>
  );
}
