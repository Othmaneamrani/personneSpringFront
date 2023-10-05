import React, { useState } from "react";
import Login from "./Login";
import Sign from "./Sign";



export default function Authentification({onClickConnexion , onClickInscription}) { 

  const isVisible=true

    

  const [afficherLogin, setAfficherLogin] = useState(true);

  const toggleAffichage = () => {
    setAfficherLogin(!afficherLogin);
  };

  return (
    <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`} >
      {afficherLogin ? (
        <Login onInscriptionClick={toggleAffichage}  onClickConnexion={onClickConnexion} />     
      ) : (
        <Sign onLoginClick={toggleAffichage} onClickInscription={onClickInscription} />        
      )}
    </div>
  );
}
