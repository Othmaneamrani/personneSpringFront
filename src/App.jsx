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

export default function App() {
  const isVisible = true;


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

  return (
    <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login onConnexion={toggle} onProblem={togglePop} />} />
          <Route path='/sign' element={<Sign onConnexion={toggle} onProblem={togglePop} />} />

          {pop && (
            <>
              <Route path='/popIncorrect' element={<PopIncorrect />} />
              <Route path='/popName' element={<PopName />} />
              <Route path='/popGmail' element={<PopGmail />} />
              <Route path='/popMdp' element={<PopMdp />} />
            </>
          )}

          {isLoggedIn && (
            <>
              <Route path='/home' element={<Home  handleLadrisa={handleLadrisa}    selectedPersonId={selectedPersonId} selectionPersonne={selectionPersonne}  sort={sort} onSort={toggleSort} username={username} onDeconnexionClick={toggle} />} />
              <Route path='/modifier' element={<Modifier selectionPersonne={selectionPersonne} selectedPersonId={selectedPersonId} onCreate={toggleP} />} />
              <Route path='/modifierAdresse' element={<ModifierAdresse ladrisa={ladrisa}  onCreate={toggleP} />} />
              <Route path='/create' element={<Create  selectionPersonne={selectionPersonne} onCreate={toggleP} />} />
              <Route path='/popDemander' element={<PopDemander  p={p} />} />
              <Route path='/popValider' element={<PopValider  selectionPersonne={selectionPersonne} selectedPersonId={selectedPersonId} />} />
              <Route path='/popVoid' element={<PopVoid p={p}/>} />
              <Route path='/sort' element={<Sort handleLadrisa={handleLadrisa}  sort={sort} onvide={toggleSort} selectedPersonId={selectedPersonId} selectionPersonne={selectionPersonne}  />} />
              <Route path='/popSign' element={<PopSign />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
