import React, { useEffect, useState } from "react";
import { desepinglerList, epinglerList, getList, retirerList } from "./service";
import { Link } from "react-router-dom";

export default function List() {
  const [personneList, setPersonnesList] = useState([]);
  const [personneCount, setPersonnesCount] = useState(0);
  const [selectedPersonne, setSelectedPersonne] = useState(null);
  const [addListState, setAddListState] = useState(false);
  const [selectedPersonAddresses, setSelectedPersonAddresses] = useState([]);
  const isVisible = true


  
  const handleGetList = () => {
    getList(localStorage.getItem('idConnexion'))
      .then((resp) => {
        setPersonnesList(resp.data);
        setPersonnesCount(resp.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetList();
  }, [addListState]);

  const handleToggleAdresses = (personne) => {
    if (selectedPersonne === personne) {
      setSelectedPersonne(null);
      setSelectedPersonAddresses([]);
    } else {
      setSelectedPersonne(personne);
      setSelectedPersonAddresses(personne.adressesRepresentation || []);
    }
  };


  const handleEpingler = async (personne) => {
   await epinglerList(personne.idRepresentation)
    setAddListState(!addListState)

  }


  const handleDesepingler = async (personne) => {
    await desepinglerList(personne.idRepresentation)
    setAddListState(!addListState)

  }


  const handleRetirer = async (personne) => {
    await retirerList(personne.idRepresentation)
    setAddListState(!addListState)
  }

  return (
    <div className={`transition-fade ${isVisible ? "visible" : "invisible"}`}>
      <div>
        <div className="retour-hover">
          <Link className="retour" to={'/home'}>
            <span className="arrow">&#8592;</span> Retour
          </Link>
        </div>
        <div className="card-container">
          {personneList &&
            personneList.map((person, index) => (
              <div key={index} className={`card ${selectedPersonne === person ? "active" : ""}`}>
                    {person.epingleRepresentation ? (
                        <div>

                         <div className="card-header">
                            <p>📌 {person.idRepresentation} </p>
                        </div>
                        <div className="card-content">
                  <p>{person.nomRepresentation}</p>
                  <p>{person.prenomRepresentation}</p>
                  <button
                    className="bouton-afficher-adresses-list"
                    onClick={() => handleToggleAdresses(person)}
                  >
                    Afficher Adresses
                  </button>
                </div>
                {selectedPersonne === person &&
                  selectedPersonAddresses &&
                  selectedPersonAddresses.map((adresse, index) => (
                    <div key={index} className="adresse">
                      <p>{adresse.idRepresentation}) {adresse.rueRepresentation}  N°{adresse.numeroMaisonRepresentation}</p>
                    </div>
                  ))}
                <div className="card-footer">
                  <button className="desepingler" onClick={()=> handleDesepingler(person)}  >Désépingler</button>
                  <button className="retirer" onClick={()=> handleRetirer(person)} >Retirer</button>
                </div>
                        
                        </div>
                        
                  ):(

                    <div>

                    <div className="card-header">
                        <p> {person.idRepresentation} </p>
                    </div>   

                    <div className="card-content">
                  <p>{person.nomRepresentation}</p>
                  <p>{person.prenomRepresentation}</p>
                  <button
                    className="bouton-afficher-adresses-list"
                    onClick={() => handleToggleAdresses(person)}
                  >
                    Afficher Adresses
                  </button>
                </div>
                {selectedPersonne === person &&
                  selectedPersonAddresses &&
                  selectedPersonAddresses.map((adresse, index) => (
                    <div key={index} className="adresse">
                      <p>{adresse.idRepresentation}) {adresse.rueRepresentation}  N°{adresse.numeroMaisonRepresentation}</p>
                    </div>
                  ))}
                                  <div className="card-footer">
                  <button className="epingler"  onClick={()=> handleEpingler(person)} >Épingler</button>
                  <button className="retirer" onClick={()=> handleRetirer(person)}  >Retirer</button>
                </div>

                        </div>

                     )}
                     



              </div>
            ))}
        </div>
      </div>
      {personneCount===0 && 
      <h1 className="vide"  >Aucune personne trouvée.</h1>}
    </div>
  );
}