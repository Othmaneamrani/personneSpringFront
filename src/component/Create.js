import React, { useState } from "react";
import { Link , useNavigate } from 'react-router-dom';
import { createPersonne } from "./service";

export default function Create({onCreate}) {
  const isVisible = true;

  const navigate = useNavigate();


  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({ rue: '', numeroMaison: '' });


  const [nomCommand, setNomCommand] = useState('');
  const [prenomCommand, setPrenomCommand] = useState('');


  const toggleAddressPopup = () => {
    setIsAddingAddress(!isAddingAddress);
  };

  const addAddress = () => {
    setAddresses([...addresses, newAddress]);
    setNewAddress({ rue: '', numeroMaison: '' });
    toggleAddressPopup();
  };


  const handleCreatePersonne = async (e) => {
    e.preventDefault();

      const personneCommand = {
        nomCommand : nomCommand,
        prenomCommand : prenomCommand,
        adressesCommand : addresses
      }

try{
  const response = await createPersonne(personneCommand)
  console.log('reponse de l\'API : '  ,response.data)

  if(response.data === "ok"){
    navigate('/popDemander');
    onCreate(personneCommand.nomCommand)
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
          <div className="address-popup">
            <h3 className="popup-header">Ajouter une adresse</h3>
            <div className="form-group">
              <label className="login-label" htmlFor="rue">Rue:</label>
              <input
                className="form-control"
                type="text"
                id="rue"
                name="rue"
                value={newAddress.rue}
                onChange={(e) => setNewAddress({ ...newAddress, rue: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label className="login-label" htmlFor="numeroMaison">Numéro de maison:</label>
              <input
                className="form-control"
                type="text"
                id="numeroMaison"
                name="numeroMaison"
                value={newAddress.numeroMaison}
                onChange={(e) => setNewAddress({ ...newAddress, numeroMaison: e.target.value })}
                required
              />
            </div>
            <button className="boutton-login" onClick={addAddress}>Ajouter</button>
          </div>
        )}
{addresses.length > 0 && (
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
        {addresses && addresses.map((address, index) => (
          <tr key={index}>
            <td className="address-cell">{address.rue}</td>
            <td className="address-cell">{address.numeroMaison}</td>
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
