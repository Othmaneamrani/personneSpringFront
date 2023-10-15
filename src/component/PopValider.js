import React from "react";
import { Link , useNavigate} from 'react-router-dom';
import { deletePersonne } from "./service";


export default function PopValider({selectedPersonId,versSort}) {
  const navigate = useNavigate();

  const handleDeletePersonne = (selectedPersonId) => {
    if (selectedPersonId !== null ) {
    deletePersonne(selectedPersonId).then(() => {
      navigate('/home')
    }).catch((error) => {
      console.log(error);
    });
  }
  };

  const handleDeletePersonneSort = (selectedPersonId) => {
    if (selectedPersonId !== null ) {
    deletePersonne(selectedPersonId).then(() => {
      navigate('/sort')
    }).catch((error) => {
      console.log(error);
    });
  }
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Êtes-vous sûr de vouloir supprimer {selectedPersonId.nomRepresentation} ?</h2>
        {versSort ?(
          <div>
          <Link  className="linkB" onClick={() => handleDeletePersonneSort(selectedPersonId)} ><button className="red-button" >Oui</button> </Link>
          <Link  className="linkB" to={'/sort'}  > <button  className="blue-button"  >Non</button> </Link>
          </div>
        ):( <div>
          <Link  className="linkB" onClick={() => handleDeletePersonne(selectedPersonId)} ><button className="red-button" >Oui</button> </Link>
          <Link  className="linkB" to={'/home'}  > <button  className="blue-button"  >Non</button> </Link>          </div>
        
        )
        } 
      </div>
    </div>
  );
}

