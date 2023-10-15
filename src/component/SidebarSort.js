import React from "react";
import { Link } from "react-router-dom";

export default function SidebarSort({selectedPersonId}){
  const handleLinkClick = (e) => {
    if (e.target.classList.contains("sidebar-l3-non") || e.target.classList.contains("supprimer-non")) {
      e.preventDefault(); 
    }
  };
      
    return (
      <div className="sidebar">
        <div className="hebto">
      <ul className="sidebarList">

          <li> <Link className="retourSort" to={'/home'}><span className="arrow">&#8592;</span> Retour</Link></li>
          <li><Link to={'/modifier'}  className={selectedPersonId ? "sidebar-l3-oui" : "sidebar-l3-non"}  onClick={handleLinkClick} >Modifier personne</Link></li>
          <li><Link  to={'/popValider'}className={ selectedPersonId ? "supprimer-oui" : "supprimer-non"} onClick={handleLinkClick} >Supprimer personne</Link></li>

      </ul>
      </div>
  </div>  


        
    )}