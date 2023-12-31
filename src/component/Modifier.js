import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { updatePersonne, getAllPersonnes } from "./service";

export default function Modifier({onCreate ,selectedPersonId,versSort,onProblem}) {
  const isVisible = true;

  const navigate = useNavigate();

  
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [adressesCommand, setAddressesCommand] = useState([]);
  const [adresseCommand, setAdresseCommand] = useState({idCommand: '' , rueCommand : '', numeroMaisonCommand: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [idCommand,  setIdCommand] = useState('');
  const [epingleCommand,  setEpingleCommand] = useState('');
  const [listCommand,  setListCommand] = useState('');
  const [nomCommand, setNomCommand] = useState('');
  const [prenomCommand, setPrenomCommand] = useState('');
  const [id, setId] = useState('');

  const [isDuplicateAddress, setIsDuplicateAddress] = useState(false);
  const [isDuplicatePerson, setIsDuplicatePerson] = useState(false);

  const [editAddressIndex, setEditAddressIndex] = useState(-1);

  const toggleAddressPopup = () => {
    setIsAddingAddress(!isAddingAddress);
    setEditAddressIndex(-1); 
    if(isDuplicatePerson){
    setIsDuplicatePerson(!isDuplicatePerson)
    }
  };

  const addAddress = (e) => {
    e.preventDefault();
    if (adresseCommand.rueCommand.trim() === '') {
      return;
    }

    const isDuplicate = adressesCommand.some((address) =>
      address.rueCommand === adresseCommand.rueCommand && address.numeroMaisonCommand === adresseCommand.numeroMaisonCommand
    );

    if (isDuplicate) {
      setIsDuplicateAddress(true);
    } else {
      if (editAddressIndex !== -1) {
        const updatedAddresses = [...adressesCommand];
        updatedAddresses.splice(editAddressIndex, 1);
        setAddressesCommand(updatedAddresses);
        setEditAddressIndex(-1);
      }

      setAddressesCommand([...adressesCommand, adresseCommand]);
      setAdresseCommand({ idCommand  : '' , rueCommand: '', numeroMaisonCommand: '' });
      toggleAddressPopup();
      setIsDuplicateAddress(false)
    }
  };

  const removeAddress = (index) => {
    const updatedAddresses = [...adressesCommand];
    updatedAddresses.splice(index, 1);
    setAddressesCommand(updatedAddresses);
    setEditAddressIndex(-1);
  };

  const editAddress = (index) => {
    removeAddress(index)
    if(!isAddingAddress){
    setIsAddingAddress(!isAddingAddress)
    }
    const addressToEdit = adressesCommand[index];
    setEditAddressIndex(index);
    setAdresseCommand({
      idCommand:addressToEdit.idCommand,
      rueCommand: addressToEdit.rueCommand,
      numeroMaisonCommand: addressToEdit.numeroMaisonCommand,
    });
  };

  const handleModifierPersonne = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (selectedPersonId !== null ){
    try {
      const response = await getAllPersonnes();
      const personnes = response.data;

      const isDuplicateP = () => {
        const existingPerson = personnes.find(person => (
          person.nomRepresentation === nomCommand &&
          person.prenomRepresentation === prenomCommand &&
          areAddressesEqual(person.adressesRepresentation, adressesCommand)
        ));

        if (existingPerson && existingPerson.idRepresentation === idCommand) {
          setId('Aucune modification');
          return 1;
        }else if (existingPerson && existingPerson.idRepresentation !== idCommand){
          setId(existingPerson.idRepresentation);
          return 2;
        }
        return 3;
      };

      function areAddressesEqual(addresses1, addresses2) {
        if (addresses1.length !== addresses2.length) {
          return false;
        }

        for (let i = 0; i < addresses1.length; i++) {
          if (
            addresses1[i].rueRepresentation !== addresses2[i].rueCommand ||
            addresses1[i].numeroMaisonRepresentation !== addresses2[i].numeroMaisonCommand
          ) {
            return false;
          }
        }

        return true;
      }

      if (isDuplicateP() === 1) {
        setIsDuplicatePerson(1);
      } else if (isDuplicateP() === 2){
        setIsDuplicatePerson(2);
      }else{
        const personneCommand = {
          idCommand:idCommand,
          nomCommand: nomCommand,
          prenomCommand: prenomCommand,
          adressesCommand: adressesCommand,
          listCommand: listCommand,
          epingleCommand: epingleCommand
        }

        const response = await updatePersonne(personneCommand);
        console.log('réponse de l\'API : ', response.data);

        if (response.status === 200) {
          onCreate(selectedPersonId.nomRepresentation);
          onProblem(true)
          navigate('/popVoid');
        }
      }
    } catch (error) {
      console.error('Erreur lors de la requête API:', error);
    }
  }}

  useEffect(() => {
    if (selectedPersonId !== null) {
      setIdCommand(selectedPersonId.idRepresentation);
      setListCommand(selectedPersonId.listRepresentation);
      setEpingleCommand(selectedPersonId.epingleRepresentation);
      setNomCommand(selectedPersonId.nomRepresentation);
      setPrenomCommand(selectedPersonId.prenomRepresentation);
      setAddressesCommand(selectedPersonId.adressesRepresentation.map(address => ({
        idCommand : address.idRepresentation,
        rueCommand: address.rueRepresentation,
        numeroMaisonCommand: address.numeroMaisonRepresentation
      })));
      console.log(adressesCommand)
          }
  }, [selectedPersonId]);

  return (
    <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`}>
      <div className="retour-hover">
        {versSort ?(
        <Link className="retour"  to={'/sort'} ><span className="arrow">&#8592;</span> Retour</Link>
        ):( <Link className="retour"  to={'/home'} ><span className="arrow">&#8592;</span> Retour</Link>)
        } 
      </div>
      <div className="personne-container">
      <h1 className="login-header">Modifier {nomCommand} </h1>
        <form   onSubmit={handleModifierPersonne} className="login-form">
          <div className="form-group">
            <label className="login-label" htmlFor="nom">Nom:</label>
            <input className="form-control"
              type="text"
              id="nomCommand"
              name="nomCommand"
              value={nomCommand}
              onChange={(e) => setNomCommand(e.target.value)}
              required />
          </div>
          <div className="form-group">
            <label className="login-label" htmlFor="prenom">Prénom:</label>
            <input className="form-control"
              type="text"
              id="prenomCommand"
              name="prenomCommand"
              value={prenomCommand}
              onChange={(e) => setPrenomCommand(e.target.value)}
              required />
          </div>
          <div className="form-group">
            <button className="boutton-login" type="button" id="ajouterAdresse" onClick={toggleAddressPopup}>Ajouter une adresse</button>
          </div>

          <div className="form-group">
            <button className="boutton-login" type="submit">Sauvegarder Personne</button>
          </div>
        </form>

        { formSubmitted && adressesCommand.length === 0 && (
          <p className="alert alert-danger">Veuillez fournir au moins une adresse a {nomCommand}</p>
        )}

        {isDuplicatePerson ===2 && (
          <p className="alert alert-danger">
          Cette personne existe déjà avec l'id {id}
        </p>        )}

        {isDuplicatePerson ===1 && adressesCommand.length !==  0 && (
          <p className="alert alert-danger">
        {id}
        </p>        )}

        {isAddingAddress && (
          <form className="address-popup">
            <h3 className="popup-header">Ajouter une adresse</h3>
            <div className="form-group">
              <label className="login-label" htmlFor="rueCommand">Rue:</label>
              <input
                className="form-control"
                type="text"
                id="rueCommand"
                name="rueCommand"
                value={adresseCommand.rueCommand}
                onChange={(e) => setAdresseCommand({ ...adresseCommand, rueCommand: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="login-label" htmlFor="numeroMaisonCommand">Numéro de maison:</label>
              <input
                className="form-control"
                type="text"
                id="numeroMaisonCommand"
                name="numeroMaisonCommand"
                value={adresseCommand.numeroMaisonCommand}
                onChange={(e) => setAdresseCommand({ ...adresseCommand, numeroMaisonCommand: e.target.value })}
                required
              />
            </div>
            <button className="boutton-login" onClick={addAddress}>Ajouter</button>
          </form>
        )}

        {isDuplicateAddress && (
 <p className="alert alert-danger">
 Cette adresse existe déjà
</p>  

        )}

        {adressesCommand.length > 0 && (
          <div className="address-table">
            <h3 className="mini-login-header">Adresses:</h3>
            <table className="address-table">
              <thead>
                <tr>
                  <th className="address-cell">Rue</th>
                  <th className="address-cell">Numéro de maison</th>
                  <th className="address-cell">Actions</th>
                </tr>
              </thead>
              <tbody>
                {adressesCommand && adressesCommand.map((address, index) => (
                  <tr key={index}>
                    <td className="address-cell">{address.rueCommand}</td>
                    <td className="address-cell">{address.numeroMaisonCommand}</td>
                    <td className="address-cell">
                      <button className="bouton-supprimer-adresses" onClick={() => removeAddress(index)}>Supprimer</button>
                      <button className="bouton-modifier-adresses" onClick={() => editAddress(index)}>Modifier</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
