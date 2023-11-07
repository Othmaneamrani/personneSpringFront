import React, { useEffect, useState } from "react";
import SidebarSort from './SidebarSort';
import { deleteAdresse, getPersonnesSort} from './service';
import Pagination from "./Pagination";
import { Link, useNavigate } from "react-router-dom";

export default function Sort ({ selectionPersonnesVoid,lengthSort, pageDeleteSort,togllePageDeleteSort,togllePageDelete2Sort,sort,onProblem ,toggleVersSort,adresseAccess , onDeconnexionClick,selectedPersonIds, selectionPersonnes , handleLadrisa}){
  const isVisible = true;

  const [selectedPersonAddresses, setSelectedPersonAddresses] = useState([]);
  const [personnes, setPersonnes] = useState([]);
  const [selectedPersonne, setSelectedPersonne] = useState(null);
  const [pageActuelleSort, setPageActuelleSort] = useState(1);
  const [taillePage, setTaillePage] = useState(5);
  const [totalPages, setTotalPages] = useState(1); 
  const [addListStateSort, setAddListStateSort] = useState(false);

  const toggleAddListStateSort = () => {
    setAddListStateSort(!addListStateSort)
  }

  const navigate = useNavigate()

  const handleToggleAdresses = (personne) => {
    if (selectedPersonne === personne) {
      setSelectedPersonne(null);
      setSelectedPersonAddresses([]);
    } else {
      setSelectedPersonne(personne);
      setSelectedPersonAddresses(personne.adressesRepresentation || []);
    }
  };


  const handleGetSortPersonnes = () => {
    getPersonnesSort(localStorage.getItem("currentPageSort"), taillePage,localStorage.getItem('sort'),localStorage.getItem('idConnexion'))
    .then((resp) =>{
    setPersonnes(resp.data)
    setTotalPages(Math.ceil(resp.data.totalElements / taillePage));
    togllePageDeleteSort(resp.data.totalElements);
  })
    .catch((err) => {
        console.log(err)
    }
    )
}

  const handlePageChange = (page) => {
    setPageActuelleSort(page);
    localStorage.setItem("currentPageSort", page.toString())
  };

  const handleModifierAdresse = (adresse) => {
    handleLadrisa(adresse)
    adresseAccess()
    navigate('/modifierAdresse')
  }

  useEffect(() => {
    selectionPersonnesVoid();
    toggleVersSort(true);
    const storedPageSort = localStorage.getItem("currentPageSort")
    if(storedPageSort){
      setPageActuelleSort(Number(storedPageSort))
    }
    handleGetSortPersonnes();
  }, [pageActuelleSort, taillePage]);

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



  useEffect(() => {
  handleGetSortPersonnes();
  },[addListStateSort]);

  return (
    <div className={`transition-fade ${isVisible ? "visible" : "invisible"}`}>
        <Link className="retourSort" to={'/home'}><span className="arrow">&#8592;</span> Retour</Link>

      <div className="bienvenu">
        <SidebarSort  selectionPersonnesVoid={selectionPersonnesVoid}  toggleAddListStateSort={toggleAddListStateSort} onProblem={onProblem} selectedPersonIds={selectedPersonIds} onDeconnexionClick={onDeconnexionClick} />



        <h1 className="personnes-title">Résultat :</h1>
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
                  {personne.listRepresentation ?(
                  <td
                    className={`case-select-personne ${selectedPersonIds.includes(personne) ? 'selected' : ''}`}
                    onClick={() => selectionPersonnes(personne)}
                  >
                    <span  className="heart">❤️</span> {personne.idRepresentation}
                  </td>
                  ):(
                    <td
                    className={`case-select-personne ${selectedPersonIds.includes(personne)? 'selected' : ''}`}
                    onClick={() => selectionPersonnes(personne)}
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
            ) : (
              <tr>
                <td colSpan="4">Aucune personne trouvée</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="pagination-controls">
                <Pagination togllePageDelete2={togllePageDelete2Sort}
                pageDelete={pageDeleteSort}
                length={lengthSort}
                 currentPage={pageActuelleSort}
            totalPages={totalPages}
            onPageChange={handlePageChange}  />
        </div>
      </div>
    </div>
  );
}
