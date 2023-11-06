import React from "react";
import { Link , useNavigate} from 'react-router-dom';
import { deletePersonne } from "./service";


export default function PopValider({togllePageDelete2Sort,togllePageDelete2 ,selectionPersonnesVoid , selectedPersonIds , versSort}) {
  const navigate = useNavigate();

  const handleDeletePersonne = (selectedPersonIds) => {
    deletePersonne(selectedPersonIds[0].idRepresentation)
      .then(() => {
        togllePageDelete2(true);
        selectionPersonnesVoid();
        navigate('/home');
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };
  



  const handleDeletePersonneSort = (selectedPersonIds) => {
    deletePersonne(selectedPersonIds[0].idRepresentation)
      .then(() => {
        togllePageDelete2Sort(true);
        selectionPersonnesVoid();
        navigate('/sort');
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Êtes-vous sûr de vouloir supprimer {selectedPersonIds[0].nomRepresentation.charAt(0).toUpperCase() + selectedPersonIds[0].nomRepresentation.slice(1).toLowerCase()} ?</h2>
        {versSort ?(
          <div>
          <Link  className="linkB" onClick={() => handleDeletePersonneSort(selectedPersonIds)} ><button className="red-button" >Oui</button> </Link>
          <Link  className="linkB" to={'/sort'}  > <button  className="blue-button"  >Non</button> </Link>
          </div>
        ):( <div>
          <Link  className="linkB" onClick={() => handleDeletePersonne(selectedPersonIds)} ><button className="red-button" >Oui</button> </Link>
          <Link  className="linkB" to={'/home'}  > <button  className="blue-button"  >Non</button> </Link>          
          </div>
        
        )
        } 
      </div>
    </div>
  );
}

