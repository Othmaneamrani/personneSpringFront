import React, { useState } from "react";
import { Link , useNavigate } from 'react-router-dom';
import { createPersonne } from "./service";

export default function Create({onCreate}) {
  const isVisible = true;

  const navigate = useNavigate();


  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [adressesCommand, setAddressesCommand] = useState([]);
  const [adresseCommand, setAdresseCommand] = useState({ rueCommand: '', numeroMaisonCommand: '' ,});


  const [nomCommand, setNomCommand] = useState('');
  const [prenomCommand, setPrenomCommand] = useState('');


  const toggleAddressPopup = () => {
    setIsAddingAddress(!isAddingAddress);
  };


  const addAddress = () => {
    if (adresseCommand.rueCommand.trim() === '') {
      return;
    }
    setAddressesCommand([...adressesCommand, adresseCommand]);
    setAdresseCommand({ rueCommand: '', numeroMaisonCommand: '' });
    toggleAddressPopup();
  };

  const removeAddress = (index) => {
    const updatedAddresses = [...adressesCommand];
    updatedAddresses.splice(index, 1);
    setAddressesCommand(updatedAddresses);
  };

  const handleCreatePersonne = async (e) => {
    e.preventDefault();

      const personneCommand = {
        nomCommand : nomCommand,
        prenomCommand : prenomCommand,
        adressesCommand : adressesCommand
      }

try{
  const response = await createPersonne(personneCommand)
  console.log('reponse de l\'API : '  ,response.data)

  if(response.data === "ok"){
    navigate('/popDemander');
    onCreate(personneCommand.nomCommand)
    console.log(personneCommand.adressesCommand)
  }

}catch (error) {
  console.error('Erreur lors de la requête API:', error);

  }

  }

  return (
    <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`}>
      <div className="retour-hover">
        <Link className="retour" to={'/home'}><span className="arrow">&#8592;</span> Retour</Link>
      </div>
      <div className="personne-container">
        <h1 className="login-header">Créer une personne</h1>
        <form onSubmit={handleCreatePersonne} className="login-form">
          <div className="form-group">
            <label className="login-label" htmlFor="nom">Nom:</label>
            <input className="form-control"
             type="text"
              id="nomCommand" 
              name="nomCommand" 
              value={nomCommand}
              onChange={(e)=>setNomCommand(e.target.value)}
              required />
          </div>
          <div className="form-group">
            <label className="login-label" htmlFor="prenom">Prénom:</label>
            <input className="form-control" 
            type="text"
            id="prenomCommand"
            name="prenomcommand"
            value={prenomCommand}
            onChange={(e)=>setPrenomCommand(e.target.value)}
            required />
          </div>
          <div className="form-group">
            <button className="boutton-login" type="button" id="ajouterAdresse" onClick={toggleAddressPopup}>Ajouter une adresse</button>
          </div>

          <div className="form-group">
          <button className="boutton-login" type="submit">Créer Personne</button>
          </div>
        </form>

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
{adressesCommand.length > 0 && (
  <div className="address-table">
    <h3 className="mini-login-header">Adresses:</h3>
    <table className="address-table">
      <thead>
        <tr>
          <th className="address-cell">Rue</th>
          <th className="address-cell">Numéro de maison</th>
        </tr>
      </thead>
      <tbody>
        {adressesCommand && adressesCommand.map((address, index) => (
          <tr key={index}>
            <td className="address-cell">{address.rueCommand}</td>
            <td className="address-cell">{address.numeroMaisonCommand}</td>
            <td className="address-cell">
              <button  className="bouton-supprimer-adresses" onClick={() => removeAddress(index)}>Supprimer</button></td> 
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
