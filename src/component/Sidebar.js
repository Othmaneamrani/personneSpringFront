import React, { useState } from "react";
import BarreRecherche from "./BarreRecherche";
import { Link } from "react-router-dom";
import { addList, retirerList } from "./service";


export default function Sidebar({toggleAddListState, selectionPersonne,toglleTheme,showBootstrap,onDeconnexionClick, onProblem, onSort, sort, selectedPersonId }) {
  const isVisible = true;


  const handleAddToList = async (selectedPersonId) => {
    await addList(selectedPersonId.idRepresentation);
    selectionPersonne(selectedPersonId)
    toggleAddListState()
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
    }   
     onDeconnexionClick();
  };

  
  const handleRetirerList = async (personne) => {
    await retirerList(personne.idRepresentation)
    selectionPersonne(selectedPersonId)
    toggleAddListState()
  }
 

  return (
    <div className="sidebar">
      <div className="hebto" >
      <ul className="sidebarList">
        <li>
          <Link className="sidebar-l3" onClick={() => toglleTheme(!showBootstrap)}>
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
        {(selectedPersonId && (selectedPersonId.listRepresentation ===false || selectedPersonId.listRepresentation ===null ) )  && 
          <li>
            <Link className="sidebar-l3" onClick={() => handleAddToList(selectedPersonId)}>
              Ajouter aux favoris
            </Link>
          </li>
        }
      {(selectedPersonId && selectedPersonId.listRepresentation ===true) && 
         <li>
         <Link className="sidebar-l3"  onClick={() => handleRetirerList(selectedPersonId)}>
           Retirer des favoris
         </Link>
     </li>
        }

        { !selectedPersonId &&
          <li>
            <Link to={"/list"} className="sidebar-l3">
              Voir favoris
            </Link>
        </li>
        }

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
