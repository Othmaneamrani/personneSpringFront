import React from "react";
import { useState } from "react";

export default function Sidebar({onRechercherClick , onModifierClick , onCreateClick , onSupprimerClick , onClickDeonnexion}){

    const [showSearch, setShowSearch] = useState(false);
    const activeSearch = () => {
        setShowSearch(!showSearch);
      };

 

    return (
      <div className="sidebar">
        <div className="hebto">
      <ul className="sidebarList">

          <li><a onClick={activeSearch} className="sidebar-l3" href="#">Chercher personne</a>
          {showSearch && (
          <form className="search-form">
            <input
              type="text"
              placeholder="Rechercher..."
              className="search-input"
            />
            <button onClick={onRechercherClick} type="submit" className="search-button">
              Rechercher
            </button>

          </form>
        )}</li>


          <li><a  onClick={onCreateClick} className="sidebar-l3" href="#">Créer personne</a></li>
          <li><a onClick={onModifierClick} className="sidebar-l3" href="#">Modifier personne</a></li>
          <li><a  onClick={onSupprimerClick} className="supprimer" href="#">Supprimer personne</a></li>
          <li><a  onClick={onClickDeonnexion} className="deconnexion" href="#">Deconnexion</a></li>

      </ul>
      </div>
  </div>  


        
    )}