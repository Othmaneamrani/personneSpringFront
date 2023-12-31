import React, { useEffect, useState } from "react";
import SidebarSort from './SidebarSort';
import { deleteAdresse, getPersonnesSort} from './service';
import Pagination from "./Pagination";
import { Link, useNavigate } from "react-router-dom";

export default function Sort ({ sort,onProblem ,toggleVersSort,adresseAccess ,onvide, onDeconnexionClick,selectedPersonId, selectionPersonne , handleLadrisa}){
  const isVisible = true;

  const [selectedPersonAddresses, setSelectedPersonAddresses] = useState([]);
  const [personnes, setPersonnes] = useState([]);
  const [selectedPersonne, setSelectedPersonne] = useState(null);
  const [pageActuelleSort, setPageActuelleSort] = useState();
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
    getPersonnesSort(pageActuelleSort, taillePage,sort).then((resp) =>{
    setPersonnes(resp.data)
      onvide('')
    setTotalPages(Math.ceil(resp.data.totalElements / taillePage));
      
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
    handleNull()
    toggleVersSort(true)
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
  
  const handleNull = () => {
    selectionPersonne(null)
  }


  useEffect(() => {
  handleGetSortPersonnes();
  },[addListStateSort]);

  return (
    <div className={`transition-fade ${isVisible ? "visible" : "invisible"}`}>
        <Link className="retourSort" to={'/home'}><span className="arrow">&#8592;</span> Retour</Link>

      <div className="bienvenu">
        <SidebarSort selectionPersonne={selectionPersonne}  toggleAddListStateSort={toggleAddListStateSort} onProblem={onProblem} selectedPersonId={selectedPersonId} onDeconnexionClick={onDeconnexionClick} />



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
                    className={`case-select-personne ${selectedPersonId === personne ? 'selected' : ''}`}
                    onClick={() => selectionPersonne(personne)}
                  >
                    <span  className="heart">❤️</span> {personne.idRepresentation}
                  </td>
                  ):(
                    <td
                    className={`case-select-personne ${selectedPersonId === personne ? 'selected' : ''}`}
                    onClick={() => selectionPersonne(personne)}
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
                <Pagination  currentPage={pageActuelleSort}
            totalPages={totalPages}
            onPageChange={handlePageChange}  />
        </div>
      </div>
    </div>
  );
}
