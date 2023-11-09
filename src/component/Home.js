import React, { useEffect, useState } from "react";
import Sidebar from './Sidebar';
import { deleteAdresse, getPersonnes} from './service';
import Pagination from "./Pagination";
import { useNavigate} from 'react-router-dom';


export default function Home({selectionPersonnes,selectionPersonnesVoid,selectedPersonIds,togllePageDelete2, pageDelete, length,togllePageDelete,toglleTheme,showBootstrap, onDeconnexionClick,toggleVersSort,adresseAccess, onSort, sort , onProblem , handleLadrisa}) {
  const isVisible = true;

  const [selectedPersonAddresses, setSelectedPersonAddresses] = useState([]);
  const [personnes, setPersonnes] = useState([]);
  const [selectedPersonne, setSelectedPersonne] = useState(null);
  const [pageActuelle, setPageActuelle] = useState(1);
  const [taillePage, setTaillePage] = useState(5);
  const [totalPages, setTotalPages] = useState(1); 
  const [addListState, setAddListState] = useState(false);
  const [viderState, setViderState] = useState(false);

  const toggleViderState = () => {
    setViderState(!viderState)
  }

  const toggleAddListState = () => {
    setAddListState(!addListState)
  }

const navigate = useNavigate()

const handleModifierAdresse = (adresse) => {
  handleLadrisa(adresse)
  adresseAccess()
  navigate('/modifierAdresse')
}

  const handleToggleAdresses = (personne) => {
    if (selectedPersonne === personne) {
      setSelectedPersonne(null);
      setSelectedPersonAddresses([]);
    } else {
      setSelectedPersonne(personne);
      setSelectedPersonAddresses(personne.adressesRepresentation || []);
    }
  };

  const handleGetPersonnes = () => {
    getPersonnes(localStorage.getItem("currentPage"), taillePage,localStorage.getItem('idConnexion'))
      .then((resp) => {
        setPersonnes(resp.data);
        setTotalPages(Math.ceil(resp.data.totalElements / taillePage));
        togllePageDelete(resp.data.totalElements);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePageChange = (page) => {
    setPageActuelle(page);
    localStorage.setItem("currentPage", page.toString());
  };

useEffect(() => {
  handleGetPersonnes();
},[addListState]);

useEffect(() => {
  handleGetPersonnes();
},[viderState]);

  useEffect(() => {
  selectionPersonnesVoid();
    toggleVersSort(false);
    localStorage.setItem("currentPageSort", '1')
        const storedPage = localStorage.getItem("currentPage");
    if (storedPage) {
      setPageActuelle(Number(storedPage));
    }
    handleGetPersonnes();
  }, [pageActuelle, taillePage]);

  const handleDeleteAddress = (addressId, personne) => {
    if (selectedPersonAddresses.length === 1) {
      alert("Impossible de supprimer la dernière adresse.");
      return;
    }

    deleteAdresse(addressId , personne).then(() => {
      const updatedAddresses = selectedPersonAddresses.filter(adresse => adresse.idRepresentation !== addressId);
      setSelectedPersonAddresses(updatedAddresses);
      personne.adressesRepresentation = updatedAddresses;
    }).catch((error) => {
      console.log(error);
    });
  };
  


  return (
    <div className={`transition-fade ${isVisible ? "visible" : "invisible"}`}>
      <div className="bienvenu">
        <Sidebar selectionPersonnesVoid={selectionPersonnesVoid} selectedPersonIds={selectedPersonIds} toggleViderState={toggleViderState} addListState={addListState} toggleAddListState={toggleAddListState} selectionPersonnes={selectionPersonnes} toglleTheme={toglleTheme} showBootstrap={showBootstrap}  onProblem={onProblem} onSort={onSort} sort={sort} onDeconnexionClick={onDeconnexionClick} />

        <h1 className="smia">BIENVENUE {localStorage.getItem('username').charAt(0).toUpperCase() + localStorage.getItem('username').slice(1).toLowerCase()}</h1>
        <h3 className="faire">Que souhaitez-vous faire ?</h3>

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
              personnes.content
              .map((personne, index) => (
                <tr key={index}>
                  {personne.listRepresentation ?(
                  <td
                    className={`case-select-personne ${selectedPersonIds.includes(personne) ? 'selected' : ''}`}
                    onClick={() =>{selectionPersonnes(personne);} }
                  >
                    <span  className="heart">❤️</span> {personne.idRepresentation}
                  </td>
                  ):(
                    <td
                    className={`case-select-personne ${selectedPersonIds.includes(personne) ? 'selected' : ''}`}
                    onClick={() =>{selectionPersonnes(personne);} }
                  >
                    {personne.idRepresentation}
                  </td>
                  )
                  }
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
                      <table className="adresses-table2">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Rue</th>
                            <th>Numéro de Maison</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedPersonAddresses && selectedPersonAddresses.map((adresse, index) => (
                            <tr key={index}>
                              <td>{adresse.idRepresentation}</td>
                              <td>{adresse.rueRepresentation}</td>
                              <td>{adresse.numeroMaisonRepresentation}</td>
                              <td>
                                <button  onClick={() => handleModifierAdresse(adresse)} className="bouton-modifier-adresses">Modifier</button>
                                <button onClick={() => handleDeleteAddress(adresse.idRepresentation , personne)} className="bouton-supprimer-adresses">Supprimer</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </td>
                </tr>
              ))
            ):(
              <tr>
                <td colSpan="4">Aucune personne trouvée</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="pagination-controls">
                <Pagination pageDelete={pageDelete} 
                 togllePageDelete2={togllePageDelete2}
                length={length}  
                 currentPage={pageActuelle}
            totalPages={totalPages}
            onPageChange={handlePageChange}  />
        </div>
      </div>
    </div>
  );
}
