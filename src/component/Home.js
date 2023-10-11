import React, { useEffect, useState } from "react";
import Sidebar from './Sidebar';
import { getPersonnes } from './service';

export default function Home({ onDeconnexionClick, username }) {
  const isVisible = true;

  const [personnes, setPersonnes] = useState([]);
  const [selectedPersonne, setSelectedPersonne] = useState(null);

  const handleToggleAdresses = (personne) => {
    if (selectedPersonne === personne) {
      setSelectedPersonne(null); 
    } else {
      setSelectedPersonne(personne); 
    }
  };

  const handleGetPersonnes = () => {
    getPersonnes()
      .then((resp) => {
        setPersonnes(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetPersonnes();
  }, []);

  const handleDeletePersonne = (personne) => {
    const newPersonnes = personnes.filter((p) => p.id !== personne.id);
    setPersonnes(newPersonnes);
  };

  return (
    <div className={`transition-fade ${isVisible ? "visible" : "invisible"}`}>
      <div className="bienvenu">
        <Sidebar onSupprimerClick={handleDeletePersonne} onDeconnexionClick={onDeconnexionClick} />

        <h1 className="smia">BIENVENU {username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()}</h1>
        <h3>Que souhaitez-vous faire ?</h3>
        <h1 className="personnes-title">Liste des Personnes :</h1>
        <table className="personnes-table">
          <thead>
            <tr>
              <th className="id-header">ID</th>
              <th className="nom-header">Nom</th>
              <th className="prenom-header">Prénom</th>
              <th className="adresses-header">Adresses</th>
            </tr>
          </thead>
          <tbody>
    {personnes.content &&
      personnes.content.map((personne, index) => (
        <tr key={index}>
          <td>{personne.idRepresentation}</td>
          <td>{personne.nomRepresentation}</td>
          <td>{personne.prenomRepresentation}</td>
          <td>
            <button className="bouton-afficher-adresses"  onClick={() => handleToggleAdresses(personne)}>Afficher Adresses</button>
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
      ))}
  </tbody>
        </table>


      </div>
    </div>
  );
}
