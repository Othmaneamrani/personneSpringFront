import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getPersonnesSort } from "./service";

export default function Sort ({sort}){

  const [personnes, setPersonnes] = useState([]);
  const [selectedPersonne, setSelectedPersonne] = useState(null);


  const handleToggleAdresses = (personne) => {
    if (selectedPersonne === personne) {
      setSelectedPersonne(null); 
    } else {
      setSelectedPersonne(personne); 
    }
  };


  const hanldeGetSortPersonnes = () => {
        getPersonnesSort(sort).then((resp) =>{
        setPersonnes(resp.data) })
        .catch((err) => {
            console.log(err)
        }
        )
  }

  useEffect(() => {
    hanldeGetSortPersonnes();
  }, []);

return(
    <div >
         <div className="retour-hover">
        <Link className="retour"  to={'/home'} > <span className="arrow">&#8592;</span>  Retour</Link>
        </div>

        <h1 className="resultat">Resulat :</h1>

        <table className="personnes-table-sort">
  <thead>
    <tr>
      <th className="id-header">ID</th>
      <th className="nom-header">Nom</th>
      <th className="prenom-header">Prénom</th>
      <th className="adresses-header">Adresses</th>
    </tr>
  </thead>
  <tbody>
    {personnes.content && personnes.content.length > 0 ? (
      personnes.content.map((personne, index) => (
        <tr key={index}>
          <td>{personne.idRepresentation}</td>
          <td>{personne.nomRepresentation}</td>
          <td>{personne.prenomRepresentation}</td>
          <td>
            <button
              className="bouton-afficher-adresses"
              onClick={() => handleToggleAdresses(personne)}
            >
              Afficher Adresses
            </button>
            {selectedPersonne === personne && (
              <ul>
                {personne.adressesRepresentation &&
                  personne.adressesRepresentation.map((adresse, index) => (
                    <li key={index}>
                      {adresse.idRepresentation}, {adresse.rueRepresentation}, {adresse.numeroMaisonRepresentation}
                    </li>
                  ))}
              </ul>
            )}
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4">Aucune personne trouvée</td>
      </tr>
    )}
  </tbody>
</table>



    </div>
)

}