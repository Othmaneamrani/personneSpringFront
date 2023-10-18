import React, { useState, useEffect } from "react";
import BarreRecherche from "./BarreRecherche";
import { Link } from "react-router-dom";
import { addList } from "./service";

export default function Sidebar({ onDeconnexionClick, onProblem, onSort, sort, selectedPersonId }) {
  const isVisible = true;

  const [showBootstrap, setShowBootstrap] = useState(false);

  const handleAddToList = (selectedPersonId) => {
    addList(selectedPersonId.idRepresentation);
  };

  const onProblemClick = () => {
    onProblem(true);
  };

  const [showSearch, setShowSearch] = useState(false);

  const activeSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleLinkClick = (e) => {
    if (e.target.classList.contains("sidebar-l3-non") || e.target.classList.contains("supprimer-non")) {
      e.preventDefault();
    } else {
      onProblemClick();
    }
  };

  const handleDeconnexionClick = () => {
    const link = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"]');
    if (link) {
      document.head.removeChild(link);
    }    onDeconnexionClick();
  };

  useEffect(() => {
    if (showBootstrap) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
      document.head.appendChild(link);
    } else {
      const link = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"]');
      if (link) {
        document.head.removeChild(link);
      }
    }
  }, [showBootstrap]);

  return (
    <div className="sidebar">
      <div className="hebto" >
      <ul className="sidebarList">
        <li>
          <Link className="sidebar-l3" onClick={() => setShowBootstrap(!showBootstrap)}>
            {showBootstrap ? "Mode sombre" : "Mode clair"}
          </Link>
        </li>

        <li>
          <Link onClick={activeSearch} className="sidebar-l3">
            Chercher personne
          </Link>
          {showSearch && (
            <div className={`transition-fade ${isVisible ? "visible" : "invisible"}`}>
              <BarreRecherche onSort={onSort} sort={sort} />
            </div>
          )}
        </li>
        {selectedPersonId ? (
          <li>
            <Link className="sidebar-l3" onClick={() => handleAddToList}>
              Ajouter à la liste
            </Link>
          </li>
        ) : (
          <li>
            <Link to={"/list"} className="sidebar-l3">
              Voir liste
            </Link>
        </li>
        )}

        <li>
          <Link
            to={"/create"}
            className="sidebar-l3"
          >
            Créer personne
          </Link>
        </li>
        <li>
          <Link
            to={"/modifier"}
            className={selectedPersonId ? "sidebar-l3-oui" : "sidebar-l3-non"}
            onClick={handleLinkClick}
          >
            Modifier personne
          </Link>
        </li>
        <li>
          <Link
            to={"/popValider"}
            className={selectedPersonId ? "supprimer-oui" : "supprimer-non"}
            onClick={handleLinkClick}
          >
            Supprimer personne
          </Link>
        </li>
        <li>
          <Link to={"/"} onClick={handleDeconnexionClick} className="deconnexion">
            Deconnexion
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
}
