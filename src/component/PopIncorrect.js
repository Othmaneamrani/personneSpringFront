import React from "react";
import { Link } from "react-router-dom";

export default function PopIncorrect() {

  return (
    <div className="popup-overlay">
      <div className="popup2">
        <h2>Username ou password incorrect :/</h2>
       <Link  to={'/'} ><button >Ok</button></Link> 
      </div>
    </div>
  );
}
