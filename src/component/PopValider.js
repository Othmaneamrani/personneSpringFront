import React from "react";
import { Link , useNavigate} from 'react-router-dom';
import { deletePersonne } from "./service";


export default function PopValider({selectedPersonId}) {
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

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Êtes-vous sûr de vouloir supprimer {selectedPersonId.nomRepresentation} ?</h2>
        <Link  className="linkB" onClick={() => handleDeletePersonne(selectedPersonId)} ><button className="red-button" >Oui</button> </Link>
        <Link  className="linkB" to={'/home'}  > <button  className="blue-button"  >Non</button> </Link>
      </div>
    </div>
  );
}
