import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function PopMdp() {
  const okButtonRef = useRef(null);

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && okButtonRef.current) {
      okButtonRef.current.click();
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleEnterKeyPress);
    return () => {
      window.removeEventListener("keyup", handleEnterKeyPress);
    };
  }, []);


  
  return (
    <div className="popup-overlay">
      <div className="popup2">
        <h2>
          Password faible ! Il doit contenir plus de 6 caractères, et au moins une majuscule, un chiffre ou un caractère spécial
        </h2>
        <Link to={'/sign'}>
          <button ref={okButtonRef}>Ok</button>
        </Link>
      </div>
    </div>
  );
}
