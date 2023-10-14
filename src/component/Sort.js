import React, { useEffect, useState } from "react";
import SidebarSort from './SidebarSort';
import { deleteAdresse, getPersonnesSort} from './service';
import Pagination from "./Pagination";
import { Link, useNavigate } from "react-router-dom";

export default function Sort ({sort , onvide, onDeconnexionClick,selectedPersonId, selectionPersonne , handleLadrisa}){
  const isVisible = true;

  const [selectedPersonAddresses, setSelectedPersonAddresses] = useState([]);
  const [personnes, setPersonnes] = useState([]);
  const [selectedPersonne, setSelectedPersonne] = useState(null);
  const [pageActuelle, setPageActuelle] = useState();
  const [taillePage, setTaillePage] = useState(5);
  const [totalPages, setTotalPages] = useState(1); 

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


  const hanldeGetSortPersonnes = () => {
    getPersonnesSort(pageActuelle, taillePage,sort).then((resp) =>{
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
    setPageActuelle(page);
    localStorage.setItem("currentPage", page.toString())
  };

  const handleModifierAdresse = (adresse) => {
    handleLadrisa(adresse)
    navigate('/modifierAdresse')
  }

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage")
    if(storedPage){
      setPageActuelle(Number(storedPage))
    }
    hanldeGetSortPersonnes();
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
        <Link className="retourSort" to={'/home'}><span className="arrow">&#8592;</span> Retour</Link>

      <div className="bienvenu">
        <SidebarSort onDeconnexionClick={onDeconnexionClick} />



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
                  <td
                    className={`case-select-personne ${selectedPersonId === personne ? 'selected' : ''}`}
                    onClick={() => selectionPersonne(personne)}
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
                <Pagination  currentPage={pageActuelle}
            totalPages={totalPages}
            onPageChange={handlePageChange}  />
        </div>
      </div>
    </div>
  );
}
