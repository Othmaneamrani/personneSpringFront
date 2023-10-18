import React from "react";
import { Link } from "react-router-dom";
import { addList, retirerList } from "./service";

export default function SidebarSort({selectionPersonne,selectedPersonId,onProblem ,toggleAddListStateSort}){




  const handleLinkClick = (e) => {
    if (e.target.classList.contains("sidebar-l3-non") || e.target.classList.contains("supprimer-non")) {
      e.preventDefault(); 
    }else{
      onProblemClick()
    }
  };
      

  const onProblemClick = () => {
    onProblem(true)
  }


    
  const handleRetirerList = async (personne) => {
    await retirerList(personne.idRepresentation)
    toggleAddListStateSort()
  }
 


  const handleAddToList = async (selectedPersonId) => {
    await addList(selectedPersonId.idRepresentation);
    selectionPersonne(selectedPersonId)
    toggleAddListStateSort()
  };

    return (
      <div className="sidebar">
        <div className="hebto">
      <ul className="sidebarList">

      <li> <Link className="retourSort" to={'/home'}><span className="arrow">&#8592;</span> Retour</Link></li>


      {(selectedPersonId && selectedPersonId.listRepresentation ===false)  && 
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

          <li><Link to={'/modifier'}  className={selectedPersonId ? "sidebar-l3-oui" : "sidebar-l3-non"}  onClick={handleLinkClick} >Modifier personne</Link></li>
          <li><Link  to={'/popValider'}className={ selectedPersonId ? "supprimer-oui" : "supprimer-non"} onClick={handleLinkClick} >Supprimer personne</Link></li>

      </ul>
      </div>
  </div>  


        
    )}