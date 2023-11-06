import React from "react";
import { Link , useNavigate} from 'react-router-dom';
import { deletePersonnes } from "./service";


export default function PopValiderS({selectionPersonnesVoid,togllePageDelete2Sort,togllePageDelete2 , selectedPersonIds , versSort}) {
  const navigate = useNavigate();

  const handleDeletePersonnes = (selectedPersonIds) => {
        const idsDelete = selectedPersonIds.map((personne) => (personne.idRepresentation) ) .filter((id) => id !== null && id !== undefined);
         const idsParam = idsDelete.join(',');
        deletePersonnes(idsParam).then(()=> {
        togllePageDelete2(true);
        navigate('/home');
        selectionPersonnesVoid();
        })
    } 
    


    const handleDeletePersonnesSort = (selectedPersonIds) => {
        const idsDelete = selectedPersonIds.map((personne) => (personne.idRepresentation) ) .filter((id) => id !== null && id !== undefined);
         const idsParam = idsDelete.join(',');
        deletePersonnes(idsParam).then(()=> {
        togllePageDelete2Sort(true);
        navigate('/sort');
        selectionPersonnesVoid();
    })
    } 
    

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Êtes-vous sûr de vouloir supprimer ?</h2>
        {versSort ?(
          <div>
          <Link  className="linkB" onClick={() => handleDeletePersonnesSort(selectedPersonIds)} ><button className="red-button" >Oui</button> </Link>
          <Link  className="linkB" to={'/sort'}  > <button  className="blue-button"  >Non</button> </Link>
          </div>
        ):( <div>
          <Link  className="linkB" onClick={() => handleDeletePersonnes(selectedPersonIds)} ><button className="red-button" >Oui</button> </Link>
          <Link  className="linkB" to={'/home'}  > <button  className="blue-button"  >Non</button> </Link>          
          </div>
        
        )
        } 
      </div>
    </div>
  );
}

