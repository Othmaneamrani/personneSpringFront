import React, { useState } from "react";
import Login from "./Login";
import Sign from "./Sign";

export default function Authentification() {
  const [afficherLogin, setAfficherLogin] = useState(true);

  const toggleAffichage = () => {
    setAfficherLogin(!afficherLogin);
  };

  return (
    <div>
      {afficherLogin ? (
        <Login onInscriptionClick={toggleAffichage} />
      ) : (
        <Sign onLoginClick={toggleAffichage} />
      )}
    </div>
  );
}
