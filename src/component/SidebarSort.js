import React from "react";
import { Link } from "react-router-dom";
import { addList, retirerList } from "./service";

export default function SidebarSort({selectionPersonnesVoid , selectedPersonIds,onProblem ,toggleAddListStateSort}){




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
    selectionPersonnesVoid();
    toggleAddListStateSort()
  }
 


  const handleAddToList = async (personne) => {
    await addList(personne.idRepresentation);
    selectionPersonnesVoid();
    toggleAddListStateSort();
  };

    return (
      <div className="sidebar">
        <div className="hebtoSort">
      <ul className="sidebarList">

      <li> <Link className="retourSort" to={'/home'}><span className="arrow">&#8592;</span> Retour</Link></li>


      {(selectedPersonIds.length === 1 && (selectedPersonIds[0].listRepresentation ===false || selectedPersonIds[0].listRepresentation ===null ))  && 
          <li>
            <Link className="sidebar-l3" onClick={() => handleAddToList(selectedPersonIds[0])}>
              Ajouter aux favoris
            </Link>
          </li>
        }
      {(selectedPersonIds.length === 1  && selectedPersonIds[0].listRepresentation ===true) && 
         <li>
         <Link className="sidebar-l3"  onClick={() => handleRetirerList(selectedPersonIds[0])}>
           Retirer des favoris
         </Link>
     </li>
        }

{(selectedPersonIds.length <= 1) &&   
           <li>
          <Link
            to={"/modifier"}
            className={selectedPersonIds.length === 1 ? "sidebar-l3-oui" : "sidebar-l3-non"}
            onClick={handleLinkClick}
          >
            Modifier personne
          </Link>
        </li>}
          {(selectedPersonIds.length <= 1) &&
          <li>
          <Link
            to={"/popValider"}
            className={selectedPersonIds.length === 1 ? "supprimer-oui" : "supprimer-non"}
            onClick={handleLinkClick}
          >
            Supprimer personne
          </Link>
        </li>}

        {  selectedPersonIds.length > 1 &&
          <li>
          <Link
            to={"/popValiderS"}
            className="supprimer-oui"
            onClick={handleLinkClick}
          >
            Supprimer personnes
          </Link>
        </li>}

      </ul>
      </div>
  </div>  


        
    )}