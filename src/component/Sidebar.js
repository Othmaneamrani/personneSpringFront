import React from "react";
import { useState } from "react";

export default function Sidebar(){

    const [showSearch, setShowSearch] = useState(false);
    const activeSearch = () => {
        setShowSearch(!showSearch);
      };


    return (
        <div className="sidebar">
        <ul className="sidebarList">

            <li><a onClick={activeSearch} className="sidebar-l3" href="#">Chercher personne</a>
            {showSearch && (
            <form className="search-form">
              <input
                type="text"
                placeholder="Rechercher..."
                className="search-input"
              />
              <button type="submit" className="search-button">
                Rechercher
              </button>
            </form>
          )}</li>


            <li><a className="sidebar-l3" href="#">Créer personne</a></li>
            <li><a className="sidebar-l3" href="#">Modifier personne</a></li>
            <li><a className="supprimer" href="#">Supprimer personne</a></li>

        </ul>
    </div>
        
    )}