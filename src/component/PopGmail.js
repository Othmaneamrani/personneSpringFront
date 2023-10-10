import React from "react";
import { Link } from "react-router-dom";

export default function PopGmail() {

  return (
    <div className="popup-overlay">
      <div className="popup2">
        <h2>Gmail déjà utilisé :/ Essayez un autre</h2>
       <Link  to={'/sign'} ><button >Ok</button></Link> 
      </div>
    </div>
  );
}
