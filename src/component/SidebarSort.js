import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(){

      
    return (
      <div className="sidebar">
        <div className="hebto">
      <ul className="sidebarList">

          <li> <Link className="retourSort" to={'/home'}><span className="arrow">&#8592;</span> Retour</Link></li>
          <li><Link to={'/modifier'} className="sidebar-l3" >Modifier personne</Link></li>
          <li><Link  to={'/popValider'}className="supprimer" >Supprimer personne</Link></li>

      </ul>
      </div>
  </div>  


        
    )}