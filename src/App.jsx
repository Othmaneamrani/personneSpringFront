import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Modifier from './component/Modifier';
import ModifierAdresse from './component/ModifierAdresse';
import Create from './component/Create';
import PopDemander from './component/PopDemander';
import PopValider from './component/PopValider';
import PopVoid from './component/PopVoid';
import Sort from './component/Sort';
import Home from './component/Home';
import Sign from './component/Sign';
import Login from './component/Login';
import PopSign from './component/PopSign';
import PopGmail from './component/PopGmail';
import PopName from './component/PopName';
import PopIncorrect from './component/PopIncorrect';
import PopMdp from './component/PopMdp';
import List from './component/List';

export default function App() {
  const isVisible = true;

  const [idConnexion, SetIdConnexion] = useState({id:'' , username: '', password: '' , personnes: []});
  const idConnexionBeddel = (val) => {
    SetIdConnexion(val)
    localStorage.setItem('idConnexion', val.id);
  }
  


  const [showBootstrap, setShowBootstrap] = useState(false);
  const toglleTheme = (val) => {
    setShowBootstrap(val)
  }

  const [modifierAd, setModifierAd] = useState(false);
  const adresseAccess = () => {
    setModifierAd(true)
  }

 
  


  const [versSort, setVersSort] = useState(false);

const toggleVersSort = (val) => {
  setVersSort(val)
}


  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const selectionPersonne = (personne) => {
    if (selectedPersonId === personne) {
      setSelectedPersonId(null);
    } else {
      setSelectedPersonId(personne);
    }
  };

  const [ladrisa, setLadrisa] = useState({ idCommand:'' , rueCommand: '', numeroMaisonCommand: '' });
  const handleLadrisa = (NewLadrisa) => {
    setLadrisa(NewLadrisa)
  }




  const [p, setP] = useState('');
  const toggleP = (val) => {
    setP(val);
  }

  const [sort, setSort] = useState('');

  const toggleSort = (newSort) => {
    setSort(newSort);
  }


  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pop, setPop] = useState(false);
  

  const toggle = (newIsLoggedIn, newUsername) => {
    setIsLoggedIn(newIsLoggedIn);
    setUsername(newUsername);
    localStorage.setItem('isLoggedIn', newIsLoggedIn);
    localStorage.setItem('username', newUsername);
  };

  const togglePop = (newPop) => {
    setPop(newPop);
  }

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');

    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);


  useEffect(() => {
    if (showBootstrap) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css";
      document.head.appendChild(link);
    } else {
      const link = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"]');
      if (link) {
        document.head.removeChild(link);
      }
    }
  }, [showBootstrap]);


  return (
    <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login onConnexion={toggle} idConnexion={idConnexion} idConnexionBeddel={idConnexionBeddel} onProblem={togglePop} />} />
          <Route path='/sign' element={<Sign onConnexion={toggle} onProblem={togglePop} />} />

          {pop && (
            <>
              <Route path='/popIncorrect' element={<PopIncorrect />} />
              <Route path='/popName' element={<PopName />} />
              <Route path='/popGmail' element={<PopGmail />} />
              <Route path='/popMdp' element={<PopMdp />} />
              <Route path='/popSign' element={<PopSign />} />
              <Route path='/popVoid' element={<PopVoid p={p}   versSort={versSort} />} />
              <Route path='/popValider' element={<PopValider   versSort={versSort}  selectionPersonne={selectionPersonne} selectedPersonId={selectedPersonId} />} />
              <Route path='/popName' element={<PopName />} />
              <Route path='/popDemander' element={<PopDemander p={p} />} />

            </>
          )}

          {isLoggedIn && (
            <>
 
              <Route path='/home' element={<Home toglleTheme={toglleTheme} idConnexion={idConnexion} showBootstrap={showBootstrap}  toggleVersSort={toggleVersSort} adresseAccess={adresseAccess} handleLadrisa={handleLadrisa}  onProblem={togglePop}  selectedPersonId={selectedPersonId} selectionPersonne={selectionPersonne}  sort={sort} onSort={toggleSort} username={username} onDeconnexionClick={toggle} />} />
              <Route path='/create' element={<Create   onProblem={togglePop} idConnexion={idConnexion} selectionPersonne={selectionPersonne} onCreate={toggleP} />} />
              <Route path='/sort' element={<Sort  onProblem={togglePop}  adresseAccess={adresseAccess}  toggleVersSort={toggleVersSort} versSort={versSort} handleLadrisa={handleLadrisa}  sort={sort} onvide={toggleSort} selectedPersonId={selectedPersonId} selectionPersonne={selectionPersonne}  />} />
              <Route path='/list' element={<List />} />
            </>
          )}

{selectedPersonId && (
            <>
              <Route path='/modifier' element={<Modifier versSort={versSort} onProblem={togglePop} selectionPersonne={selectionPersonne} selectedPersonId={selectedPersonId} onCreate={toggleP} />} />
            </>
          )}


{modifierAd && (
            <>
              <Route path='/modifierAdresse' element={<ModifierAdresse onProblem={togglePop}  versSort={versSort}  ladrisa={ladrisa}  onCreate={toggleP} />} />
            </>
          )}



        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
