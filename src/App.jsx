import React, { useState } from 'react';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
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

export default function App() {

  const isVisible=true

  return (
    <div className={`transition-fade ${isVisible ? 'visible' : 'invisible'}`}>
     <Navbar />
      <BrowserRouter>

        <Routes>
          
          <Route path='/'  element={<Login/> }  ></Route>
          <Route path='/home'  element={<Home/> }  ></Route>
          <Route path='/modifier'  element={<Modifier/> }  ></Route>
          <Route path='/modifierAdresse'  element={<ModifierAdresse/> }  ></Route>
          <Route path='/create'  element={<Create/> }  ></Route>
          <Route path='/popDemander'  element={<PopDemander/> }  ></Route>
          <Route path='/popValider'  element={<PopValider/> }  ></Route>
          <Route path='/popVoid'  element={<PopVoid/> }  ></Route>
          <Route path='/sort'  element={<Sort/> }  ></Route>
          <Route path='/sign'  element={<Sign/> }  ></Route>

        </Routes>
      
      </BrowserRouter>

     <Footer />
    </div>
  );
}


 

