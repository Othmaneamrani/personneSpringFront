import React, { useEffect, useState } from "react";
import Sidebar from './Sidebar';
import { deleteAdresse, getPersonnes } from './service';

export default function Home({ onDeconnexionClick, username, onSort, sort }) {
  const isVisible = true;



  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const [selectedPersonAddresses, setSelectedPersonAddresses] = useState([]);

  const [personnes, setPersonnes] = useState([]);
  const [selectedPersonne, setSelectedPersonne] = useState(null);

  const handleToggleAdresses = (personne) => {
    if (selectedPersonne === personne) {
      setSelectedPersonne(null);
      setSelectedPersonAddresses([]);
    } else {
      setSelectedPersonne(personne);
      setSelectedPersonAddresses(personne.adressesRepresentation || []);
    }
  };

  const selectionPersonne = (personne) => {
    if (selectedPersonId === personne) {
      setSelectedPersonId(null);
    } else {
      setSelectedPersonId(personne);
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


  const handleDeleteAddress = (addressId , personne) => {
    if (selectedPersonAddresses.length === 1) {
      alert("Impossible de supprimer la dernière adresse.");
      return;
    }
    
    deleteAdresse(addressId).then(() => {
    const updatedAddresses = selectedPersonAddresses.filter(adresse => adresse.idRepresentation !== addressId);
    personne.adressesRepresentation  = updatedAddresses
    setSelectedPersonAddresses(updatedAddresses);
        })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div className={`transition-fade ${isVisible ? "visible" : "invisible"}`}>
      <div className="bienvenu">
        <Sidebar onSort={onSort} sort={sort} onDeconnexionClick={onDeconnexionClick} />

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
            {personnes.content && personnes.content.length > 0 ? (
              personnes.content.map((personne, index) => (
                <tr key={index}>
                  <td
                    className={`case-select-personne ${selectedPersonId === personne.idRepresentation ? 'selected' : ''}`}
                    onClick={() => selectionPersonne(personne.idRepresentation)}
                  >
                    {personne.idRepresentation}
                  </td>
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
                      <table className="adresses-table2" >
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Rue</th>
                            <th>Numéro de Maison</th>
                            <th>Actions</th>

                          </tr>
                        </thead>
                        <tbody>
                          { selectedPersonAddresses && selectedPersonAddresses.map((adresse, index) => (
                            <tr key={index}>
                              <td>{adresse.idRepresentation}</td>
                              <td>{adresse.rueRepresentation}</td>
                              <td>{adresse.numeroMaisonRepresentation}</td>
                              <td>
                                 <button className="bouton-modifier-adresses">Modifier</button>
                                <button   onClick={() => handleDeleteAddress(adresse.idRepresentation, personne)} className="bouton-supprimer-adresses">Supprimer</button>
                             </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
    </div>
  );
}
