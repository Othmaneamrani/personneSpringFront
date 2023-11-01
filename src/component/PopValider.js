import React from "react";
import { Link , useNavigate} from 'react-router-dom';
import { deletePersonne } from "./service";


export default function PopValider({togllePageDelete2Sort,togllePageDelete2 , selectedPersonId , versSort}) {
  const navigate = useNavigate();

  const handleDeletePersonne = (selectedPersonId) => {
    deletePersonne(selectedPersonId.idRepresentation)
      .then(() => {
        togllePageDelete2(true);
        navigate('/home');
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };
  



  const handleDeletePersonneSort = (selectedPersonId) => {
    deletePersonne(selectedPersonId.idRepresentation)
      .then(() => {
        togllePageDelete2Sort(true);
        navigate('/sort');
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Êtes-vous sûr de vouloir supprimer {selectedPersonId.nomRepresentation.charAt(0).toUpperCase() + selectedPersonId.nomRepresentation.slice(1).toLowerCase()} ?</h2>
        {versSort ?(
          <div>
          <Link  className="linkB" onClick={() => handleDeletePersonneSort(selectedPersonId)} ><button className="red-button" >Oui</button> </Link>
          <Link  className="linkB" to={'/sort'}  > <button  className="blue-button"  >Non</button> </Link>
          </div>
        ):( <div>
          <Link  className="linkB" onClick={() => handleDeletePersonne(selectedPersonId)} ><button className="red-button" >Oui</button> </Link>
          <Link  className="linkB" to={'/home'}  > <button  className="blue-button"  >Non</button> </Link>          
          </div>
        
        )
        } 
      </div>
    </div>
  );
}

