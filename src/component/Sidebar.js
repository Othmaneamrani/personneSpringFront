import React from "react";
import { useState } from "react";
import BarreRecherche from "./BarreRecherche";
import { Link } from "react-router-dom";

export default function Sidebar({onDeconnexionClick , onProblem,onSort , sort,selectedPersonId }){

  const isVisible=true


  const onProblemClick = () => {
    onProblem(true)
  }

    const [showSearch, setShowSearch] = useState(false);
    const activeSearch = () => {
        setShowSearch(!showSearch);
      };
      
      const handleLinkClick = (e) => {
        if (e.target.classList.contains("sidebar-l3-non") || e.target.classList.contains("supprimer-non")) {
          e.preventDefault(); 
        }else{
          onProblemClick()
        }

      };
      
    return (
      <div className="sidebar">
        <div className="hebto">
      <ul className="sidebarList">

      <li> <Link  onClick={activeSearch}  className="sidebar-l3" >Chercher personne</Link>
          {showSearch && (
             <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`} >
         <BarreRecherche onSort={onSort}  sort={sort} />
          </div>)}</li>
            {selectedPersonId ?(            <li  className="sidebar-l3" >Ajouter à la liste</li>
            ):(
              <li><Link to={'/list'} className="sidebar-l3" >Voir liste</Link></li>
            )   

        }
          <li><Link to={'/create'} className="sidebar-l3" >Créer personne</Link></li>
          <li><Link to={'/modifier'}  className={selectedPersonId ? "sidebar-l3-oui" : "sidebar-l3-non"}  onClick={handleLinkClick} >Modifier personne</Link></li>
          <li><Link  to={'/popValider'}    className={ selectedPersonId ? "supprimer-oui" : "supprimer-non"} onClick={handleLinkClick} >Supprimer personne</Link></li>
          <li> <Link to={'/'}  onClick={onDeconnexionClick} className="deconnexion" >Deconnexion</Link></li>

      </ul>
      </div>
  </div>  


        
    )}