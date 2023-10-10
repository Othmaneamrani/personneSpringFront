import React from "react";
import { useState } from "react";
import BarreRecherche from "./BarreRecherche";
import { Link } from "react-router-dom";

export default function Sidebar({onDeconnexionClick}){

  const isVisible=true


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
             <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`} >
         <BarreRecherche />
          </div>)}</li>


          <li><Link to={'/create'} className="sidebar-l3" >Créer personne</Link></li>
          <li><Link to={'/modifier'} className="sidebar-l3" >Modifier personne</Link></li>
          <li><Link to={'/modifierAdresse'}className="sidebar-l3" >Modifier adresse</Link></li>
          <li><Link  to={'/popValider'}className="supprimer" >Supprimer personne</Link></li>
          <li> <Link to={'/'}  onClick={onDeconnexionClick} className="deconnexion" >Deconnexion</Link></li>

      </ul>
      </div>
  </div>  


        
    )}